---
## 📅 2026-08-08 随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. A Universal Control Budget for First-Passage Kinetics
* **中文翻译**：首次通过动力学的普适控制预算
* **作者 & 机构**：Shiling Liang, Ruicheng Bao（机构待查全文）
* **检索来源**：arXiv:2608.06368 [cond-mat.stat-mech]
* **核心突破 (What's New)**：发现有限 Markov 链平均首次通过时间（MFPT）的两条**普适守恒定律**：① 任一速率 kᵢ 的对数灵敏度绝对值 ≤ 1；② 所有速率对数灵敏度之和恒等于 −1。两条定律构成"控制预算"——加速某跃迁必须由其他跃迁买单。即使协同改变激活势垒或势阱深度，也无法超越单速率调制的极限。将动力学校对的判别力上限由检查点数量严格界定。
* **数学/物理模型 (Methodology)**：有限 Markov 链吸收态 → 基本矩阵 + 矩阵恒等式 → 无量纲对数灵敏度 ∂ln⟨T⟩/∂ln kᵢ → 全局求和规则与个体界。灵敏度有界+总和守恒 = 精确的 trade-off，无自由参数。
* **与本方向关联度**：⭐⭐⭐⭐⭐⭐ 这是随机热力学"不确定性关系"（TUR）谱系的**新分支**——不以熵产生为参数，而以**对数灵敏度**为对易量，给出首次通过时间的全局约束。∑ = −1 是一个与 TUR ∑ ≥ 2/⟨n⟩ 平行但独立的基本不等式。对非平衡能量收集装置的性能限界、布朗回转器首次旋转时间的可控性分析有直接的数学工具价值。

#### 2. Quantum fluctuation relations in first-detection processes
* **中文翻译**：首次探测过程中的量子涨落关系
* **作者 & 机构**：Alberto Imparato（Aarhus University, Denmark — 量子随机热力学领域活跃研究者）
* **检索来源**：arXiv:2608.06194 [cond-mat.stat-mech, quant-ph]
* **核心突破 (What's New)**：将**量子 Jarzynski 等式**推广至"首次探测"情境——当系统经历重复投影测量，首次探测事件触发正功提取机械操作时，对标准 Jarzynski 等式的修正项**对数依赖于时间反演动力学的平均首次探测时间**。通过 Jensen 不等式给出总功与提取功的基本限界，并将结果推广至开放量子系统。
* **数学/物理模型 (Methodology)**：重复投影测量下量子设备的功提取 → 首次探测时间（first-detection time）作为随机变量 → 量子涨落关系（修正 Jarzynski 等式）→ Jensen 不等式 → 功的普适上下界。开放系统推广涵盖环境耦合。
* **与本方向关联度**：⭐⭐⭐⭐⭐⭐ 与今日 Liang-Bao 论文形成**经典-量子对称**：同一天，经典 Markov 链（Liang-Bao）和量子投影测量（Imparato）的首次通过/探测时间分别被赋予精确的约束定律。Imparato 的量子 Jarzynski×首次探测公式将"时间"与"功涨落"直接耦合——修正项 = ln⟨T_first⟩，这在经典随机热力学中也无对应。对本方向"非平衡能量收集"的量子扩展有第一性原理级别的启发。

#### 3. Integrable curl-force Hamiltonians: bi-Hamiltonian structure, separability, and periodic orbits
* **中文翻译**：可积旋度力 Hamilton 系统：双 Hamilton 结构、可分离性与周期轨道
* **作者 & 机构**：Alexander Felski, **Andreas Fring**（City, University of London）
* **检索来源**：arXiv:2608.05952 [nlin.SI, math-ph]
* **核心突破 (What's New)**：对 Berry 的旋度力 (curl-force) 多项式 Hamilton 模型——此前因数值闭合轨道被猜测可积——进行了 Painlevé 检验，**证明标准 Painlevé 判据失败**（非主共振、Laurent 级数缺乏足够的任意常数）。进而构造四参数旋度力族，识别可积参数轨迹，在此轨迹上显式构造**第二 Hamilton 量 + 相容 Poisson 张量（双 Hamilton 结构）+ 分离复特征变量 + Lax 表示**。封闭轨道不代表 Liouville 可积——引入了一个严格的判例。
* **数学/物理模型 (Methodology)**：Berry 旋度力 Hamilton 量（不定度规动能）→ Painlevé 可积性分析（奇性分析/共振谱）→ 四参数族可积参数轨迹识别 → 双 Hamilton 结构（两个相容 Poisson 括号）→ 分离变量 + Lax 对 → 任意次多项式可积旋度力 Hamilton 量生成公式。不定度规来自 Fring 组长期研究的 PT 对称 Hamilton 量背景。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 旋度力是非保守力（F = ∇×A，非梯度势），而双 Hamilton 结构是其可积性的几何语言。此文的实质性进展在于：① 严格证伪了 Berry 模型的可积猜测；② 给出了旋度力系统中双 Hamilton 结构的构造性方法。这两个成果对本方向"非保守力的几何力学"有直接的工具意义——如果能在旋度力双 Hamilton 框架中引入白噪声/乘性噪声，可能获得随机非保守系统的精确可积结果。与上周 Acharya 组卷曲力变分原理（8/5）形成互补。

#### 4. A geometric approach to the (generalized) Noether theorem for Hamiltonian systems on (non)-uniform q-contact manifolds
* **中文翻译**：非均匀 q-接触流形上 Hamilton 系统（广义）Noether 定理的几何方法
* **作者 & 机构**：**Manuel de León**, Cristina Sardón, Xuefeng Zhao（ICMAT/CSIC, Spain — de León 是几何力学领域世界领军学者）
* **检索来源**：arXiv:2608.05681 [math.SG, math-ph]
* **核心突破 (What's New)**：在 **q-接触几何**（带 q 个独立接触形式的多耗散通道推广）框架下建立统一 Hamilton 理论，将广义 Noether 定理推广到多耗散系统——每个连续对称性不再对应守恒量，而是对应**指数衰减的"重标度守恒量"**。以双内部变量弹塑性损伤模型为实例，数值验证指数耗散律及重标度守恒量。
* **数学/物理模型 (Methodology)**：q-接触流形（q 个独立的 1-形式 + Reeb 向量场编码多个独立耗散机制）→ 广义 Poisson 括号 → 广义 Noether 定理（守恒量 ∝ e^(−γt)）→ 弹塑性双内部变量模型（2-接触流形）。接触几何是辛几何的自然耗散推广。
* **与本方向关联度**：⭐⭐⭐⭐ de León 是接触 Hamilton 力学的奠基性人物。此文将接触几何从"单耗散通道"推广到"多耗散通道"（q-接触），是本方向"几何力学×非平衡耗散"的**基础设施级进展**。如果进一步将 q-接触结构与随机微分方程耦合（接触流形 + 乘性噪声 = 可能的新几何结构），将直接命中本方向核心缺口。注意此为纯确定性框架，尚未含随机项。

#### 5. Large Spin-Wave Fluctuations Suppress Activity in Malthusian Flocks
* **中文翻译**：大自旋波涨落抑制 Malthusian 集群中的活性
* **作者 & 机构**：**Emir Sezik**, Gunnar Pruessner（Imperial College London）
* **检索来源**：arXiv:2608.05805 [cond-mat.soft, cond-mat.stat-mech]
* **核心突破 (What's New)**：在二维 Malthusian 集群中发现此前未知的**"平衡 XY 模型"相**——当噪声足够强时，活性项在重整化群流下变为 irrelevant，系统渡越到平衡态 Berezinskii-Kosterlitz-Thouless (BKT) 普适类。发现由**活性与自旋波相互作用**驱动的新临界点，RG 流类似于 BKT 但机制完全不同（非涡旋驱动）。
* **数学/物理模型 (Methodology)**：Malthusian 集群模型对称性分析 → Goldstone 模式有效运动方程 → 自旋波涨落分析 → 微扰 RG → 临界普适标度+对数修正。关键发现：活性项在 RG 流下的 irrelevant 性 = "涨落洗掉活性"。
* **与本方向关联度**：⭐⭐⭐⭐ Sezik 归来。7/29 给出非互易耦合的即时修正最小模型（追踪第七弹），今日用 RG 展示活性在强涨落下如何被"洗掉"成平衡态 XY 模型。此文解决了一个深层概念问题：**活性/非互易性何时被涨落消灭？** 答案：噪声够强 → 活性 irrelevant → BKT。这对"非平衡→平衡渡越"提供了精确的 RG 判据。

---
### 💡 今日趋势洞察

1. **"首次通过时间"成为经典-量子统一的约束枢纽**：Liang-Bao（经典 Markov 链）和 Imparato（量子 Jarzynski）在同一天分别从控制和涨落两个角度锁定首次通过/探测时间的普适约束。∑ ∂ln⟨T⟩/∂ln k_i = −1 与 Jarzynski 修正 ln⟨T_first⟩ 形成一对**时间-功对偶**。这是随机热力学从"稳态"向"首次通过动力学"深化的明确信号。

2. **非保守力的几何力学基础设施正在成形**：Felski-Fring（旋度力双 Hamilton 可积性）+ de León（q-接触多耗散 Noether）+ 上周 Acharya（卷曲力变分原理）——三周内出现了从变分→可积性→对称性的完整几何力学工具链，覆盖非保守力的基本理论结构。如果再引入 Itô 修正/乘性噪声，这个链条将直接打通本方向最核心缺口。

3. **Sezik 两周内完成从"非互易耦合"到"活性洗掉"的连贯推进**：7/29 的非互易论文和 8/7 的 Malthusian 集群论文看似不相关，但底层都在探索同一个问题——非平衡/非互易/活性在参数空间中的**存在条件与渡越边界**。Sezik 正在成为一个值得长期追踪的非平衡统计力学新锐。

4. **今日是"经典-量子对称日"**：两篇最高优先级论文（Liang-Bao + Imparato）分别以经典 Markov 和量子投影测量的框架给出首次通过时间的普适关系——这是罕见的同日同主题双线突破。持续缺口：Itô+辛几何第二十三期空白，乘性噪声+PCH/Dirac 仍无命中。
---
