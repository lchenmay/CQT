# CQT 项目架构与乐谱转换手册

CQT 是一组数学 / 物理 / AI / 音乐讲义合集（26 章），统一用 `lualatex + latexmk` 编译。
本手册记录项目编译链路，并**重点归档"乐谱 → LaTeX 片段"的复用经验**，让下次转换无需重新摸索。

---

## 1. 编译工具链

| 组件 | 说明 |
|------|------|
| 引擎 | `lualatex`（TeX Live 2026 路径 `C:\texlive\2026\bin\windows`） |
| 构建 | `latexmk -lualatex <章>.tex`（`latexmkrc` 已开启 `-shell-escape`，供 lyluatex 调 LilyPond） |
| 监听 | `CQT/watch-compile.ps1`：`FileSystemWatcher` 监听 `*.tex`，2s 防抖后重跑 `latexmk -lualatex -quiet` |
| 版式 | `preamble.sty`（基础：6in×9in 出血 + 中文 polyglossia + 数学 + biblatex）→ `preamble-paper.sty`（论文版式）/ `preamble-music.sty`（仅音乐章，lyluatex） |
| 字体 | 项目本地 `CQT/font/` 下 NotoSerifSC 静态 ttf（路径相对 .tex 所在章目录） |
| 文献 | `ref.bib`（biblatex + biber）；约定每条 `\AtEveryBibitem{\clearfield{note}}` 不显示 note 字段 |

音乐章入口：`CQT/011-music/music.tex`，开头 `\usepackage{../preamble-music}`。

---

## 2. 音乐章乐谱渲染规范

`preamble-music.sty` 用 **lyluatex**（底层调 LilyPond）渲染出版级乐谱：

- 行内谱：`\lilypond{<c' e' g'>2.}`（随正文流式排版）
- 整段谱：`\begin{lilypond} \version "2.24.4" \paper{ indent=0\mm; line-width=150\mm } \score{ … \layout{} } \end{lilypond}`
- 外部文件：`\lilypondfile{score.ly}`（大谱推荐，源文件单独存放、便于版本管理）
- LilyPond 绝对路径在 `preamble-music.sty` 里硬编码进 `\setluaoption{ly}{program}{…lilypond.exe}`（winget 的 App Execution Alias 在子进程里起不来，故指真实二进制）

> 版本铁律：所有由 `musicxml2ly` 生成的 `.ly` 必须把 `\version` 写死为 `"2.24.4"`，与上面硬编码的 LilyPond 路径版本一致。

---

## 3. 乐谱 → LaTeX 转换管线（重点）

### 3.1 结论：哪种输入格式最方便

LilyPond 只"认" **MusicXML** 当正规进口；其他格式都得先变成 MusicXML 或被专门工具半解析。

| 格式 | LilyPond 能否直接吃 | 保真度 | 转 LaTeX 的额外步骤 | 结论 |
|------|--------------------|--------|---------------------|------|
| **MusicXML**（`.musicxml` / `.xml` / 压缩 `.mxl`） | ✅ `musicxml2ly` 原生支持 | 高（音符/时值/谱号/调号/拍号/歌词/连音线基本都在） | **零**（直接转） | ⭐ 最方便 |
| **`.mscz`**（MuseScore 压缩包） | ❌ 内里是 MuseScore 自有 XML（根 `<museScore>`），不是 MusicXML | 最高（母带） | 需 MuseScore 先 `导出→MusicXML`（一步） | 很方便，但多一道桥 |
| **MIDI**（`.mid` / `.midi`） | ⚠️ `midi2ly` 能读但特殊 | 低（无调号/谱号/节奏，靠量化 + 猜） | 直接，但结果要大量手工修 | 仅当只有 MIDI 时凑合 |
| **PDF** | ❌ 已完成"画死"的矢量图，无语义 | — | 必须 OMR 光学识别 → MusicXML，错误多 | ❌ 别走 |

**推荐工作流**：源文件用 `.mscz` 编辑存盘；转 LaTeX 时交 `.musicxml`（从 `.mscz` 无损导出）给 `musicxml2ly`。两者保真度一样，但 `.musicxml` 少了"装 MuseScore 当桥"那道依赖。

### 3.2 环境依赖（本机已具备）

- **LilyPond 2.24.4**（winget 安装），关键文件路径：
  - 二进制：`C:/Users/RR/AppData/Local/Microsoft/WinGet/Packages/LilyPond.LilyPond_Microsoft.Winget.Source_8wekyb3d8bbwe/lilypond-2.24.4/bin/lilypond.exe`
  - 自带 Python：`…\bin\python.exe`（用来跑转换器，避免系统 Python 缺 LilyPond 模块）
  - 转换器：`…\bin\musicxml2ly.py`、`…\bin\midi2ly.py`
  - `musicxml2ly` 在 2.24 已支持**直接吃压缩 `.mxl`**（内部自动解压）；极端情况下解压失败，脚本有 `Expand-Archive` 兜底。
- **MuseScore**（仅 `.mscz` 需要）：脚本自动探测 `MuseScore4.exe` / `mscore.exe`；找不到就提示你先在 GUI 里 `导出 → MusicXML`。

### 3.3 一键脚本 `CQT/011-music/mscz2lytex.ps1`

脚本把任意受支持输入统一转成符合规范的产物。**全 ASCII 编写**（见 §3.7 坑位①，PowerShell 5.1 会把带中文的无 BOM UTF-8 脚本读错）。

**参数**

| 参数 | 默认 | 说明 |
|------|------|------|
| `-InputFile`（必填） | — | 输入谱文件 |
| `-OutputDir` | 输入文件所在目录 | 产物输出目录 |
| `-BaseName` | 输入文件名（去扩展名） | 产物前缀 |
| `-Mode` | `file` | `file` 生成 `.ly` + `\lilypondfile` 片段；`inline` 生成整段内联 `\begin{lilypond}` |
| `-Key` | `""` | 仅 MIDI：`midi2ly` 的 `-k` 调号，如 `"f \minor"` / `"c \major"` |
| `-SectionTitle` | `BaseName` | include 片段里的 `\section` 标题 |
| `-MuseScorePath` | 自动探测 | 仅 `.mscz`：MuseScore CLI 路径 |

**调用示例**

```powershell
cd C:\Dev\CQT\011-music

# 最常用：MusicXML(.mxl) → 规范 .ly + 可 \input 的章节片段
powershell -NoProfile -ExecutionPolicy Bypass -File .\mscz2lytex.ps1 `
    -InputFile ballade-no4-in-f-minor.mxl `
    -SectionTitle "Chopin Ballade No.4 Op.52 (MusicXML import)"

# .mscz：先经 MuseScore 导出 MusicXML，再转
powershell -NoProfile -ExecutionPolicy Bypass -File .\mscz2lytex.ps1 `
    -InputFile song.mscz -MuseScorePath "C:\Program Files\MuseScore 4\bin\MuseScore4.exe"

# MIDI：指定调号，输出内联块
powershell -NoProfile -ExecutionPolicy Bypass -File .\mscz2lytex.ps1 `
    -InputFile melody.mid -Key "f \minor" -Mode inline
```

> 注意用 `powershell.exe`（不是 `pwsh`），且加 `-ExecutionPolicy Bypass`，否则脚本可能被策略拦下。

**产出**

- `<BaseName>.ly` —— 后处理好的 LilyPond 源（`-Mode file` 的交付物）
- `<BaseName>.include.tex` —— `\section{…}` + `\lilypondfile{<BaseName>.ly}`，`music.tex` 里 `\input` 即可
- `<BaseName>.inline.tex` ——（仅 `-Mode inline`）整段 `\begin{lilypond}…\end{lilypond}`

### 3.4 后处理三原则（脚本自动执行）

1. **`\version` 统一为 `"2.24.4"`** —— 与 `preamble-music.sty` 硬编码的 LilyPond 版本一致（否则 lyluatex 可能拒绝或触发版本转换）。
2. **注入干净 `\paper { indent = 0\mm }`** —— `musicxml2ly` 会自带一坨 `\paper`（含 `paper-width/height`、`indent = 1.6…\cm` 等页几何）。脚本**先整体删除自动 `\paper` 块，再注入** `indent = 0\mm`，对齐手写肖邦节选版式；`line-width` 不锁（让 lyluatex 铺满正文宽度，全曲音符更大更清晰）。
3. **删除自动加的 `\midi { }`** —— 打印用不到，留着无害但冗余。

### 3.5 集成进 `music.tex`

把 `<BaseName>.include.tex` 在 `music.tex` 的 `\printbibliography` 之前 `\input` 即可（现有手写肖邦节选在 `\section{肖邦《第四叙事曲》Op.\,52 片段}`，新全谱可放其后）：

```latex
% music.tex
...
\input{ballade-no4-in-f-minor.include}   % 由 mscz2lytex.ps1 生成
\printbibliography
\end{document}
```

之后 `latexmk -lualatex -g music.tex` 重建（大谱会显著增大 PDF、拖慢编译，属正常）。

### 3.6 排错 / 已知坑位

1. **PowerShell 脚本编码**：脚本必须**纯 ASCII**。PowerShell 5.1 默认按系统 ANSI（GBK）读无 BOM 的 UTF-8 脚本，中文会把引号/花括号位置打乱导致解析失败（表现为一堆 "Missing closing '}'" 或 "Array index expression is missing"）。写脚本时注释/报错一律用英文。
2. **`musicxml2ly` 末尾 `'lilypond' is not recognized`**：无害。它转完想顺手调 `lilypond` 做版本升级，但 `lilypond` 不在 PATH；脚本已把 `\version` 写死 `2.24.4`，编译交给 lyluatex，无需理会。
3. **`musicxml2ly` 一堆 warning**（overfull measure / slur inside slur / negative skip / grace note）：**非致命**，多是源谱记谱细节（如 MuseScore 自动连音线嵌套）的近似。只要最后 `Output to …` 且 LilyPond 能编译即可。复杂记号（八度 `ottava`、跨谱连梁、踏板）偶有瑕疵，扫一眼 `.log` 必要时手工修。
4. **`.mscz` 必须 MuseScore 桥**：直接把 `.mscz`/`.mscx` 喂 `musicxml2ly` 会解析失败（根元素不是 `<score-partwise>`）。要么 GUI 导出 `.musicxml`，要么装 MuseScore 让脚本自动 `-o` 导出。
5. **MIDI 无调号**：`midi2ly` 不认调号/谱号，必须 `-Key` 指定（如 `"f \minor"`）；否则转出来是无调号原始音高，需大量手工润色。仅适合"抓一段旋律"。
6. **lyluatex 字体警告（非致命，但刷屏）**：编译音乐章时若反复出现 `Module lyluatex Warning: … you probably loaded polyglossia before defining the main font`，根因是 `preamble.sty` 里 `\usepackage{polyglossia}` 排在 `\setmainfont` **之前**——lyluatex 在 `\begin{document}` 抓不到主字体族名，只能"猜"。**修复**：把 `\setmainfont`/`\setsansfont`/`\setmonofont` 移到 `\usepackage{polyglossia}` 之前（也是 fontspec/polyglossia 推荐顺序，对所有 26 章安全）。这同时消除了乐谱内 tempo 标记 / 排练记号等文字用错字体的隐患。
7. **lyluatex 找不到 Ghostscript（非致命，但乐谱不被裁剪）**：编译时若反复出现 `Module lyluatex Warning: gs couldn't be launched; there could be rounding errors.`，根因是 **lyluatex 在 TeX Live 下只搜 `gs`，不搜 `gswin64c`**（源码 `ghostscript_candidates()`：仅 MiKTeX 分支返回 `{'gswin64c','gs'}`，TeX Live 分支只返回 `{'gs'}`），而 Windows 版 Ghostscript 只装成 `gswin64c.exe`（`C:\Program Files\gs\gsXXXX\bin\`），没有 `gs.exe` → 检测失败、乐谱 PDF 无法精确裁剪（留白变大，但不阻塞编译）。**修复**：在 PATH 上放一个 `gs.exe`（**不能只加 GS 的 bin 目录到 PATH**——那里只有 `gswin64c.exe`）。做法：把 `gswin64c.exe` **连同它依赖的 `gsdll64.dll`** 一起复制到用户可写目录（如 `C:\Dev\bin\gs.exe` + `C:\Dev\bin\gsdll64.dll`，DLL 必须与 exe 同目录才能加载），再把该目录加入用户 PATH。注意：直接往 `C:\Program Files\gs\...` 写 `gs.exe` 会被权限拒绝，须绕到用户目录。
8. **音乐章编译的 `Permission denied` 假象（真凶是僵尸进程）**：若 `latexmk` 报 `Cannot remove file 'music.log' … Permission denied`、且 `music.log` 首行变成 `Latexmk: Using biber…`（不是 TeX 日志），**不是权限/PDF 占用/云同步问题**，而是上一轮被取消的 `lualatex.exe`/`perl.exe`（latexmk 引擎）子进程没被杀干净，一直锁着 `.aux/.log/.bcf`。**修复**：`Stop-Process -Name lualatex,latexmk,perl -Force` 杀净残留 → 删掉损坏的辅助文件（含 `music.bcf-SAVE-ERROR`、`music.bbl-SAVE-ERROR` 和首行错乱的 `music.log`）→ 重新编译。`latexmk -c` 清理也会因锁而失败，必须先杀进程。
9. **音乐章必须自带 `.latexmkrc` + 命令行必须用 `latexmk`**：`latexmk` 默认只从**当前目录**读 rc，不会读项目根目录的。其它章（如 `006`/`010`）各自带 `.latexmkrc`（含 `-shell-escape`），而 `011-music/` 若缺这个文件，`lyluatex` 起不动 LilyPond（只开 `restricted system commands`）→ `LilyPond could not be started`。**修复**：在 `011-music/` 放一份 `.latexmkrc`，至少含 `$lualatex = 'lualatex --shell-escape';`（与 `preamble-music.sty` 的 LilyPond 绝对路径配合）。**命令行用法铁律**：音乐章**必须**用 `latexmk -lualatex music.tex`（自动带 `--shell-escape`），或显式 `lualatex --shell-escape music.tex`；**绝不可裸跑 `lualatex music.tex`**——没有 shell-escape 时 LilyPond 起不来，lyluatex 会在 `ly.score:process()` 抛 `[\directlua]:1: in main chunk` 的 Lua 异常并停在 `?` 交互提示，表现就是 `\end{lilypond}` 处崩溃。

### 3.7 实测记录（2026-07-24）

- 输入：`ballade-no4-in-f-minor.mxl`（114.92 KB 压缩 MusicXML）
- 命令：`mscz2lytex.ps1 -InputFile ballade-no4-in-f-minor.mxl`
- 结果：生成 `ballade-no4-in-f-minor.ly`（后处理生效：`\version "2.24.4"` + `\paper{indent=0\mm}`，无 `\midi`）+ `ballade-no4-in-f-minor.include.tex`
- 直接 `lilypond.exe -o _validate_ballade ballade-no4-in-f-minor.ly` 校验：**exit 0**，产出 552 KB PDF，证明 `.ly` 语法有效、管线端到端可用。
- 残留 warning 均为非致命（见 §3.6③）。

### 3.8 生成 `.ly` 的声部组织与分片分析（重点）

`musicxml2ly` 的产物**按声部（voice）组织，不按段落（小节区间）组织**。这是分片分析前必须认清的结构事实（以 `ballade-no4-in-f-minor.ly` 为例，全曲通用）。

#### 3.8.1 结构要点

顶层是一个 `\new PianoStaff`，内部只有两个 `\context Staff`，每个 staff 引用若干个**贯穿全曲的独立 voice 变量**：

```lilypond
\new PianoStaff <<
  \context Staff = "1" <<
    \context Voice = "PartPOneVoiceOne"   { \voiceOne   \PartPOneVoiceOne }
    \context Voice = "PartPOneVoiceTwo"   { \voiceTwo   \PartPOneVoiceTwo }
    \context Voice = "PartPOneVoiceThree" { \voiceThree \PartPOneVoiceThree }
  >>
  \context Staff = "2" <<
    \context Voice = "PartPOneVoiceFive" { \voiceOne \PartPOneVoiceFive }
    \context Voice = "PartPOneVoiceSix"  { \voiceTwo \PartPOneVoiceSix }
  >>
>>
```

| 维度 | 事实 |
|------|------|
| voice 变量数 | **5 个**，各自从曲首写到曲尾（平行纵向贯穿，非「第 1 段 / 第 2 段」切片） |
| voice 定义行 | `PartPOneVoiceOne`=29、`PartPOneVoiceTwo`=1311、`PartPOneVoiceFive`=1627、`PartPOneVoiceSix`=3080、`PartPOneVoiceThree`=3176（均为 `= \relative … {` 独立块） |
| 声部→谱表归属 | **不在变量里**，在 `\context Staff="1"/"2"` 指定 |
| 高音谱表（Staff 1） | VoiceOne + VoiceTwo + VoiceThree |
| 低音谱表（Staff 2） | VoiceFive + VoiceSix |
| 调号/拍号/谱号 | **每个 voice 在自己第一小节开头独立带**（`\clef "treble" \time 6/8 \key as \major`，低音声部为 `\clef "bass"`，例：行 30 / 行 1628） |

#### 3.8.2 这对「分片分析」意味着什么

| 目标 | 方便度 | 原因 |
|------|--------|------|
| 提取某**声部** / 某**谱表** | ✅ 极方便 | 直接引用对应 `PartPOneVoice*` 变量；声部彼此零耦合 |
| 提取某**段落（小节区间）** | ⚠️ 需切分 | LilyPond 无「取变量第 N–M 小节」语法；须进每个 voice 内部手动/脚本切出对应段再重装 |

结论：**声部维度天然解耦，段落维度天然耦合**。要做按主题/段落的分片分析，方向是段落切分——当前结构不原生支持，需在 5 个 voice 里各自切。

#### 3.8.3 切分的锚点与障碍（ballade 实测）

切分锚点齐备，但有三类指令要在切出的中段里清理/保留：

| 元素 | 实测分布 | 切段处理 |
|------|----------|----------|
| `\| % N` 小节号注释锚点 | 几乎每小节末尾都有（行 30 `% 1`、行 1628 `% 1`、各 voice 全程） | **切分依据**：按此锚把 voice 切成单小节片段 |
| `\barNumberCheck #N` | 61 处（如行 50 / 159 / 362） | **清除**：断言绝对小节号，切出的中段会失效报错 |
| `\break` / `\pageBreak` | 大量（排版指令，如行 60 / 90 / 989） | **清除**：残留会破坏片段排版 |
| `\clef "treble"/"bass"` 谱号切换 | voice 内部频繁（尤其 VoiceThree / VoiceSix 的跨谱手位交换段，行 1677–1754 等来回切换） | **原位保留**：这是真实记谱（音符在两谱表间跳），切段时绝不可当全局指令清掉 |

> ⚠️ 段首谱号陷阱：切中段时，段首当前谱号取决于该段起始位置实际所在的谱表，不一定是行 30/1628 的全局起始谱号。重装片段时，段首 `\clef` 必须写成该段**实际起始谱号**，并检查中段里残留的 `\clef` 切换是否仍正确。

#### 3.8.4 推荐方案：写 Python 提取脚本（不要手工切）

```mermaid
graph TD
    A[ballade-no4-in-f-minor.ly<br/>按声部组织：5 voice 贯穿全曲] -->|解析变量边界<br/>PartPOneVoiceX = \\relative| B[5 个 voice 变量文本]
    B -->|按 | % N 注释锚点<br/>切成单小节片段| C[按小节索引的音符片段池]
    C -->|按段落边界列表<br/>[(7,36),(37,72),...]| D[每段重组成<br/>mmA_B_VoiceOne..Six]
    D --> E[每段落生成新 .ly<br/>段首补 \\clef \\time \\key<br/>清 \\barNumberCheck/\\break/\\pageBreak<br/>原位保留 \\clef 切换]
    E -->|\\lilypondfile 或 \\include| F[music.tex 分片分析节]
```

脚本步骤（参考骨架）：

1. 读 `.ly`，靠 `PartPOneVoiceX = \relative … {` 与下一个变量 / `\score` 边界，识别 5 个 voice 变量文本区间。
2. 在每个 voice 内部按 `| % N` 注释切成单小节片段，建「小节索引 → 音符」池。
3. 给定段落边界列表（如 `[(7,36),(37,72),(73,110),...]`），把每个 voice 的对应小节片段拼成 `mmA_B_VoiceOne … Six`；段首补 `\clef \time \key`（必要时 `\tempo`），并正则清除 `\barNumberCheck #\d+`、`\break`、`\pageBreak`，**保留** voice 内的 `\clef` 切换。
4. 输出若干小 `.ly`（或一份带所有段落变量的 `.ly`），`music.tex` 每个分析节用 `\lilypondfile{mmA_B.ly}` 或 `\begin{lilypond}\include …\end{lilypond}` 引用对应段组装成 `\score`。

这样最初的「7–36 小节」需求就成了边界列表 `[(7,36)]` 的第一个产物；后续加段落只是往边界列表追加数字。

#### 3.8.5 实测记录（2026-07-24）

- 全曲结构核实：`\new PianoStaff` + 2 staff + 5 voice（行 29/1311/1627/3080/3176 定义，行 3220–3226 组装）。
- 声部→谱表映射确认：Staff 1 = VoiceOne+Two+Three（treble），Staff 2 = VoiceFive+Six（bass）。
- 中段清理对象已定位：`\barNumberCheck`×61、`\break`/`\pageBreak` 多处、`\clef` 切换集中于 VoiceThree/VoiceSix 的跨谱段。
- 结论：声部粒度直接可拎；段落粒度须脚本在每个 voice 内按 `| % N` 切。

---

## 4. 附录：`mscz2lytex.ps1` 完整脚本

> 该文件已落地于 `CQT/011-music/mscz2lytex.ps1`。此处存档一份，便于只读场景复制。

```powershell
<#
.SYNOPSIS
    MuseScore / MIDI score -> CQT-spec LilyPond/TeX fragment converter.

.DESCRIPTION
    Unified converter for the following inputs:
      - .mxl  / .musicxml / .xml   (MusicXML; recommended, highest fidelity)
      - .mscz                      (MuseScore bundle; needs MuseScore CLI to export MusicXML first)
      - .mid  / .midi              (MIDI; no key/clef info, needs -Key, low fidelity)

    Uses LilyPond's bundled python.exe to call musicxml2ly.py / midi2ly.py
    (avoids a system Python missing LilyPond modules). Post-processing ensures:
      - \version normalized to "2.24.4" (matches the lilypond path hardcoded in preamble-music.sty)
      - injects \paper { indent = 0\mm } (matches the hand-written Chopin excerpt layout)
      - removes the auto-added \midi{ } (not needed for print)

.OUTPUT
    - <BaseName>.ly                processed LilyPond source (file-mode deliverable)
    - <BaseName>.include.tex       \section + \lilypondfile fragment, \input into music.tex
    - <BaseName>.inline.tex        (only -Mode inline) full \begin{lilypond}...\end{lilypond} block

.EXAMPLE
    .\mscz2lytex.ps1 -InputFile ballade-no4-in-f-minor.mxl
    .\mscz2lytex.ps1 -InputFile song.mscz -MuseScorePath "C:\Program Files\MuseScore 4\bin\MuseScore4.exe"
    .\mscz2lytex.ps1 -InputFile melody.mid -Key "f \minor" -Mode inline
#>
param(
    [Parameter(Mandatory = $true)]
    [string]$InputFile,

    [string]$OutputDir = "",          # default = input file directory

    [string]$BaseName = "",           # default = input file name without extension

    [ValidateSet("file", "inline")]
    [string]$Mode = "file",           # file: .ly + \lilypondfile fragment; inline: inline block

    [string]$Key = "",                # MIDI only: midi2ly -k key, e.g. "f \minor" / "c \major"

    [string]$SectionTitle = "",       # \section title inside include fragment; default = BaseName

    [string]$MuseScorePath = ""       # .mscz only: MuseScore CLI path; auto-detect if empty
)

$ErrorActionPreference = "Stop"

# ---- LilyPond (winget) install location ----
$lpBase = "C:/Users/RR/AppData/Local/Microsoft/WinGet/Packages/LilyPond.LilyPond_Microsoft.Winget.Source_8wekyb3d8bbwe/lilypond-2.24.4"
$bin         = Join-Path $lpBase "bin"
$py          = Join-Path $bin "python.exe"
$musicxml2ly = Join-Path $bin "musicxml2ly.py"
$midi2ly     = Join-Path $bin "midi2ly.py"

foreach ($f in @($py, $musicxml2ly, $midi2ly)) {
    if (-not (Test-Path $f)) { throw "Missing LilyPond component: $f`nPlease install LilyPond 2.24.4 via winget." }
}

# ---- resolve input ----
if (-not (Test-Path $InputFile)) { throw "Input file not found: $InputFile" }
$inPath = Resolve-Path $InputFile
$ext    = [System.IO.Path]::GetExtension($inPath).ToLower()

if ($BaseName -eq "") { $BaseName = [System.IO.Path]::GetFileNameWithoutExtension($inPath) }
if ($OutputDir -eq "") { $OutputDir = Split-Path $inPath }
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

$lyOut = Join-Path $OutputDir "$BaseName.ly"

# ---- detect MuseScore CLI ----
function Find-MuseScore {
    if ($MuseScorePath -ne "" -and (Test-Path $MuseScorePath)) { return $MuseScorePath }
    $cands = @("MuseScore4.exe", "mscore.exe", "MuseScore3.exe")
    foreach ($c in $cands) {
        try { $p = (Get-Command $c -ErrorAction Stop).Source; if ($p) { return $p } } catch { }
    }
    $guess = @(
        "C:\Program Files\MuseScore 4\bin\MuseScore4.exe",
        "C:\Program Files (x86)\MuseScore 4\bin\MuseScore4.exe",
        "$env:LOCALAPPDATA\Programs\MuseScore 4\bin\MuseScore4.exe"
    )
    foreach ($g in $guess) { if (Test-Path $g) { return $g } }
    return $null
}

# ---- MusicXML -> .ly ----
function Convert-MusicXmlToLy($xmlPath, $outLy) {
    & $py $musicxml2ly $xmlPath -o $outLy
    if ($LASTEXITCODE -ne 0) { throw "musicxml2ly failed (exit $LASTEXITCODE)" }
}

# ---- MIDI -> .ly ----
function Convert-MidiToLy($midPath, $outLy) {
    $args = @()
    if ($Key -ne "") { $args += @("-k", $Key) }
    $args += @($midPath, "-o", $outLy)
    & $py $midi2ly @args
    if ($LASTEXITCODE -ne 0) { throw "midi2ly failed (exit $LASTEXITCODE)" }
}

# ---- post-process .ly ----
function Edit-Ly($path) {
    $txt = Get-Content $path -Raw -Encoding UTF8

    # 1) normalize \version
    $txt = [regex]::Replace($txt, '(?m)\\version\s+"[^"]*"', '\version "2.24.4"')

    # 2) drop \midi { ... } (non-greedy, multiline)
    $txt = [regex]::Replace($txt, '(?s)\\midi\s*\{.*?\}', '')

    # 3) drop the auto-generated \paper { ... } entirely, then inject a clean one.
    #    musicxml2ly embeds page geometry / a non-zero indent; lyluatex renders a
    #    fragment and we want indent = 0\mm to match the hand-written Chopin example.
    $txt = [regex]::Replace($txt, '(?s)\\paper\s*\{.*?\}', '')
    $txt = [regex]::Replace($txt, '(?m)(\\version\s+"2.24.4")', "`$1`n`n\paper {`n  indent = 0\mm`n}")

    Set-Content $path $txt -Encoding UTF8 -NoNewline
}

# ===== main flow =====
Write-Host "[1/3] Parsing input: $inPath ($ext)" -ForegroundColor Cyan

switch ($ext) {
    { $_ -in @(".mxl", ".musicxml", ".xml") } {
        try {
            Convert-MusicXmlToLy $inPath $lyOut
        } catch {
            if ($ext -ne ".mxl") { throw }
            Write-Host "      .mxl direct conversion failed, trying to unzip inner .xml ..." -ForegroundColor Yellow
            $tmp = Join-Path $OutputDir "_mxl_extract"
            Expand-Archive -Path $inPath -DestinationPath $tmp -Force
            $inner = Get-ChildItem $tmp -Recurse -Filter *.xml | Select-Object -First 1
            if (-not $inner) { throw "No inner .xml found after unzip" }
            Convert-MusicXmlToLy $inner.FullName $lyOut
        }
    }
    { $_ -in @(".mscz") } {
        $ms = Find-MuseScore
        if (-not $ms) {
            throw ".mscz needs MuseScore CLI to export MusicXML first. Either:`n" +
                  "  1) In MuseScore: File -> Export -> MusicXML(.musicxml), then feed that .musicxml here, or`n" +
                  "  2) Install MuseScore and pass -MuseScorePath, then re-run this script."
        }
        Write-Host "      Found MuseScore: $ms" -ForegroundColor DarkGray
        $mxlMid = Join-Path $OutputDir "$BaseName.musicxml"
        & $ms $inPath -o $mxlMid | Out-Null
        if ($LASTEXITCODE -ne 0 -or -not (Test-Path $mxlMid)) {
            throw "MuseScore MusicXML export failed"
        }
        Convert-MusicXmlToLy $mxlMid $lyOut
    }
    { $_ -in @(".mid", ".midi") } {
        Convert-MidiToLy $inPath $lyOut
    }
    default {
        throw "Unsupported input format: $ext (support .mxl/.musicxml/.xml/.mscz/.mid/.midi)"
    }
}

Write-Host "[2/3] Post-processing .ly: version=2.24.4 / indent=0 / strip midi" -ForegroundColor Cyan
Edit-Ly $lyOut

Write-Host "[3/3] Generating TeX fragment ($Mode mode)" -ForegroundColor Cyan
if ($SectionTitle -eq "") { $SectionTitle = $BaseName }

if ($Mode -eq "inline") {
    $body = Get-Content $lyOut -Raw -Encoding UTF8
    $inline = "\begin{lilypond}" + [Environment]::NewLine + $body.Trim() + [Environment]::NewLine + "\end{lilypond}" + [Environment]::NewLine
    $inlineOut = Join-Path $OutputDir "$BaseName.inline.tex"
    Set-Content $inlineOut $inline -Encoding UTF8
    Write-Host "      wrote: $inlineOut" -ForegroundColor Green
    Write-Host "      Paste the file content (or \input{$BaseName.inline.tex}) into music.tex." -ForegroundColor DarkGray
} else {
    $snippet = "\section{$SectionTitle}" + [Environment]::NewLine + [Environment]::NewLine +
               "\lilypondfile{$BaseName.ly}" + [Environment]::NewLine
    $snipOut = Join-Path $OutputDir "$BaseName.include.tex"
    Set-Content $snipOut $snippet -Encoding UTF8
    Write-Host "      wrote: $lyOut" -ForegroundColor Green
    Write-Host "      wrote: $snipOut" -ForegroundColor Green
    Write-Host "      In music.tex add: \input{$([System.IO.Path]::GetFileNameWithoutExtension($snipOut))}" -ForegroundColor DarkGray
}

Write-Host "Done." -ForegroundColor Green
```
