
## 📅 2026-07-12（周日）随机热力学与几何控制前沿动态
> ⚠️ **周末说明**：arXiv 周末不推送新论文。最新批次仍为 **7 月 10 日（周五）**，其中 5 篇已在昨日报告覆盖。本期为**补充轮次**，覆盖同一批次中昨日遗漏的 5 篇潜在相关论文。

---

### 核心推荐文献

#### 1. Kime-Representation Formulations of Three Open Problems in the Foundations of Classical Mechanics: Uncertainty, Invariant Entropy, and Directional Degrees of Freedom
* **中文翻译**：经典力学基础中三个开放问题的 Kime 表示公式：不确定性、不变熵与定向自由度
* **作者 & 机构**：Ivo D. Dinov（密歇根大学 / Michigan Institute for Data Science）
* **检索来源**：arXiv:2607.07851 [math-ph]（2026-07-08 提交，交叉列入 cs.AI, physics.comp-ph）
* **核心突破 (What's New)**：在复时间（kime）框架下，将 kime 锥与相空间作用-角图作严格辛同构——kime 测度即 Liouville 测度，相位分布为 Liouville 密度的角条件分布。提出并证明了**辛相位空间上的熵不确定性关系**，极值族为 von Mises × Gauss 分布；**非正则不确定性关系**的修正项精确识别为 Poisson 括号的几何平均。
* **数学/物理模型 (Methodology)**：kime 相位建模为圆形随机变量，分布 Φ 模拟重复实验的逐次变异性。核心几何结构：kime 锥 ≅ 单自由度相空间作用-角图的辛同构 → Liouville 测度 = kime 测度。利用 Williamson 正规型 + Fischer 不等式证明聚合多自由度界，相位扩散 → 单调熵增至 Haar 均匀。
* **与本方向关联度**：⭐⭐⭐⭐ 高度相关。直接建立了**辛几何 ↔ 随机熵动力学**的双向映射：① kime 相位是圆形随机过程 → 天然与布朗回转器的角度变量对应；② Liouville 测度恒等式为乘性噪声在辛流形上的不变测度理论提供了经典力学版框架；③ 相位扩散驱动的熵单调性给出了随机对称性破缺的精确时间箭头。唯缺口在于该文在经典确定性框架下，尚未显式引入朗之万噪声项。

---

#### 2. Quantum Filtering and Propagation of Chaos for Open Quantum Systems, with Applications to Quantum Feedback Control and Quantum Mean-Field Games
* **中文翻译**：开放量子系统的量子滤波与混沌传播：在量子反馈控制与量子平均场博弈中的应用
* **作者 & 机构**：Vassili N. Kolokoltsov（华威大学 / University of Warwick）
* **检索来源**：arXiv:2607.08507 [math-ph]（2026-07-09 提交）
* **核心突破 (What's New)**：首次给出无限维量子系统中混合态滤波方程的**严格数学理论**——Belavkin 40 年前提出量子滤波框架以来，这一数学严化问题一直未解决。作者近期完成了混合态量子滤波方程的严格推导（从基本原理到大数律极限/混沌传播），本文为综述性完整陈述。
* **数学/物理模型 (Methodology)**：量子连续测量滤波方程、混沌传播（propagation of chaos）→ 大数律极限、量子反馈控制、量子动力学博弈与平均场博弈。MSC 分类覆盖 60H15（随机 PDE）、60K35（相互作用粒子系统）、81Q93（量子控制）、93E11/93E20（滤波与随机控制）。
* **与本方向关联度**：⭐⭐⭐⭐ 高度相关。① 量子滤波方程的数学结构与经典随机最优控制中的 **Kushner-Stratonovich 方程**同源，其混沌传播极限直接对应 McKean-Vlasov 型平均场随机控制；② 量子平均场博弈 = 量子版流形上的 HJB + FPK，为几何流形上的随机控制提供了量子化版本的数学基准；③ 对构建量子-经典随机对称性统一框架具有方法论文献价值。

---

#### 3. Reachability-Preserving Bellman Operator for the Discounted Reach-Cost Value Function: Uniting Hamilton-Jacobi Reachability and Reinforcement Learning
* **中文翻译**：保可达性折扣可达代价 Bellman 算子：统一 Hamilton-Jacobi 可达性分析与强化学习
* **作者 & 机构**：Isabelle El-Hajj, Prashant Solanki, Jasper van Beers, Coen de Visser, Erik-Jan van Kampen（代尔夫特理工大学 / TU Delft，航空航天学院）
* **检索来源**：arXiv:2607.07893 [eess.SY]（2026-07-08 提交）
* **核心突破 (What's New)**：弥合 HJ 可达性与 RL 之间的语义鸿沟：以往 Discounted HJ 可达性公式要么改变了原始可达性语义（引入人为 contraction），要么保留了语义但缺少 Bellman 不动点刻画。本文构造了**非加性 Bellman 算子**，其唯一不动点精确等于 HJ 公式中的值函数，证明 discounting 使该算子 contractive（存在性、唯一性、值迭代收敛保证），且 RL 可解释为该不动点方程的采样逼近。
* **数学/物理模型 (Methodology)**：连续时间 Hamilton-Jacobi 偏微分方程 → 保语义 discount 化 → 非加性 Bellman 不动点算子 → contraction 分析 → RL 采样逼近。核心创新：在值函数空间中保可达性零水平集语义的前提下，首次建立了 HJI PDE ⇔ Bellman 算子的严格等价性。
* **与本方向关联度**：⭐⭐⭐ 相关。① HJ 方程是随机最优控制的核心 PDE（HJB 为抛物型特例），本文对 Bellman-HJ 对应关系的深刻处理对随机 HJB 在流形上的保结构离散化有方法启发性；② 非加性 Bellman 算子的 contraction 构造思路可能推广到随机热力学中的最优输运/熵产生变分问题；③ 直接关联度低于涉及 Itô 修正或辛结构的论文，但其 PDE 保语义方法可迁移。

---

#### 4. Sub-Infinite Horizon Stochastic Linear-Quadratic Optimal Control Problems and Delayed Backward Riccati Equations
* **中文翻译**：次无限时域随机线性二次最优控制与延迟倒向 Riccati 方程
* **作者 & 机构**：Yutao Chen, Hongwei Lou, Hanxiao Wang（推测为复旦大学/山东大学数学系）
* **检索来源**：arXiv:2607.08225 [math.OC]（2026-07-09 提交）
* **核心突破 (What's New)**：提出"次无限时域"（sub-infinite horizon）随机 LQ 控制——初始时间 t 任意取于 [0,∞)，运行代价定义在固定窗口 [t, t+T] 上。关键发现：标准方法求得的最优控制**时间不一致**（time-inconsistent），转而寻求时间一致的局部最优均衡策略。导出一种新型 **延迟倒向 Riccati 方程**（生成元含未知量的延迟项），等价于带超前项的前向 ODE → Fredholm 积分方程，利用 Leray-Schauder 不动点定理证明可解性。
* **数学/物理模型 (Methodology)**：随机 LQ → 时间不一致性分析 → 均衡策略（非最优控制）→ 延迟 Riccati ODE → Fredholm 积分方程等价 → 先验估计 + Leray-Schauder 不动点。提供了 T → ∞ 时的收敛行为分析。
* **与本方向关联度**：⭐⭐⭐ 相关。① 时间不一致性是随机控制中长期存在的根本难题，其延迟 Riccati 方程的解结构可能对非马尔可夫随机热力学（如记忆核朗之万方程的几何控制）有借鉴；② 固定窗口的最优输运/控制问题在随机热力学的有限时间热机分析中天然出现；③ 属于随机最优控制的理论基础深化，与几何/Hamilton 框架的直接接口需要后续桥接工作。

---

#### 5. Wigner Symmetries Single Out Symmetric Wasserstein Distances in All Finite Dimensions
* **中文翻译**：Wigner 对称性唯一刻画所有有限维对称 Wasserstein 距离
* **作者 & 机构**：Gergely Bunth（匈牙利 / BME / Alfréd Rényi 数学研究所推断）
* **检索来源**：arXiv:2607.08298 [math-ph]（2026-07-09 提交，交叉列入 math.OA, quant-ph）
* **核心突破 (What's New)**：证明了 d 维 Hilbert 空间中，由至多 d²−1 个可观测量生成的二次代价 Wasserstein 距离的等距半群恰好由 **Wigner 对称性**（酉/反酉共轭）构成，且仅当距离在纯态上酉共轭不变时成立。建立了代价算子 ⇔ Hilbert-Schmidt 框架型算子的显式互逆映射——代价的各向同性精确等价于关联 HS 算子的紧框架性质。
* **数学/物理模型 (Methodology)**：量子 Wasserstein 距离（De Palma-Trevisan 型）→ 纯态限制确定二次代价算子 → 等距半群 = Wigner 对称的充要条件 → 伴随表示的交织性 → HS 框架对应。几何、表示论、算子论、框架论四个不同视角全部收敛到同一单参数族量子 Wasserstein 距离。
* **与本方向关联度**：⭐⭐⭐ 相关。① 目标方向追踪的核心之一是信息几何在随机热力学中的应用——本文对 Wigner 对称性与 Wasserstein 距离的深刻刻画为信息几何的**对称性约束**提供了量子版精确判据；② 代价算子的框架-各向同性等价性揭示了非平衡输运度量中隐含的对称群结构，方法可迁移到经典 Fokker-Planck 方程的 Wasserstein 几何分析；③ 纯量子论文，但对称性→度量唯一性的推理链在经典随机热力学中高度并行。

---

### 💡 今日趋势洞察

1. **辛几何 × 熵的不确定性关系成为新的汇合点**：Dinov 的 kime 表示首次将 Liouville 辛测度与圆形随机变量的熵不确定性关系直接对接——这为在随机力学中讨论"辛对称性破缺的量度"提供了数学语言。过去一周（含 7/10 的微观熵力学双连作 Ding-Cates），随机热力学的几何化趋势持续加速。

2. **量子-经典随机控制的数学趋同**：Kolokoltsov 的量子滤波综述和 El-Hajj 的 HJ-RL 统一框架分属不同范式，但都在处理同一类核心问题：如何在不丢失物理语义的前提下为连续时间可控系统建立不动点/Bellman 刻画。这对随机几何控制的统一公理化有推动作用。

3. **周末缺口提醒**：今日无新增 arXiv 论文。7 月 10 日批次覆盖完毕，合计两日共推荐 **10 篇**（7/11 的 5 篇 + 本期补充 5 篇）。**持续缺口**：乘性噪声 + PCH/Dirac 结构、Itô 修正 + 辛几何、布朗回转器/几何棘轮的专门理论论文仍然缺失——虽然相关元素散见于近期各篇，但尚未出现将其统一为研究纲领的标志性工作。

---

*报告生成时间：2026-07-12 08:57 UTC+8 · 自动化任务 ID: energy · 下期预计：2026-07-13（周一，arXiv 新批次）*
