---
## 📅 2026-07-30 随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. Fluctuation-dissipation violations in mean-field non-reciprocal spin glasses
* **中文翻译**：平均场非互易自旋玻璃中的涨落-耗散违反
* **作者 & 机构**：Ot Garcés, Demian Levis（Universitat de Barcelona / 巴塞罗那大学）
* **检索来源**：arXiv:2607.25782 [cond-mat.stat-mech]
* **核心突破 (What's New)**：在非互易非对称耦合的球形 Sherrington-Kirkpatrick 模型中，作者**不从平稳性假设出发**，而是严格推导了动力学平均场方程允许稳态平移不变解的条件。核心发现：**非互易条件下 FDT 是普适违反的，即使在指数弛豫（无老化）的情况下**——违反来自细致平衡破缺而非老化。此外，随着非对称性增强，出现更快动力学和反称耦合驱动的振荡行为。
* **数学/物理模型 (Methodology)**：球形 SK 模型 + 非互易非对称耦合 → 动力学平均场理论；在对称/非耦合/反对称三个极限下解析求解关联与响应函数的渐近行为；数值插值覆盖一般非对称性。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 昨日 Sezik (2607.24252) 证明非互易耦合在临界区是 RG 无关的（不产生新普适类），今日 Garcés-Levis 显示在玻璃态区非互易耦合**普适违反 FDT**——两篇论文形成关键辩证：非互易性的统计后果取决于相空间区域和相互作用类型。本文明确区分 FDT 违反的两个独立源头（细致平衡破缺 vs 老化），对随机对称性破缺的判据体系有基础性补充。

#### 2. Logarithmic Aging Diffusion from a Multiplicative Event Clock: Rare Event Statistics, Ultraslow Transport, and Ensemble-Time Inequivalence
* **中文翻译**：乘性事件时钟驱动的对数老化扩散：稀有事件统计、超慢输运与系综-时间不等价性
* **作者 & 机构**：Chunyan Li, Zheng Li, Yueyan Li, Haiwen Liu, X. C. Xie
* **检索来源**：arXiv:2607.25374 [cond-mat.stat-mech]
* **核心突破 (What's New)**：提出了一个由「乘性事件时钟」驱动的对数老化扩散精确微观模型——每次事件后按前向递归律迭代更新年龄条件时钟，使事件时间的对数比 U_n = ln(T_{n+1}/T_n) 成为独立同分布变量。这一机制产生对数漂移和展宽、局域细致平衡下的 Einstein 关系、超慢输运，以及**系综-时间不等价性**：时间平均 MSD 的相对涨落以 1/ln(T) 衰减，但其均值永不收敛到系综 MSD。
* **数学/物理模型 (Methodology)**：更新理论（renewal theory）+ 前向递归时间（forward recurrence time）→ 乘性事件时钟；对数正态中心区域 + 固定 n 的代数远尾双重标度；精确区分事件层面构造、扩散极限广义 Fokker-Planck 表示、随机时钟从属化（subordination）表示、与广义 Langevin 闭合四种描述层次。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 「乘性事件时钟」是乘性噪声在时间域而非振幅域的出现——这扩展了「乘性噪声 + Dirac 结构」关键词的语义范围。对数正态统计 + 系综-时间不等价性的精确刻画对非平衡能量交换中稀有事件的统计力学基础有直接启发：能量交换脉冲的到达时间若服从类似的乘性时钟，则其长时间输运行为将与标准 Fokker-Planck 框架产生系统性偏差。

#### 3. Non-monotonic diffusion from nonequilibrium driving
* **中文翻译**：非平衡驱动导致的非单调扩散
* **作者 & 机构**：Manish Patel, Ritwick Sarkar, Urna Basu, Debasish Chaudhuri（S. N. Bose National Centre for Basic Sciences, Kolkata 等）
* **检索来源**：arXiv:2607.25902 [cond-mat.stat-mech]
* **核心突破 (What's New)**：建立了含互易和非互易耦合的相互作用粒子统一理论框架，覆盖活性物质三大主要类型（run-and-tumble、ABP、AOUP）。核心发现：被驱动粒子的有效扩散系数**非单调依赖于驱动活性**——同一驱动强度下可出现输运增强和抑制。关键洞察：相同行为在「平衡系统 + 局域高温驱动」中同样出现，揭示背后的普适机制。
* **数学/物理模型 (Methodology)**：环上一维被动粒子 + 活性驱动粒子的解析求解 → 长时扩散性证明（与微观驱动机制无关）；三种活性模型 + 等效平衡高温驱动的数值模拟；统一有效扩散系数的标度分析。
* **与本方向关联度**：⭐⭐⭐⭐ 「非单调输运」是非平衡驱动的通用签名——驱动增强可能反而抑制能量输运（反之亦然）。这对能量收集工程有直接意义：最优能量提取强度可能存在**内在上限**，超过后反被非平衡涨落抑制。与昨日 Ryazanov 首通时间热力学（非线性输运方程）形成互补——Patel et al. 从微观模型出发，Ryazanov 从宏观热力学出发，共同刻画非平衡输运的非线性特征。

#### 4. Effective Field Theory of Operator Scrambling from Strong-to-Weak Symmetry Breaking
* **中文翻译**：从强-弱对称性破缺构建算子扰码的有效场论
* **作者 & 机构**：Bai-Lin Cheng, Shao-Kai Jian, Zhi-Cheng Yang
* **检索来源**：arXiv:2607.24925 [cond-mat.stat-mech, hep-th, quant-ph]
* **核心突破 (What's New)**：为算子扰码（operator scrambling）建立了基于对称性原理的有效场论。核心洞察：非相互作用费米子极限下，OTOC 的四重 Keldysh 围道在加倍 Hilbert 空间中涌现强 U(1) 对称性，其慢模相位共轭密度 = 局域算子大小。相互作用显式破缺强对称性 → 产生 Goldstone 模的质量项 → 混沌增长替代扩散传播。关键桥梁：**乘性噪声强度与 Lyapunov 指数的直接关系**，且 Lyapunov 正性是实时路径积分收敛性的推论。
* **数学/物理模型 (Methodology)**：四重 Keldysh 围道 → 加倍 Hilbert 空间涌现 U(1) 对称性 → 强-弱对称性破缺 EFT；时间反演 + 围道置换的对偶性约束有效作用量至响应场二次阶；噪声 FKPP 方程统一描述早期指数增长、弹道传播、非线性饱和和随机前沿展宽。
* **与本方向关联度**：⭐⭐⭐⭐ 乘性噪声在此作为**理论的导出量而非假定输入**出现——其强度由 Lyapunov 指数决定，且由路径积分收敛性强制为正——这是乘性噪声从「动力学假设」升格为「对称性推论」的结构性进展。噪声 FKPP 方程中乘法噪声 + 混沌增长的关系对非平衡系统中信息/能量传播的随机描述有原则性意义。

#### 5. Mori-Zwanzig formalism: An existence proof for weak solutions of the orthogonal dynamics equation
* **中文翻译**：Mori-Zwanzig 形式体系：正交动力学方程弱解的存在性证明
* **作者 & 机构**：Christoph Widder
* **检索来源**：arXiv:2607.25855 [math-ph]
* **核心突破 (What's New)**：将 Givon-Hald-Kupferman (2005) 的唯一存在性证明从稳态哈密顿系统推广至**非稳态非哈密顿系统**，其时域演化由拟收缩半群（quasicontraction semigroup）生成。建立了增长界和足够正则解的唯一定理，并用阻尼谐振子的 Zwanzig 投影作为应用示例。
* **数学/物理模型 (Methodology)**：投影算子形式体系（Mori-Zwanzig）→ 正交动力学方程；拟收缩半群 → 弱解存在性（推广半群方法的适用范围至非自动力系统）；阻尼谐振子的显式验证。
* **与本方向关联度**：⭐⭐⭐ MZ 形式体系是从微观运动方程推导广义 Langevin 方程（含记忆核 + 噪声）的标准数学框架——它是随机热力学中「记忆核」的微观合法性基础。Widder 的推广将这一基础扩展至非保守力/非自伴系统，对以 PCH/Dirac 结构建模的含耗散随机系统的微观推导有方法论价值。

---

### 🔬 备选关注

| arXiv ID | 标题（简） | 关注理由 |
|----------|-----------|---------|
| 2607.25414 | Pasquero: Painlevé 悖论再分析（Génot-Brogliato 1999） | 刚体摩擦的 Galilei 不变性问题——非光滑力学中速度依赖摩擦约束的观测者依赖性。与 Painlevé 悖论中的冲击/切向动力学相关，间接触及非光滑接触力学的几何表述。 |
| 2607.25163 | Grey: **A Riemannian View on Active Subspaces**（交叉提交, math.DG） | 参数化 PDE 中活动子空间的黎曼几何视角——将降维问题嵌入流形框架。对「信息几何 + 随机控制」方向的接触点：PDE 参数流形上的活动子空间可能与控制代价景观的 Riemann 结构有关联。 |
| 2607.25697 | Pruszczyk et al.: Gravity-controlled **non-equilibrium Casimir pressure** | 重力调控的非平衡 Casimir 压强——二元混合液中的临界 Casimir 效应 + 重力耦合。非平衡涨落力（Casimir 压强）与外场（重力）的耦合，涨落诱导力的非平衡推广。 |

---

### 💡 今日趋势洞察

1. **非互易三连击形成完整辩证**——本周是「非互易动力学」的密集爆发期：周一 Sezik (24252) 证明非互易耦合在临界点可被 RG 湮没（不产生新普适类）；今日 Garcés-Levis (25782) 证明同一非互易性在玻璃态区**普适**违反 FDT；Patel et al. (25902) 显示非互易驱动产生非单调输运——三篇论文从 RG、动力学平均场、和输运三个层次描绘了非互易性在非平衡统计物理中的完整效应谱：「普适类不变」≠「涨落响应不变」≠「输运单调」。

2. **乘性噪声的概念正在从振幅域扩展到时间域**——Li et al. (25374) 的「乘性事件时钟」使噪声乘法化发生在时间间隔而非振幅上，产生对数正态统计和系综-时间不等价性。这与 Cheng et al. (24925) 中乘性噪声 = Lyapunov 指数的对称性框架形成不同维度的呼应。关键词「乘性噪声」的内涵在迅速丰富。

3. **MZ 形式体系的非哈密顿推广**虽属纯数学结果，但对随机热力学的基础稳固性有不可忽视的价值——广义 Langevin 方程从微观推导时的存在性和唯一性条件，直接影响记忆核的物理合法性。这一缺口正在被逐步填补。

4. **本日五个核心推荐中，前三个全部直接命中高优先级关键词**（非互易 FDT 破坏 / 乘性事件时钟 / 非平衡非单调输运），延续了本周的高密度命中节奏。周三批次（约 100 篇总新稿）的质量密度非常可观。

---

*下一批次预计 2026-07-31（周五）自动覆盖。*
