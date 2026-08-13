---
## 📅 2026-08-03 随机热力学与几何控制前沿动态

### ⚠️ 周一批次状态

截至报告生成时刻，arXiv 周一（8/3）新批次尚未上线。五个追踪分类仍显示 7/31（周五）的 new submissions。本期报告聚焦上批次被漏检的三篇 **cross-listed** 重磅文献——其中 Sakthivadivel 的 Markov 扩散几何层次理论直接命中本方向核心。

---

### 核心推荐文献

#### 1. On two differing geometric descriptions of the passage from microscopy to macroscopy in Markov diffusion theory
* **中文翻译**：Markov 扩散理论中从微观到宏观过渡的两种不同几何描述
* **作者 & 机构**：Dalton A R Sakthivadivel
* **检索来源**：arXiv:2607.28578 [math.PR]（交叉列于 cond-mat.stat-mech）, 2026-07-30, 49+3 页
* **MSC 分类**：Primary: **49Q22**（最优传输/Wasserstein）, 46T05（无穷维流形）, **58B20**（无穷维 Riemann 结构）, **60H10**（随机微分方程）；Secondary: 35Q84, 47D07, 53B12, 60F10, 62B10
* **核心突破 (What's New)**：在闭 Riemann 流形上光滑正概率密度空间（Fréchet 流形）上构造一个**统一对象**，沟通微观→介观→宏观扩散层次的两种不同几何描述。将底流形的微分同胚无穷小提升作用于密度空间，对其做两种不同的 Hilbert 完备化 → 涵盖概率密度流上的最优传输几何、Otto 度量、以及扩散半群的函数分析。
* **数学/物理模型 (Methodology)**：密度空间作为 Fréchet 流形，全连续余切空间 = 非常值分布，正则余切空间 = 充分正则的非常值函数。底流形微分同胚的无穷小提升算子作为核心构造，两种 Hilbert 完备化覆盖从 Fokker-Planck 方程到 Wasserstein 梯度流再到变分泛函不等式的全谱系。实现 Markov 分析中微观→介观→宏观层次的"部分统一化"（partial universalisation）。
* **与本方向关联度**：🎯🎯🎯 **直接命中**。这是将 Wasserstein 几何（49Q22）、无穷维 Riemann 几何（58B20）、随机分析（60H10）三条主线统一到一个几何框架中的工作。对随机最优控制中 HJB 方程在测度空间上的几何解释、以及 Otto 度量上的曲率与扩散漂移的关系，提供了直接的数学基础设施。与 7/31 Dello Schiavo-Pinamonti（Otto 度量曲率归属）和 8/1 Borchard（Wasserstein 二阶最优性）形成三连击：**几何基础→曲率属性→最优性条件**。

---

#### 2. Information-driven stepping in dimeric transport motors
* **中文翻译**：信息驱动的二聚体运输马达步进动力学
* **作者 & 机构**：Antonio Patrón Castro, David A. Sivak（Simon Fraser University 物理系）
* **检索来源**：arXiv:2607.27495 [physics.bio-ph]（交叉列于 cond-mat.stat-mech）, 2026-07-29
* **核心突破 (What's New)**：构建二聚体马达步进的 Brown 运动理论模型，揭示其作为**纯信息引擎**（pure information engine）运行——两组分之间仅传递信息而**无能量交换**，通过隐式作为 Maxwell 妖实现定向运动。模型在局域切换极限下给出热力学自洽的平均速度表达式，自动复现实验观测的失速力（stall force）。
* **数学/物理模型 (Methodology)**：两个马达头做 Brown 运动，迁移率以位置依赖方式周期性切换（每次仅一个头移动）。粗粒化到单力学自由度后产生**二阶非 Markov 动力学**，由此计算四种驻留时间分布（可直接在单分子实验中观测）。稳态下表征能量流与信息流。
* **与本方向关联度**：🎯🎯 与 8/1 Ruiz-Pino 等（信息热力学——噪声反馈下的界失效）形成直接对话。Sivak 组此前以信息热力学和随机热力学闻名；本文从单分子实验可观测量的角度提供了信息→运动转化的最小模型，且纯信息引擎的 Maxwell 妖诠释直接触碰非平衡态能量收集的理论核心。

---

#### 3. Lindbladian quantization of mechanical systems with nonholonomic constraints
* **中文翻译**：非完整约束力学系统的 Lindblad 量子化
* **作者 & 机构**：Daniel Schubring, Sriram Ganeshan（City College of New York, CUNY）
* **检索来源**：arXiv:2607.26146 [quant-ph]（交叉列于 cond-mat.stat-mech, math-ph）, 2026-07-28, 11 页
* **核心突破 (What's New)**：为非完整约束力学系统（缺乏正则 Hamilton 表述）提供量子化路径——将非完整约束作为 Markov 开放量子系统在大耗散极限下的涌现。给出 Chaplygin 雪橇和 Suslov 问题的显式 Lindblad 超算符。
* **数学/物理模型 (Methodology)**：将非完整约束力学嵌入 Lindblad 主方程框架，非完整约束 = 大耗散极限的投影。半经典极限下恢复经典动力学，数值验证协方差满足开放量子系统亚稳态理论预言的关系。11 页、含 3 张图。
* **与本方向关联度**：🎯 非完整力学是几何力学的核心领域（仿射联络、非完整括号、Lagrange-d'Alembert 原理），与 Dirac 结构/PCH 系统同源。用 Lindblad 耗散实现约束→辛不可积系统的随机量子化→对随机 PCH 的"摩擦实现约束"范式有方法论启发。

---

### 📋 备选关注

| arXiv ID | 标题 | 关联点 |
|----------|------|--------|
| 2607.27540 | Gaussian non relativistic spontaneously stochastic hydrodynamics (Montenegro-Torrieri) | 自发随机流体力学，cross-list physics.flu-dyn→cond-mat.stat-mech |
| 2607.26539 | Determining Critical Temperature Differences of Low-Temperature-Differential Stirling Engines (Amemiya-Izumida) | 非线性动力学→Stirling 引擎，非平衡能量转换的低温差极限 |

---

### 💡 今日趋势洞察

1. **Cross-listed 论文的追踪价值被低估**：上批次的三篇 cross-listed 论文——Sakthivadivel 的 52 页几何统一理论、Sivak 组的纯信息引擎实验模型、Schubring-Ganeshan 的非完整耗散量子化——各自命中本方向的三个核心关键词（Wasserstein 几何/信息热力学/非完整约束），但它们被归档在 math.PR、physics.bio-ph、quant-ph 而非传统追踪分类。**建议今后常态化监控交叉列表。**

2. **几何扩散层次理论的范式意义**：Sakthivadivel 将"微分同胚提升→密度空间两种 Hilbert 完备化"作为沟通微观随机过程与宏观变分原理的通用框架，本质上是在构建一个"概率密度流形上的范畴型结构"。若其声称的 partial universalisation 成立，对随机最优控制中 HJB 方程的几何解释将是范式级的。

3. **信息引擎从理论走向实验可观测**：Sivak 组的驻留时间分布计算直接桥接到单分子实验——信息热力学的理论界交叉（Ruiz-Pino 8/1）与可观测模型中纯信息引擎的确认（Patrón Castro-Sivak 本期）构成了信息→运动的完整证据链。

4. **持续缺口**：Itô+辛几何第十八期未命中；PCH/Dirac 新论文仍缺但 Schubring 的非完整 Lindblad 量子化提供了替代入口；乘性噪声+PCH 组合仍空白。
