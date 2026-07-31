---
## 📅 2026-07-31 随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. Non-Hermitian Random Matrix Theory of Jamming in Active Disordered Media
* **中文翻译**：活性无序介质中堵塞的非厄米随机矩阵理论
* **作者 & 机构**：Hisao Hayakawa（京都大学基础物理学研究所，YITP）
* **检索来源**：arXiv:2607.26406 [cond-mat.stat-mech]
* **核心突破 (What's New)**：🎉 **非互易动力学本周第四弹！** 将活性堵塞系统的力学问题形式化为非厄米随机矩阵理论——非互易相互作用对应的非厄米微扰项叠加在被动接触网络的 Wishart 系综上。关键发现：**活性非互易性正则化了堵塞转变处的软模发散**，产生力学柔度的新标度律，并在微扰区与活性主导区之间建立了交叉标度形式。
* **数学/物理模型 (Methodology)**：Girko 厄米化（Hermitization）+ 自洽 Born 近似 → 基于完整 Marchenko-Pastur 分布的低频预解式自洽方程。线性化动力学矩阵 = Wishart 系综（被动接触网络）的非厄米微扰。
* **与本方向关联度**：非互易动力学本周完成四联击——Sezik(RG 临界)→ Garcés-Levis(FDT)→ Patel(非单调输运)→ Hayakawa(力学柔度/堵塞)。Hayakawa 填补了最后一块拼图：非互易性在**力学响应**层面的标度效应。对「非平衡驱动如何改变材料力学可提取功」有直接意义——软模正则化意味着活性系统在堵塞点附近的行为从发散变为有限柔度，这是能量收集的力学基础。

#### 2. The Role of Odd Diffusivity in Multipoint Statistics of State-Dependent Observables
* **中文翻译**：奇数扩散系数在状态依赖观测量多点统计中的作用
* **作者 & 机构**：Jong-Min Park
* **检索来源**：arXiv:2607.26824 [cond-mat.stat-mech]
* **核心突破 (What's New)**：从涨落-耗散定理的视角出发，证明了**奇数扩散系数的反对称部分对任意多个状态依赖观测量在任意时刻的联合统计无任何贡献**——洛伦兹概率流不参与任何多点测量。这意味着奇数扩散系统中的异常关联**完全源自奇数迁移率（odd mobility）**，而非奇扩散本身。非线性涨落-耗散关系与广义 Green-Kubo 关系在奇扩散系统中无需任何修正即成立。
* **数学/物理模型 (Methodology)**：Fokker-Planck 方程中扩散张量反对称部分的因子化分析。通过平均回弛豫、扩散系数、非线性 FDR、广义 Green-Kubo 关系四种独立验证确认结论。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 直接触及「非平衡涨落-耗散」的核心。Park 的结论具有原则性意义：奇扩散（时间反演+宇称对称破缺的标志）的**统计可观测效应**仅通过奇迁移率通道传递——这对设计「通过测量提取非平衡特征」的实验方案有直接指导意义。与上周 Garcés-Levis(FDT 违反) 互补：前者在自旋玻璃中展示 FDT 违反，Park 则证明奇扩散系统中 FDR 反而无修正地保持。

#### 3. A 'global' Perspective on the Differential Geometry of Wasserstein Spaces
* **中文翻译**：Wasserstein 空间微分几何的「全局」视角
* **作者 & 机构**：Lorenzo Dello Schiavo, Andrea Pinamonti（特伦托大学数学系）
* **检索来源**：arXiv:2607.27121 [math.DG]
* **核心突破 (What's New)**：🎯 **信息几何/最优传输跟踪方向的精准命中！** 基于柱函数导数（而非标准逐点方法）在闭黎曼流形上的 L²-Wasserstein 空间中建立了**全局微分演算**。核心结论：底流形的 Levi-Civita 联络提升为与「扩展 Otto 度量」兼容的**唯一无挠联络**；对应的黎曼曲率张量恰好是底流形曲率张量的提升——经典梯度形式中的「修正项」并非内禀曲率，而是投影到测度依赖梯度分布的结果。该结论与 Lott (2007, CMP) 的经典计算**部分不同**。
* **数学/物理模型 (Methodology)**：柱函数导数（cylinder function derivations）替代逐点方法 → 全局几何工具（联络、曲率张量、无挠性）→ 重新审视 Otto 度量几何。与 Lott 的分歧点在于内禀曲率 vs. 投影效应。
* **与本方向关联度**：⭐⭐⭐⭐⭐ Wasserstein 几何是信息几何与最优传输的统一框架。Dello Schiavo-Pinamonti 修正了 Otto 度量几何中曲率贡献的归属——这对基于 Wasserstein 梯度的随机控制（如 Otto 梯度流的 Fokker-Planck 方程优化、Wasserstein 自然梯度）有直接几何约束。若「修正项=投影效应」而非内禀曲率，则流形上的随机最优控制可避免曲率诱导的额外漂移。与跟踪方向中「几何流形上的随机控制」高度一致。

#### 4. Forcing and Duality-Corrected Contracts for Volatility Control
* **中文翻译**：波动率控制的强制与对偶修正合约
* **作者 & 机构**：Alessandro Chiusolo, Emma Hubert, Dylan Possamaï (ETH Zurich), Nizar Touzi (ETH Zurich / NYU)
* **检索来源**：arXiv:2607.27039 [math.OC]
* **核心突破 (What's New)**：揭示了连续时间委托-代理模型中漂移+波动率双重控制的最优合约构造存在一个**隐藏假设**（Cvitanić-Possamaï-Touzi 2018 的 Assumption 2.3 不可一般满足）。提出一种新的 ψ-参数化合约族：一种受 BSDE 启发给出强制型合约，另一种受 2BSDE 启发在对偶间隙不满足时修正。首次实现波动率可控情形下最优化合约的无假设限制构造。
* **数学/物理模型 (Methodology)**：动态规划 + 二阶倒向随机微分方程（2BSDE）+ BSDE 方法。ψ-参数化合约族的 revealing 条件确保代理信息的可提取性。
* **与本方向关联度**：⭐⭐⭐⭐ 波动率控制是随机最优控制中最困难的情形之一（HJB 方程变为完全非线性二阶 PDE）。Possamaï-Touzi 团队是 2BSDE 方法论的奠基者——本文的方法论进展对「受控扩散过程中的几何约束」和「信息不对称下的随机最优控制」有直接贡献。强制型合约的构造思路（通过 ψ 函数 shape 控制轨迹的几何）与几何控制有深层对应。

#### 5. On Mean-field Singular Stochastic Control Problems
* **中文翻译**：平均场奇异随机控制问题
* **作者 & 机构**：Andrea Amato, Federico Cannerozzi, Giorgio Ferrari（比勒费尔德大学数学系）
* **检索来源**：arXiv:2607.26808 [math.OC]
* **核心突破 (What's New)**：**首次在有限时域平均场奇异随机控制问题中给出最优策略的完整刻画。** 通过构造一个「势平均场博弈」（potential MFG），证明在适当凸性假设下 MFG 的解即为原始平均场控制问题的解。在策略互补情形下，最优自由边界由非线性积分方程唯一确定的连续非增函数给出。
* **数学/物理模型 (Methodology)**：奇异控制（Monotone Follower Problem）+ 平均场相互作用 + 最优停止与 Kakutani-Fan-Glicksberg 不动点定理的耦合。
* **与本方向关联度**：⭐⭐⭐ 平均场奇异控制将「脉冲/奇异控制」与「无穷粒子极限」结合，对大规模非平衡系统（如活性物质集群、随机热力学中的耦合热机阵列）的最优干预有方法论意义。奇异控制框架与热力学中「有限时间过程中的最优协议」存在结构对应。

---
### 💡 今日趋势洞察

1. **非互易动力学本周完成四联击**：Sezik(RG)→Garcés-Levis(FDT)→Patel(非单调输运)→**Hayakawa(力学柔度/堵塞)**——四个层次（临界普适类、涨落响应、输运行为、力学响应）分别独立确认非互易性的可观测效应，合在一起构成一个完整的「非互易多层级效应图景」。本周是非互易性自追踪启动以来最高产的一周。

2. **Wasserstein 几何的「全局微分演算」突破是几何控制的里程碑**：Dello Schiavo-Pinamonti 修正了 Otto 度量几何的曲率归属——「修正项=投影效应而非内禀曲率」的结论若成立，意味着 Wasserstein 梯度流上的 HJB 方程可避免曲率诱导额外漂移，简化最优控制律的几何形式。这直接连接信息几何（Wasserstein）与随机最优控制（HJB）两个跟踪主线。

3. **Park 的奇数扩散系数「观测分离定理」具有实验设计意义**：奇扩散不参与多点统计→只需奇迁移率即可捕获全部非平衡特征→简化了通过涨落观测量推断非平衡驱动强度的方案。这与 FDR 违反（Garcés-Levis）和 FDR 保持（Park）之间的张力，暗示「统计可观测性」是一条被低估的独立维度。

4. **批次密度骤降（~63 篇，仅为周二的 47%）是典型的周四效应**，但命中率反而最高——数学上更精深的稿件往往集中在周四-周五批次，这与 Wasserstein 全局微分几何 + 2BSDE 合约 + 平均场奇异控制的出现模式一致。
---
