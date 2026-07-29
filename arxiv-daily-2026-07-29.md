---
## 📅 2026-07-29 随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. Fluctuation theorems for autonomous work in the quantum regime
* **中文翻译**：量子区间自治功的涨落定理
* **作者 & 机构**：Xiu-Hua Zhao, H. T. Quan（北京大学物理学院）
* **检索来源**：arXiv:2607.24690 [cond-mat.stat-mech]
* **核心突破 (What's New)**：首次将自治功（autonomous work）的涨落定理从经典推广至量子区间。经典自治功的 Jarzynski/Crooks 型定理考虑了功源的反作用（backaction）——这是非平衡能量交换理论的核心要素——但在量子区间，测不准原理构成了根本性障碍。作者通过功源和系统的连续投影测量，从初始混合热态导出了量子自治包容功的涨落定理。
* **数学/物理模型 (Methodology)**：量子测度论——连续投影测量的概率框架；推导 Jarzynski 型（指数平均）和 Crooks 型（正逆向概率比）两种涨落关系；关键发现：量子非对易性阻止了即使在大功源极限下的非自治还原（与经典截然不同）；以 Dicke 模型（单模辐射场 + 二能级原子系综）做数值验证。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 直接命中「净能量交换」核心主题。自治功（双向耦合的功源-系统能量交换）是布朗回转器、几何棘轮等非平衡能量收集系统的理论基石。量子推广意味着非平衡涨落框架在量子区间的可操作化——对量子热机/量子能量收集器的最优设计有原则性意义。

#### 2. Non-Reciprocal yet Equilibrium Critical Dynamics
* **中文翻译**：非互易但平衡的临界动力学
* **作者 & 机构**：Emir Sezik
* **检索来源**：arXiv:2607.24252 [cond-mat.stat-mech]
* **核心突破 (What's New)**：非互易相互作用（non-reciprocal interactions）一直被视为非平衡系统的标志——非对称耦合打破时间反演对称性、产生时空模式。本文通过对两个非互易耦合的 n 维矢量序参量做场论重整化群（RG）分析，得到一个反直觉结论：在 ε = 4 − d 最低阶，非互易耦合是 **RG 无关的**，临界行为由平衡态 Model A 普适类控制——尽管相变目的地是非平衡态。非互易性本身不足以诱导新的普适类。
* **数学/物理模型 (Methodology)**：Hohenberg-Halperin 动力学分类的场论 RG；U(n) 对称保护下的两个 n 维矢量序参量非互易耦合；ε 展开至最低阶计算非互易耦合项的标度维数。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 直接命中「随机对称性破缺」核心主题。结论有深刻的否定性力量——它说明并非所有非平衡驱动都产生新的统计行为，对称性保护可以在非互易条件下维持平衡的临界特征。这对判断哪些非平衡系统真正偏离了平衡热力学（从而产生可提取的净能量/功）有原则性方法学意义。

#### 3. Thermodynamics with thermodynamic variable first-passage time. I. From stochastic trajectories to nonlinear transport equations
* **中文翻译**：以热力学变量首通时间为热力学坐标——从随机轨迹到非线性输运方程
* **作者 & 机构**：V. V. Ryazanov
* **检索来源**：arXiv:2607.24078 [cond-mat.stat-mech]
* **核心突破 (What's New)**：将首通时间（first-passage time）从随机过程的统计量提升为完全的热力学宏观坐标。论证了亚稳态的随机寿命可以纳入广义分布函数中，并引入广义热力学势。核心发现：在广义 Maxwell-Cattaneo 方程中，经典弛豫时间被平均首通时间严格替代——这赋予系统**内禀宏观非线性**。
* **数学/物理模型 (Methodology)**：非平衡统计算子方法（Zubarev 学派） + 随机首通时间理论 + 更新理论（renewal theory）推导非马尔可夫输运记忆核。热力学一致性条件用于闭合输运方程。
* **与本方向关联度**：⭐⭐⭐⭐ 首通时间是随机热力学中功、热、熵产生等量的基础统计载体。将其升格为热力学坐标意味着可以用标准热力学框架（势、力、流）处理亚稳态切换等非平衡现象——这对对数势阱中的概率流、净能量交换的统计最优控制有直接方法学价值。

#### 4. Generalized Fine-Tuning of Diffusion Models via Stochastic Control and FBSDEs
* **中文翻译**：基于随机控制与前向-后向随机微分方程的扩散模型广义微调
* **作者 & 机构**：Zirui Wang, Lu Wang
* **检索来源**：arXiv:2607.22660 [math.OC]
* **核心突破 (What's New)**：提出超越熵正则化的扩散模型微调框架——引入一般运行代价，诱导相对广义路径代价，将 KL 散度和最优传输作为特例包含。这导出了**完全非线性 HJB 方程**，并通过 FBSDE 系统刻画值函数。最优控制具有由 BSDE 梯度驱动的非线性反馈形式。
* **数学/物理模型 (Methodology)**：随机最优控制 → 完全非线性 HJB 方程 → FBSDE 解耦（存在唯一性在标准正则性条件下建立）；广义路径代价涵盖 KL + Wasserstein 两种信息几何/最优传输度量。
* **与本方向关联度**：⭐⭐⭐⭐ 是一篇接口论文——从「AI 扩散模型微调」出发，但数学上直接对接了非线性 HJB + FBSDE + 信息几何/最优传输的完整随机控制框架。KL 散度（信息几何）和 Wasserstein 距离（最优传输）作为特例共存于同一非线性 HJB 中，暗示了在更一般代价结构下随机最优控制的几何统一。对非平衡能量收集最优控制（Bao/Mottes-Brenner 脉络）中的代价泛函设计有启发。

#### 5. Bound-Optimized Task Choice for Path Integral Control
* **中文翻译**：路径积分控制的界优化任务选择
* **作者 & 机构**：Rylie Anderson, Goutam Das, Takashi Tanaka（University of Texas at Austin）
* **检索来源**：arXiv:2607.23866 [eess.SY] — CDC 2026 接收
* **核心突破 (What's New)**：路径积分（Path Integral）控制是随机最优控制的强采样方法，但其核心约束——噪声协方差与控制代价矩阵的耦合——在航空/信息物理系统中几乎不满足。本文提出 BOTC 框架：在所有满足 PI 耦合约束的有效近似（称为 tasks）上优化，证明每个 task 给出真实 cost-to-go 的上界、且 BOTC 最小化该上界。
* **数学/物理模型 (Methodology)**：测度变换（change-of-measure）使所有候选 task 可从单组 Monte Carlo 样本评估；优化参数化为 PSD 矩阵；Normal-Inverse-Wishart 重要性采样提升全局优化。
* **与本方向关联度**：⭐⭐⭐ PI 控制与 Feynman-Kac 公式/路径积分量子力学有深层数学对应——它是连接随机控制与量子力学的桥梁之一。本文从实用性出发解决了 PI 控制的耦合松弛问题，对将 PI 方法应用于非平衡能量收集系统的随机最优控制（特别是在复杂噪声结构下）有参考价值。

---

### 🔬 备选关注

| arXiv ID | 标题（简） | 关注理由 |
|----------|-----------|---------|
| 2607.23864 | Shabtai: Localization of quantum systems at **Liouville tori** | 辛几何 + Berezin-Toeplitz 量子化 → Liouville 环面上的量子定域化。Liouville 环面是可积哈密顿系统的相空间骨架——本文给出将量子观测量实现为 L²(Liouville 环面) 上乘法算子的酉嵌入，与辛约化/几何量子化一脉。（math-ph + math.SG，63页） |
| 2607.23475 | Jaśkiewicz-Nowak: Bellman equation with CES aggregator | CES 聚合子 + 熵风险测度 = 递归随机动态规划中 Bellman 方程的存在唯一性。虽非几何，但 Bellman 方程在非期望效用框架下的严格解 → 可对接随机控制的最优策略存在性。 |
| 2607.22541 | Wang: SDE Guided Monte Carlo RL via **Stochastic Maximum Principle** | 随机最大值原理（SMP）用于噪声环境鲁棒决策。SMP 是 HJB/SOC 的另一基础变分途径，与 Pontryagin 原理对应——互补于上周 Kim-Sreenath + Liu-Qi 的 DP 路线。 |
| 2607.24004 | Ding et al.: Closed-loop solvability of infinite-horizon **stochastic LQ** for Markov regime-switching jump-diffusion | 无穷时间随机线性二次型在体制切换跳扩散下的闭环可解性。随机 LQ 是最简非平凡随机最优控制模型，跳扩散的加入使问题非高斯——直接触及非高斯噪声下的最优控制。 |
| 2607.23947 | Dasgupta et al.: **Reverse-Time Diffusion Processes** for discrete/nonlinear systems with **non-Gaussian noise** | 非高斯噪声下的逆向扩散过程——对非高斯环境中的随机控制/滤波有方法学意义。 |

---

### 💡 今日趋势洞察

1. **非平衡涨落定理进入量子自治功阶段**——Zhao-Quan (2607.24690) 是「净能量交换」关键词自追踪启动以来的最强直接命中。经典自治功的涨落定理（考虑功源反作用）是布朗回转器/几何棘轮的理论地基；量子推广意味着涨落定理在量子热机设计中的可操作化。这与上周 Cepollaro（7/21 功算子）和 Kurchan（7/24 量子大偏差）形成清晰的三段递进：经典功算子 → 量子动力学大偏差 → 量子自治功涨落定理。

2. **非互易 ≠ 非平衡普适类**——Sezik (2607.24252) 的否定性结论「非互易耦合是 RG 无关的」值得沉淀。它意味着并非所有非对称驱动都产生偏离平衡热力学的新标度行为——对称性（此处为 U(n)）可能在非互易条件下保护平衡临界特征。这对「哪些非平衡系统能真正提取净能量」提供了一条对称性判据。

3. **FBSDE + 非线性 HJB + 信息几何的三体合一**——Wang-Wang (2607.22660) 将 KL/Wasserstein 统一于同一非线性 HJB 的代价结构下，是 Kim-Sreenath（7/27，KL 轨迹正则化 SOC）的直接数学推广。FBSDE 框架使值函数可在非 Markov 条件下求解——对随机热力学中非 Markov 输运的记忆核问题（如 Ryazanov 24078）构成天然求解工具。

4. **今日五个核心推荐中，三个直接命中高优先级关键词**（自治功涨落定理、非互易临界动力学、首通时间热力学），两个深度命中中优先级（非线性 HJB+FBSDE、路径积分控制）——密度和质量均属上乘，是追踪启动以来「双高命中」最集中的单日。

---

*下一批次预计 2026-07-30（周四）自动覆盖。*
