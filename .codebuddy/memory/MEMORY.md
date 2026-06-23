# CQT 项目记忆

## 项目概述
CQT 是 **Lao Chen** 撰写的一套**中文数学讲义系列**，采用 LuaLaTeX 编译，输出 6x9 英寸书籍式 PDF。整个项目的统一主题：**以范畴论 (Category Theory) 作为统一的视角和语言，重新审视和组织现代数学中的多个核心领域**。

## 技术栈
- **编译引擎**: LuaLaTeX (`%!TEX program = lualatex`)
- **文档类**: `book` (10pt, openany)
- **中文字体**: Noto Serif SC（多种粗细）
- **英文字体**: GFS Didot（衬线体）
- **中文字体斜体**: StKaiTi
- **核心包**: amsmath, amssymb, amsthm, mathtools, physics, tikz-cd, nicematrix
- **参考文献**: biblatex (authoryear-comp 风格)
- **共享样式**: `preamble.sty`
- **共享参考文献**: `ref.bib` (35.63 KB，含大量数学物理经典文献)

## 子项目结构

### 001-tensor-matrix/ — 张量与矩阵：范畴论观点
- 10章，80.62 KB .tex
- 从图论出发，范畴论视角研究张量积、矩阵、谱理论 → 张量函子与伴随

### 002-quantum-mechanics/ — 量子力学讲义：概率的复算子化
- 11章，19.69 KB .tex
- Hamilton力学 → 量子公理 → 概率复算子化 → 泛函分析 → 算子代数 → 谱理论 → Gelfand理论 → Topos

### 003-type-topos/ — 类型与 Topos：范畴论观点
- 早期草稿，2.94 KB .tex
- 局部语言 → 类型递归构造 → Topos 逻辑基础

### 004-gelfand-theory/ — Gelfand 理论：空间、逻辑、量子物理
- 10章，**最大讲义** (97.96 KB .tex)
- Gelfand-Naimark定理：CHaus ≃ CC* 对偶 → 点↔极大理想↔特征标 → Grothendieck topos 中全局化 → 非交换几何

### 005-geo/ — 几何讲义
- 通过 `\input{subfiles/...}` 组织，9个子文件
- 点集拓扑 → 交换代数 → 层论 → 同调 → 流形(m/m²切空间) → de Rham上同调 → 概型 → 辛几何 → 力学
- 含与现代AI/深度学习的联系笔记

### 006-quantum-lingual/ — 量子语言：量子、topos、语言、AI
- 3章，19.59 KB .tex
- Operad理论 → 熵的新视角 → 代数与统计的接口
- `ref/note.md` 分析 AI(2024-2026) 与高等数学的交叉：奇点解消↔Grokking、持续同调↔LLM拓扑、最优传输↔视频生成

### 007-linear-algebra/ — 线性代数讲义：范畴论观点
- 17章，**最大 .tex 文件** (108.16 KB)
- 核心创新：**Hom 函子利用域的内在结构将集合转化为线性空间**
- h^A 反变 Hom 函子（特别是 h^Z、h^2）展示线性空间的自由生成过程
- 7个 doc/ .md 设计文档

### 008-complex-number/ — 复数讲义
- 6章，26.56 KB .tex
- "数是一种特别的线性算子" — 矩阵表示引入复数
- 复数域 = R[x]/(x²+1) → Abel群自同态 → 近复结构 J²=-I → 辛结构 → 全纯函数 → 谱 → C*-代数

## 跨讲义核心主题
- **反变 Hom 函子 h^A = Hom(-,A)**: 贯穿所有讲义的核心构造
- **Gelfand 对偶**: 出现于 002, 004, 005, 008
- **Topos 理论**: 出现于 001, 002, 003, 004, 007
- **谱理论 (Spec, MaxSpec)**: 出现于 001, 004, 005, 007, 008
- **辛几何/近复结构**: 连接 005 和 008
- **tikz-cd 交换图**: 所有讲义的可视化核心

## .tex 编译与 PDF 检查规则

### 无人值守编译 — 绝对规则
- **CRITICAL**: 所有 TeX 编译命令（lualatex、biber、pdftotext 等）**必须直接执行，绝不中断**
- `requires_approval` **永远**设为 `false`
- **禁止**使用任何会导致确认弹窗的命令格式
- **禁止**在编译过程中停下来询问用户
- 编译链路：clean → lualatex → biber → lualatex → lualatex（全程自动，一次性执行完）
- 用户已多次强调此要求，违反此规则是不可接受的

### IDE 配置（防止弹窗中断）
- 项目配置文件：`c:\Dev\CQT\.codebuddy\settings.json`
- 关键设置：`"permissions": {"defaultMode": "bypassPermissions", "allow": [...]}`
- 此配置已部署，所有编译命令无弹窗直接执行

### 中文乱码自动检测与修复
- **检测工具**: 使用 `pdftotext -layout` 提取 PDF 文本
- 可用的 pdftotext: `C:\texlive\2024\bin\windows\pdftotext.exe`
- **主要乱码原因**: `\babelfont{rm}` 的 HarfBuzz 渲染器会将标准 CJK 字符映射到 Kangxi Radical/CJK Compatibility 码位
- **修复方案**: 移除 `Renderer = HarfBuzz`，使用默认 Node 渲染器
- 每次编译完成后必须自动执行此检查

### 引用格式
- 使用 `biblatex`，`style=authoryear-comp`，`citestyle=authoryear`
- 引用格式要求：方括号 `[Author Year]`
- 实现方式：`\renewcommand*{\mkbibparens}[1]{\mkbibbrackets{#1}}`
- 注意：`\DeclareOuterCiteDelims` 在 TeX Live 2024 biblatex 版本中不可用

### 警告抑制
- 使用 `silence` 包 + `\WarningFilter` 抑制已知无害警告：
  - 字体 shape/size 替换（latexfont）
  - hyperref unreferenced destination
  - 命令重定义（LaTeX: has changed）

## 文件组织约定
- 每个子目录有独立的 `font/` 目录（约 120 个 .ttf 文件）
- 001、002 含 `prompt.md`（AI辅助写作的工作流描述）
- 004、005、008 引用 `../preamble.sty` 和 `../ref.bib`
- 005 有 `doc/main.md` 和 `subfiles/` 组织
- 007 有 `doc/` 下的 7 个设计 .md 文件
- 006 有 `ref/note.md` 背景阅读笔记
