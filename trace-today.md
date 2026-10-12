## 📅 2026-10-13 CQT 研究前沿动态

> **抓取批次**：MONDAY, 12 OCTOBER 2026（arXiv 美东 10-12 20:00 公告 ≈ 北京 10-13 08:00 可见）。本报告抓取于**北京 2026-10-13（周二）**。上一成功捕获批为 FRIDAY 9 OCT（10-12 运行补抓），本批为全新批次。
> **积压缺口仍未补齐**：TUESDAY 6 OCT / WEDNESDAY 7 OCT 两批（历史从未入库，需 dated URL 补抓）。

### 一、arXiv 基础与物理哲学追踪

| 分类 | 新投稿 | 总条目 |
|---|---:|---:|
| quant-ph | **63** | 122 |
| hep-th | 31 | 79 |
| math.DG | 16 | 46 |
| math.OC | 27 | 73 |
| math-ph | 6 | 44 |
| gr-qc | 11 | 60 |
| eess.SY | 16 | 53 |
| cond-mat.stat-mech | 6 | 39 |
| math.OA | 4 | 9 |
| math.CT | **0** | 7 |
| cs.AI | **83** | 313 |
| cs.LG | **146** | 413 |

#### 量子基础与解释 子区块（quant-ph 63 篇扫描）
本批量子基础/解释方向**有硬货**，Born 规则/观测问题、过程张量因果、纠缠催化、双体可观测量分类均有：
1. **2610.13936** *A Warped Born Rule Turns an Observer into a Maxwell's Demon*（O. Ogunnaike）—— 扭曲的 Born 规则把"观测者"变成麦克斯韦妖，直击测量问题/ Born 规则起源与主观/客观观测边界。→ §002 强（解释学核心）。
2. **2610.13110** *Temporal-Access Resource Theory for Continuous Process Tensors*（H. Wang）—— 连续过程张量的"时间可达"资源理论，量子因果/时序相关性的资源刻画。→ §002 强（量子因果/过程张量）。
3. **2610.13602** *Entanglement Catalysis Beyond the Asymptotic Rate*（A. Streltsov）—— 纠缠催化突破渐近速率极限，纠缠资源理论的非渐近突破。→ §002 强。
4. **2610.12908** *Classification of bipartite observables II: NIP observables and the Todorcevic trichotomy*（E. Dueñez）—— 双体可观测量分类（NIP / Todorcevic 三歧性），量子逻辑/可观测量的模型论结构。→ §002 + §004 近邻。
5. **2610.13579** *Correlation-Based Measurement of Entanglement in Rank-2 Mixed States*（M. I. Samar）—— 秩-2 混态基于关联的纠缠度量，可操作纠缠判据。→ §002 中。
- 近邻：2610.12546（非马尔可夫耗散 Ising）、2610.12929（量子 Markov 长度不稳定性）、2610.13622（例外量子信道的可操作签名）、2610.13349/13512（等散射非等谱量子图）、2610.13135（纠缠破缺指标脉冲控制）。

#### §003 type-topos 映射（math.CT 0 新，全批静默）
本批 **math.CT 零新投稿**（仅 2 篇交叉 + 5 篇替换），§003 拓扑斯/层论方向**完全静默**。唯一弱近邻在 cs.LG：**2610.12728** *A Categorical Atlas of Parameter-Efficient Fine-Tuning: Cones, Orbits, and Gauges*（Xiaoyu Li）—— 用锥/轨道/规范（cones/orbits/gauges）的范畴视角组织 PEFT，属范畴论 × ML 的交叉弱信号，非真 topos。

#### §004 Gelfand 理论 / 算子代数 映射（math.OA 4 新，全强命中）
本批 math.OA **4 篇全部硬货**，覆盖 Wiener 引理/准晶、纯无限扩张、Fell 丛、生成元问题：
- **2610.12770** *Wiener's lemma for quasicrystals: hull-uniform decay of covariant kernels on Delone sets*（D. Jaure）—— 准晶/ Delone 集上协变核的 Wiener 引理与一致衰减，非交换几何/C*-代数。→ §004 强。
- **2610.12992** *A note on purely infinite extensions*（P. W. Ng）—— 纯无限 C*-代数扩张。→ §004 强。
- **2610.13646** *Actions of Fell bundles, II: tensor products and Fourier-Stieltjes algebras*（E. Bédos）—— Fell 丛作用、张量积与 Fourier-Stieltjes 代数。→ §004 强。
- **2610.13792** *The generator problem for C*-algebras with comparison*（B. Bouwen）—— 具比较性的 C*-代数的生成元问题。→ §004 强。

#### bookmark 入库
已向 `c:/Dev/CQT/bookmark.md` 新增 `## 2026-10-12` 节，收录上述强命中 **18 条**（量子基础 5 + §004 四 + 能源 六 + AI 四），按 ID 去重，并标注 §002/§003/§004/能源/AI 关联（math.CT 本批 0 新，未列 §003 条目）。

### 二、随机热力学与几何控制核心推荐

> 五关键词精确标题命中（Brownian Gyrator / Geometric Ratchet / Net Energy Exchange / Stochastic Thermodynamics+Information Geometry / HJB+Stochastic Optimal Control / Multiplicative Noise+PCH）本批**为零**；强命中落在「量子工程热力学 + 随机最小能量控制 + 半马尔可夫遍历性破缺 + 局域引力能 + 非马尔可夫耗散」。

1. **【高】2610.13511** *Finite Quantum Engineering Thermodynamics*（Borhan Ahmadi, quant-ph）
   - 中文：有限量子工程热力学。
   - 来源：quant-ph 新投稿。
   - 核心突破：把量子热力学当作**可工程化设计**的资源理论框架，聚焦有限尺度（非热力学极限）下的功/热/熵产生权衡与可达性。
   - 数学模型：有限维量子系统的热力学资源理论 + 量子通道/循环约束；与有限尺度涨落关系、量子热机对接。
   - 关联度：★ 高（量子热力学，本批最贴合能源/随机热力学主线的单篇）。
2. **【中高】2610.13424** *Minimum-Energy Control for Stochastic Linear Systems*（Vaishnavi Sharma, eess.SY）
   - 中文：随机线性系统的最小能量控制。
   - 来源：eess.SY 新投稿。
   - 核心突破：研究随机线性系统在能量约束下的控制律，给出最小能量控制的可解条件/下界——直接对接「随机控制 + 能量」主线。
   - 数学模型：随机线性系统 `dx = A x dt + B u dt + σ dW`；目标 `min ∫‖u‖²` 受稳态/瞬态约束；与 LQG/H∞ 近邻。
   - 关联度：★ 中高（stochastic + minimum-energy；五关键词中"随机控制/能量"近邻，HJB 精确命中缺席但属同族）。
3. **【中高】2610.13505** *Graph-theoretic framework for semi-Markov networks: transient and stationary occupation probabilities, hitting times and weak ergodicity breaking*（Julian Voits, cond-mat.stat-mech）
   - 中文：半马尔可夫网络的图论框架：暂/稳态占位概率、击中时与弱遍历性破缺。
   - 来源：cond-mat.stat-mech 新投稿。
   - 核心突破：用图论统一刻画半马尔可夫网络的占位概率、击中时，并给出**弱遍历性破缺**判据——非平衡随机过程/遍历性破缺的理论工具。
   - 数学模型：半马尔可夫过程（嵌入式链 + 逗留时间分布）；Markov 链遍历性 `lim Pⁿ = Π` 的弱破缺条件；与熵产生/非平衡稳态相关。
   - 关联度：★ 中高（非平衡/遍历性破缺/随机过程，贴近"非平衡态耗散"高优先级）。
4. **【中】2610.13700 / 2610.13777** *Bessel-Hagen currents, reducibility charges, and local gravitational energy* & *Internal translation gauging and local gravitational energy in Weyl gauge theory*（Michael Hobson, gr-qc）
   - 中文：Bessel-Hagen 流、可约化荷与局域引力能 / Weyl 规范理论中的内禀平移规范与局域引力能。
   - 来源：gr-qc 新投稿。
   - 核心突破：用 Noether/Bessel-Hagen 守恒流框架讨论局域引力能的定义与可约化荷，深化"引力能"这一经典难题的几何表述。
   - 数学模型：Bessel-Hagen 守恒流（含标度/规范对称）、Weyl 规范理论的平移规范；能量-动量（拟）张量的局域化。
   - 关联度：★ 中（"能量"主题近邻；偏几何/GR，与随机热力学远，但贴合"局域能量"语义）。
5. **【中】2610.12546** *Exact solutions of non-Markovian dissipative Ising models*（Mohammad Maghrebi, quant-ph）
   - 中文：非马尔可夫耗散 Ising 模型的精确解。
   - 来源：quant-ph 新投稿。
   - 核心突破：给出非马尔可夫耗散（记忆核）Ising 模型的精确可解结果，推进开放量子系统的非马尔可夫动力学严格解。
   - 数学模型：耗散 Ising（自旋-玻色耦合 / 非马尔可夫 Lindblad 推广），记忆核 `K(t−t')` 的精确处理；关联/退相干动力学。
   - 关联度：★ 中（开放量子系统/非马尔可夫耗散，与"随机耗散"中优先级近邻）。
- **近邻**：2610.13033（开量子临界性 dissipation-regression）、2610.12774（分布鲁棒协方差转向 stochastic）、2610.13544（约束奇异控制平稳遍历平均场博弈）、2610.13787（非光滑非凸随机优化）、2610.13448（线性二次动态博弈激励设计）。

### 三、每日研究前沿四方向

**量子（quant-ph 63 新）亮点**：
- **QEC/LDPC 成簇**：2610.12782 *Coset Lifted Product Codes*（由非正规子群作用构造 qLDPC）、2610.12685 *La-cross qLDPC 快速计算基元*、2610.13589 *Clifford-Deformed QEC 的解码器/噪声感知优化*、2610.13879 *QLDPC 存储的 GPU 并行 BP 解码*、2610.13880 *Bicycle Race: Pareto 前沿上的小型双块码*——码构造与解码齐发。
- **量子算法/计算**：2610.12664 *Catalytic Algorithm for Transposing Unknown Qutrit Unitaries*（陈宇翱，紧查询界）、2610.13907 *可扩展样本量子对角化求解器*（一般 Pauli 和哈密顿量）、2610.12806 *Trainable Quantum-Native Language Models*（耗散记忆量子 NLP）。
- **量子模拟/多体**：2610.12579（囚禁离子关联对产生）、2610.12800（Shastry-Sutherland Ising 模拟）、2610.12551（强周期驱动遍历性破缺）。

**Topos / 范畴论（math.CT 0 新）亮点**：全批静默（无新投稿）。弱近邻：2610.12728（PEFT 的范畴图谱：锥/轨道/规范，cs.LG）——范畴论 × ML 交叉信号。

**Gelfand / 算子代数（math.OA 4 新）亮点**：**全强**——2610.12770（准晶 Wiener 引理/Delone 集）、2610.12992（纯无限扩张）、2610.13646（Fell 丛 II/张量积/Fourier-Stieltjes）、2610.13792（具比较性的 C*-代数生成元问题）。§004 持续稳定供能。

**AI（cs.AI 83 / cs.LG 146 新）亮点**：本批 AI 以 **agentic / 自主研究 / 形式化**为主轴，与 CQT 高度契合：
- 2610.13194 *JANUS: Enhancing Long-Horizon Autonomous Research with Co-Evolving World Models*（Mengdi Liu）—— 长程自主研究 + 协同演化世界模型，直接对应 CQT 自主科学范式。
- 2610.12813 *VEPA: Verified Evolving Formal Policy for Lifelong LLM Agent Guardrails*—— 可验证演化的形式化策略（形式化 + agent），§形式化强信号。
- 2610.13811 *QTestBench: A Test Framework for Evaluating LLM-Generated Quantum Code*（cs.LG）—— **量子+AI 交叉**（评测 LLM 生成的量子代码），CQT 关注。
- 2610.12847 *When Generative Models Act as Simulators*（cs.LG）—— 生成模型作物理模拟器，几何/物理 + ML 交叉。
- 几何力学 × ML：2610.13234/13292（Lagrangian 神经网络学 Schwarzschild 测地线 / 三体相互作用）。
- 量子+AI 交叉本批**有实质一篇**（2610.13811），较上周增强。

### 💡 今日趋势洞察
- **量子热力学回归"工程化"叙事**：2610.13511 把有限尺度量子热力学当作资源理论来"设计"，与 09-30/10-02 批次的量子热机/量子电池一脉相承——CQT §005 可沿"有限尺度热力学资源理论"主线归并近期成果。
- **随机控制走低关键词、高邻近路线**：本批 HJB/PCH/乘性噪声精确标题命中继续归零，但"随机最小能量控制"（2610.13424）、"半马尔可夫弱遍历性破缺"（2610.13505）填补了"随机控制 + 能量""非平衡 + 遍历性破缺"两处；说明该主线更多以控制论/随机过程语言而非 QFT-噪声语言表达。
- **算子代数与 agentic AI 双稳态**：math.OA 虽仅 4 篇但全强（Wiener 引理/纯无限/Fell 丛/生成元），AI 侧 JANUS/VEPA/QTestBench 把"自主研究 + 形式化 + 量子"三件套坐实——两翼同时给 CQT 供弹药。

### 🔄 下次检索建议
- 本批（MON 12 OCT）已入库；历史积压 **TUE 6 OCT / WED 7 OCT** 仍待 dated URL 补抓（quant-ph 用 `?skip=60`）。
- 下个全新批 = **TUESDAY, 13 OCTOBER 2026**（美东 10-13 20:00 ≈ 北京 10-14 周三 08:00 可见）；建议北京 **2026-10-14 08:00 后**查 TUE 13 OCT 新批。若届时 `/new` 仍显 MON 12 OCT 则 10-15 04:30 复查。
