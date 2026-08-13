---
## 📅 2026-08-04 随机热力学与几何控制前沿动态

### ⚡ 周一（8/3）批次

五分类统计：cond-mat.stat-mech(9+8 cross)、math-ph(7+21 cross)、math.DG(9+7 cross)、math.OC(18+5 cross)、eess.SY(25+10 cross)，总计约 **68 篇新投稿**。命中密度极高——**HJB 指数收敛**和**无穷维 Hamilton 熵几何**双破零。

---

### 核心推荐文献

#### 1. A Policy Iteration Scheme for Semilinear Stochastic Hamilton-Jacobi-Bellman Equations with Exponential Convergence
* **中文翻译**：半线性随机 Hamilton-Jacobi-Bellman 方程的策略迭代算法及其指数收敛性
* **作者 & 机构**：Hasib Uddin Molla, Jinniao Qiu
* **检索来源**：arXiv:2607.29024 [math.OC]（交叉列于 q-fin.MF）, 2026-07-31
* **核心突破 (What's New)**：针对**非 Markov 随机最优控制**中值函数为随机场的 SHJB 方程，提出策略迭代算法：将非线性 SHJB 逐次线性化为一列线性方程。证明近似序列在均方意义下**单调收敛于值函数，且收敛速率为指数级**。这是 SHJB 计算方法的重大突破——在控制量不进入随机积分系数时 SHJB 退化为半线性形式，此前处理"可测随机性"是计算瓶颈。
* **数学/物理模型 (Methodology)**：非 Markov 随机最优控制 → 值函数 = 随机场 → SHJB 偏微分方程（随机系数）。策略迭代（policy iteration）：每轮求解线性随机 PDE → 更新控制策略 → 下一轮。指数收敛证明基于均方范数的单调性论证。
* **与本方向关联度**：🎯🎯🎯 **直接命中 HJB + 随机最优控制关键词**。这是自追踪启动以来首个直接在标题中命中"Stochastic Hamilton-Jacobi-Bellman Equations"的论文。半线性 SHJB 的策略迭代 = 在随机最优控制中引入了几何结构（逐次线性化 = 局部线性近似流形）。对非 Markov 设定下流形上的 HJB 方程求解有直接的方法论意义。

---

#### 2. Entropy Geometry and Normalized Means on Infinite-Dimensional Hamiltonian Manifolds
* **中文翻译**：无穷维 Hamilton 流形上的熵几何与正规化均值
* **作者 & 机构**：Jean-Pierre Magnot
* **检索来源**：arXiv:2607.28660 [math-ph]（交叉列于 math.DG）, 2026-07-21
* **核心突破 (What's New)**：在**无穷维 Hamilton 系统**中——当不存在合适的 σ-可加不变测度时——用「正规化均值」（normalized means）替代概率测度，在弱辛 Fréchet 流形上构造熵和自由能泛函，给出指数族平衡态的存在唯一性。平衡态在保参考均值和权重的 Hamilton 流下为稳态，且当参考均值为 Poisson 不变时满足经典**Poisson-KMS 恒等式**。
* **数学/物理模型 (Methodology)**：弱辛 Fréchet 流形上的几何分析。正规化均值推广概率测度和正规化积分。指数族平衡态的构造不依赖测度、仅依赖几何结构。Numéraire 取对数配分泛函 → 光滑+凸 → Legengre-Fenchel 对偶 → 广延变量域上的凹熵。具体应用于流群 Map(M,G) 和微分同胚群 Diff(M) 上的 H^s 测地线方程（流体力学/场论实例）。
* **与本方向关联度**：🎯🎯🎯 **直接命中信息几何 + 辛几何两条主线的交点**。这是将统计力学概念（熵、配分函数、指数族）**几何化**到无穷维 Hamilton 流形上的框架。Poisson-KMS 条件 = 非平衡稳态的几何判据，对"随机对称性破缺 + 几何约束下的净能量交换"提供了严格的数学基础。与 8/3 Sakthivadivel（密度流形统一几何）形成互补——Sakthivadivel 在概率密度层，Magnot 在 Hamilton 相空间层。

---

#### 3. Scalar curvature density as a new invariant in thermodynamic geometry: metric dependence and critical exponents
* **中文翻译**：标量曲率密度作为热力学几何中的新不变量：度量依赖性与临界指数
* **作者 & 机构**：José Torres-Arenas, Jaime Jaramillo-Gutiérrez, Juan Becerra-Zamudio
* **检索来源**：arXiv:2607.29170 [cond-mat.stat-mech], 2026-07-31
* **核心突破 (What's New)**：在 Ruppeiner 热力学几何中引入**标量曲率密度** R = √|g| · R 作为与纯标量曲率 R 互补的新几何不变量。关键发现：两种度规（定容 g_V vs 定粒子数 g_N）给出不同的临界标度——R ∼ t^{−dν}（关联长度指数主导），而 R ∼ t^{−(1+β)}（仅由序参量指数 β 控制，与普适类无关）。定义两个新几何对象：曲率相等曲线（CEC）和曲率密度相等曲线（CDEC）。
* **数学/物理模型 (Methodology)**：Ruppeiner 几何（信息几何在热力学中的应用）→ 三个流体模型（v.d. Waals → Lennard-Jones → 多参数氩气态方程，后者正确复现 Ising 普适类的非平均场临界行为）。四条 Widom 线（由 R_V、R_N、R_V、R_N 的极小值定义）在所有模型中均展现特征四重结构。
* **与本方向关联度**：🎯🎯 **信息几何在统计物理中的直接应用**。标量曲率密度引入了一个独立于度规选择的新自由度——这对"在何种几何结构上定义非平衡热力学的距离/曲率"这一本质问题有直接启发。CEC/CDEC 概念可类比到非平衡稳态的几何分类问题。

---

#### 4. Deriving the second law of thermodynamics and exploring its boundaries
* **中文翻译**：热力学第二定律的推导及其边界的探索
* **作者 & 机构**：Yu Qiao
* **检索来源**：arXiv:2607.28765 [cond-mat.stat-mech], 2026-07-30, 33 页
* **核心突破 (What's New)**：给出适用于经典与量子系统、跨越广泛时间尺度与远离平衡程度的**第二定律统一推导**。核心条件极简：宏观态概率 f 随可能微观态数 Ω 单调增（∂f/∂Ω > 0），则第二定律自然从相空间连续性方程推导出。**关键反例**：局域非混沌系统满足 ∂f/∂Ω ≤ 0 → 传统热力学失效 → 熵可**自发降低**且无需能量代价。
* **数学/物理模型 (Methodology)**：相空间连续性方程 + 宏观态概率 f 与微观态计数 Ω 的偏序关系。完全混沌系统自动满足 ∂f/∂Ω > 0；局域非混沌导致偏序反转。
* **与本方向关联度**：🎯🎯 从第一性原理出发重审第二定律的适用范围，与信息热力学（Ruiz-Pino 8/1）中"噪声反馈下热力学界失效"的现象形成理论呼应。局域非混沌 → 熵自发降低的机制可能为纳米尺度能量收集装置提供新的设计原理。

---

#### 5. Disorder induced time crystal in athermal random field Ising model with non-reciprocal interactions
* **中文翻译**：非互易相互作用的无热随机场 Ising 模型中的无序诱导时间晶体
* **作者 & 机构**：Aldrin B E, Sumedha
* **检索来源**：arXiv:2607.28781 [cond-mat.stat-mech], 2026-07-30
* **核心突破 (What's New)**：🎉 **非互易第六弹**。仅靠随机场无序 + 非互易相互作用，**无需任何外部驱动**，在双物种随机场 Ising 模型中产生混沌时间晶体相。完全图上精确可解；三维系统中自相关时间随系统尺寸发散（二维不出现）。相图含混沌时间振荡区域（中间 K–σ 区）。
* **数学/物理模型 (Methodology)**：贪婪 Glauber 动力学在完全图上的精确解 → 平均场相图。非互易参数 K 与淬火无序方差 σ 的双参数平面上的相分析。
* **与本方向关联度**：🎯 **非互易六联击延续**——前五弹（RG 临界性→FDT 违反→非单调输运→力学柔度→最小非平衡模型）均为稳态/输运现象，本篇首次将非互易性引入时间破缺（时间晶体 = 自发时间平移对称破缺）。非互易 + 时间序 = 非平衡态时间结构的新维度。

---

### 📋 备选关注

| arXiv ID | 标题 | 关联点 |
|----------|------|--------|
| 2607.29651 | Welker-Fujiya-Stark: Non-reciprocal torques guide self-assembly | 🎉 非互易第七弹：非互易扭矩引导活性粒子自组装 → 胶体微机器；随机重置加速自组装 |
| 2607.28939 | Putkaradze: Latent Lie-Poisson Neural Networks | Lie-Poisson 几何 + 神经网络 → 从观测数据发现 Lie-Poisson 系统运动（几何力学的数据驱动的变体）|
| 2607.29654 | Gross-Jammula-Chern: Elastic Curves via Geometric Mechanics | 弹性曲线的几何力学处理（math.DG + math-ph cross-list）|
| 2607.29514 | Liao-Liu-Mou-Sun: Robust mean field control → optimal execution | 平均场控制 + 复合不确定性下的最优执行 |
| 2607.29434 | Egenlauf et al.: Entropy production of active matter as indicator for computing performance | 活性物质熵产生 ↔ 计算性能指标 |

---

### 💡 今日趋势洞察

1. **HJB + 几何双破零**：Molla-Qiu 的半线性 SHJB 策略迭代（指数收敛）和 Magnot 的无穷维 Hamilton 熵几何在同一批次上线，标志着随机最优控制的计算方法与几何基础在 arXiv 上同频推进。当前方向的理论基础设施正在从"零散工具"走向"成体系框架"。

2. **非互易现象加速扩展**：上周五弹综述刚刚完成，本周一即出现第六弹（时间晶体，Aldrin-Sumedia）和第七弹（活性自组装，Welker-Stark）。非互易性从一个 niche 主题变为跨越多体物理、活性物质、动力学相变、甚至时间破缺的**跨领域现象**，追踪需持续关注 cond-mat.soft 交叉列表（Welker 投 soft 而非 stat-mech）。

3. **热力学几何进入"度量选择"元讨论**：Torres-Arenas 等对标量曲率密度 R 的研究表明，Ruppeiner 几何中 V-度规 vs N-度规的选择不仅是技术细节，而是产生不同临界标度律的物理区分。这对非平衡稳态的几何描述有直接隐喻——"在哪个度量下测量曲率"影响物理预言。

4. **持续缺口**：Itô+辛几何第十九期；乘性噪声+PCH 组合仍空白；Dirac 结构新论文仍缺。

---
