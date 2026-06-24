# CQT 项目记忆

## CQT LaTeX 项目结构
- 位置: c:/Dev/CQT
- 作者: Lao Chen，范畴论统一视角的中文数学讲义系列
- 技术栈: LuaLaTeX + book 文档类 + 共享 preamble.sty + 共享 ref.bib
- 编号体系: 00X-主题/ 目录结构，每章一个 .tex 文件
- 8个子项目: 张量/矩阵(001)、量子力学(002)、类型Topos(003)、Gelfand(004)、几何(005)、量子语言(006)、线性代数(007)、复数(008)、知乎汇编(000)
- 编译: lualatex → biber → lualatex ×2（标准四步）
- preamble.sty 关键修复历史：pdfx→hyperref 替换、移除 chinese babel、silence 前置、引用方括号重定义
- 全项目验证通过：4个活跃 tex 全部零错误零警告零 Overfull/Underfull (2026-06-23)
- 编译约定：无人值守（requires_approval=false），自动 pdftotext 中文检测

## 微信公众号
- App ID: wx20c08388c30c1610
- 凭证位置: ~/.openclaw/.env
- 技能: wechat-content-studio (c:/Users/RR/.codebuddy/skills/wechat-content-studio)
- 历史文章: 30篇永久素材已获取

## 知乎专栏
- 专栏: 数学物理连载 (https://www.zhihu.com/column/ps-math)
- 作者: 菜场学院菜老师 (https://www.zhihu.com/people/smdw)
- 文章总数: 约180篇 (MP1~MP149+)
- 核心内容: 代数/群论/范畴论/微分几何/数论/线性代数/拓扑/同调代数
- 发文时间: 2018-2025年，平均赞同约35/篇
- API限制: 仅返回最近10篇，网页抓取被403封锁
- CQT互补: 张量矩阵、量子力学、Gelfand理论、复数（专栏空白）
- 000-zhihu/zhihu.tex: 已汇编11章，含15篇已确认链接 + 12篇目录文章

## JCS 全栈系统架构 (c:/Dev/JCS)
- 核心理念: "RPC as Functor" — F# 后端和 TypeScript 前端之间通过代码生成实现类型安全的序列化/反序列化
- 论文基础: Chen Siduo (2024), DOI: 10.5281/zenodo.11398320
- 关键模块: JCS.Shared(16个DB实体+ORM) → TypeSys(离线代码生成) → JCS.BizLogics(运行时) → AioServer/Server(部署)
- 前端: portal(Vue3,5045) + vscode(Vue3,5046) + VsCodeTemplate(Vue3,5173)
- 双重通信: HTTP REST JSON + WebSocket
- 三层编解码: 二进制(bin)/JSON/empty，每类型生成对称的 F# 和 TypeScript 函数对

## TypeSys 代码生成流水线
- 输入: Design-*.json → 输出: OrmTypes.fs, OrmMor.fs, CustomMor.fs, Types.fs, SQL迁移, TypeScript对应文件
- 编译顺序: FSharp.fs → MetaType.fs → Common.fs → RDBMS.fs → CodeRobotI.fs → LangPackTypeScript.fs → CodeRobotIIFs.fs → CodeRobotIITs.fs → FrontendPackVue.fs → CodeRobot.fs → Loadcfg.fs → Program.fs
- 支持12个项目配置: J7/Game/GNexts/J/Studio/FA/JA/CTC/GCHAIN/Personal/GenVI/BizShared
- 命名约定: p-Type(扁平存储), Rcd Type(完整记录), T__U 格式序列化函数

## J7 量化交易平台 (c:/Dev/J7)
- 外汇/CFD 交易策略研究与自动化，F# 主语言(net10.0)，C# WinForm 控件
- 核心模块: J7.Shared(类型+ORM) → J7.QLib(量化分析/Kelly/前向终止) → J7.BizLogics(业务/MT4/Kraken/回测) → Workstation(Direct2D图表) / AvaloniaApp(跨平台UI) / Server(Web)
- 策略插件: Stg.*.dll 动态加载 Qx 子类，onTick/onBar/onZenVertex 回调
- 券商: MT4(文件系统通信) + Kraken(REST+WebSocket)
- UtilVortice: Direct2D 绘图引擎，双缓冲 BiLayer → GDI+ Bitmap → WinForm PictureBox
- Stg/ 目录绝对禁止访问（策略机密）

## Common 代码库 F# 风格规范 (c:/Dev/Common)
1. T__U 转换命名（双下划线，如 json__str、str__bin）
2. 构造器命名 empty__Type（如 empty__Stats()）
3. 极致管道化（函数最后参数为数据，大量 |>/>>=/>=）
4. Railway Oriented Programming（CtxWrapper Suc/Fail，自定义运算符 >>=/>=/<||>）
5. 声明式性能监控（CodeWrapper/ConcurrencyWrapper/MemAlloc，IDisposable + use）
6. 自包含实现（优先手写，如 JSON 解析器手写递归下降）
7. 自定义并发集合（ModDict 分片锁字典）
8. 异步循环器（asyncCycler 系列，while true + Async.Start）
9. 泛型插件架构（RuntimeTemplate 编译时类型安全）
10. 极简主义（零/少注释、单字母变量名、Record 大量 mutable、不忌讳 null/全局可变状态）
11. 类型推断优先（依赖 F# 类型推断，避免显式类型标注）

## 飞书集成
- App ID: cli_aab0372c38f99bcd, 用户: user290940, Brand: feishu
- 个人文档: https://qcn8q2iy81an.feishu.cn/wiki/TG69wUm8liTxZLkPLjucRNU9nf4
- Token 约2小时过期，需 lark-cli auth login 重新授权

## 公众号文章 HTML 渲染注意事项
- MathJax → SVG 渲染：`$$...$$` 多行块（含 `\begin{bmatrix}...\end{bmatrix}` 等环境）必须**完整合并**后一次性交给 MathJax 渲染，绝不能逐行拆开。
- 正确做法：解析 Markdown 时，收集 `$$...$$` 之间的所有行，拼接成完整 LaTeX 字符串，再调用 `mathjax.tex2svg()`。
- 错误做法：逐行 `tex2svg()` 会把矩阵/对齐等跨行环境拆散，导致渲染出黑块或错位。
- 同样适用于 `\begin{aligned}`、`\begin{cases}`、`\begin{pmatrix}` 等所有 amsmath 跨行环境。
- 文章文件位置：`c:\Dev\CQT\公众号文章-复数化的概率.md`（源文件），`c:\Dev\CQT\公众号文章-复数化的概率-wx.html`（微信发布版）
- **「相关阅读」规则**：只能引用已在公众号公开发表、有公网 URL 的文章。绝不能引用 CQT 内部 LaTeX 文档（如 `/004-gelfand-theory/` 等），这些没有公网地址、没有发表过。如果没有可引用的已发表文章，直接去掉「相关阅读」板块。
