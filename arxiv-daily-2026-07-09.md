---
## 📅 2026年7月9日（基于 arXiv 7月8日发布）随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. Hidden Entropy Production at Mechanical Stall: Exact Reconstruction in a Reciprocal Brownian Motor
* **中文翻译**：机械失速下隐藏的熵产生——互易布朗马达中的精确重构
* **作者 & 机构**：Mesfin Mesfin Taye
* **检索来源**：arXiv:2607.06131 [cond-mat.stat-mech]（15页，2026-07-07 提交）
* **核心突破 (What's New)**：首次证明在互易布朗马达中，当机械坐标（如平移自由度）处于失速状态时，隐藏在内禀转子自由度中的熵产生可以通过**仅测量可观测坐标**实现精确重构。关键创新在于构造了一个最小可解 Langevin 马达模型，其中周期性势 `V(x-ℓθ)` 同时产生可观测量上的力和隐藏自由度上的反作用扭矩，满足力-力矩互易性 `τ_int = -ℓ F_x` 恒等式。
* **数学/物理模型 (Methodology)**：基于耦合 Langevin 方程 + Fokker-Planck 框架。利用力-力矩互易性与平移对称性导出局域流恒等式（local current identity），从而将隐藏热力学簿记「闭合」。证明通过可观测坐标测得的 Harada-Sasa 热等于该坐标的正电流平方耗散，且**信息流修正项恒为零**——无需时间尺度分离假设。
* **与本方向关联度**：【高优先级·核心相关】该工作解决了随机热力学中一个长期存在的理论痛点：如何从部分可观测量中推断隐藏自由度的熵产生。Harada-Sasa 等式在此类互易系统中的精确闭合，对理解纳米热机、分子马达中的能量转换效率界限具有直接意义。互易耦合下的隐藏熵产生重构框架，可能推广到几何流形上的随机过程分析。

---

#### 2. Brownian Ratchets and Pumps Universally Simulate Many-Body Active Dynamics
* **中文翻译**：布朗棘轮与泵浦普适模拟多体主动动力学
* **作者 & 机构**：Charles Stahl, Ethan Lake, Vedika Khemani（Stanford University）
* **检索来源**：arXiv:2607.01231 [cond-mat.stat-mech, quant-ph]（18页，2026-07-01 提交）
* **核心突破 (What's New)**：证明两种简单的物理驱动机制——(1) 时间周期哈密顿量耦合冷浴（"多体布朗泵"）和 (2) 静态哈密顿量耦合冷热双浴（"多体布朗棘轮"）——可以**普适地模拟任意局域主动自旋动力学**。这是将传统上用于输运研究的棘轮/泵浦机制提升至多体非平衡相行为生成器的重要理论扩展。
* **数学/物理模型 (Methodology)**：以概率元胞自动机为显式模型，严格证明对任意连续/离散时间局域主动动力学，均存在对应的多体布朗棘轮/泵浦，其近似误差可通过调节能量尺度和参数任意缩小。构造了双层铁磁 Ising 棘轮作为具体演示——当两层耦合于不同温度热浴时，该模型即使在对称破缺场下也能作为鲁棒经典记忆体（平衡态中不可能）。
* **与本方向关联度**：【高优先级】将布朗棘轮从单粒子输运推广到多体系统，稳态热流可自主生成并稳定新型集体行为。这一框架为研究非平衡态中随机对称性破缺、概率流驱动的相变提供了统一语言。与几何棘轮（geometric ratchet）和净能量交换（net energy exchange）的理论方向高度契合。

---

#### 3. Identifying Non-Ideal Reaction-Diffusion Systems Unable to Maintain Diffusion Out-of-Equilibrium
* **中文翻译**：识别无法维持扩散非平衡态的非理想反应-扩散系统
* **作者 & 机构**：Francesco Avanzini, Timur Aslyamov, Massimiliano Esposito（University of Luxembourg）
* **检索来源**：arXiv:2607.06030 [cond-mat.stat-mech]（2026-07-07 提交）
* **核心突破 (What's New)**：提出基于**动力学势（Lyapunov 函数）构造**的通用方法，以判定非理想反应-扩散系统中扩散何时必然趋于平衡。核心贡献在于明确了该平衡条件的判别取决于反应网络属于**伪细致平衡类**（反应通量受反应物与产物化学计量控制）还是**复平衡类**（通量仅受反应物化学计量控制），两类网络对反应通量的约束源自不同的化学计量性质。
* **数学/物理模型 (Methodology)**：构建 Lyapunov 函数作为动力学势，结合自治均相化学恒温器（chemostat）的任意驱动，在非理想溶液热力学框架下推广了此前研究（J. Chem. Phys. 161, 174108, 2024），放松了多项基础假设。
* **与本方向关联度**：【中优先级】该研究为理解非平衡开放系统中的**耗散结构与对称性约束**提供了系统化判别工具。Lyapunov 势方法与随机热力学中的大偏差理论和涨落定理形成互补，对研究化学反应网络中的非平衡稳态维持条件具有重要参考价值。

---

#### 4. Input-to-State Stability Implications in Contraction Theory
* **中文翻译**：收缩理论中输入-状态稳定性的蕴含关系
* **作者 & 机构**：Yu Kawano（Hiroshima University）, Francesco Bullo（UC Santa Barbara）
* **检索来源**：arXiv:2607.05640 [eess.SY, math.OC]（2026-07-06 提交，已被 IEEE Control Systems Letters 接收）
* **核心突破 (What's New)**：在赋范向量空间上的非线性控制系统中，刻画了一种增量 ISS 性质——超调常数同时乘以初始条件和输入项。通过对变分系统的分析，证明了变分系统上的 ISS 界与原系统上的增量 ISS 界**等价**。进一步建立了无穷小收缩条件（由 Lyapunov 型函数表达）与增量 Lyapunov 条件的等价性。
* **数学/物理模型 (Methodology)**：基于变分系统（variational system）和收缩度量（contraction metric）的微分几何框架。利用 Lyapunov 特征指数和灵敏度矩阵进行数值说明。所有结论仅需向量场的连续可微性，无需额外光滑性假设。
* **与本方向关联度**：【中优先级】收缩理论本质上是一种基于 Riemann 度量的微分几何控制方法，与流形上的随机稳定性和几何控制直接相关。Bullo 课题组是几何控制理论的权威团队，该工作为在随机扰动下分析非线性系统的增量稳定性提供了严谨的收缩度量工具，对随机 Hamilton 系统的几何控制具有方法论价值。

---

#### 5. Input-Contraction Neural Differential Models for Learning Stable Controlled Dynamical Systems
* **中文翻译**：面向稳定受控动力系统学习的输入-收缩神经微分模型
* **作者 & 机构**：Syed Pouladi
* **检索来源**：arXiv:2607.05718 [eess.SY]（2026-07-07 提交）
* **核心突破 (What's New)**：提出 ICNDM（Input-Contraction Neural Differential Model），一种在学习连续时间动力系统时同时处理时变控制输入并确保增量指数收敛的深度学习框架。与现有神经微分方程不同，ICNDM 通过学习**广义 Riemann 收缩度量**和嵌入的输入编码器，在有限外部激励下形式化建立了输入依赖的收缩性与输入-状态收缩性质。
* **数学/物理模型 (Methodology)**：利用参数化度量网络（metric network）与输入编码器联合学习非自治神经向量场和 Riemann 收缩度量。推导输入依赖收缩的充分条件，在混沌振子（如 Lorenz 系统）和永磁同步电机实验数据上验证，长期预测误差和输入扰动鲁棒性均显著优于 SOTA 神经微分基准。
* **与本方向关联度**：【中-低优先级】虽然核心方法是数据驱动的，但该工作通过 Riemann 收缩度量的显式学习，将微分几何结构引入了受控动力系统的稳定性保证中。对研究几何流形上的随机控制（特别是如何通过学习的收缩度量保证随机稳定性）具有方法论交叉价值。

---

### 💡 今日趋势洞察

- **隐藏热力学变量的信息重构成为热点**：今日多篇论文聚焦于从部分可观测量中推断隐藏自由度的非平衡热力学量（如 Taye 的熵产生精确重构、Avanzini 等的扩散平衡判别），反映了随机热力学从「全部可观测量」假设向「部分可观测量下的热力学推断」的范式转变。
- **布朗棘轮/泵浦模型向多体与普适性拓展**：Stahl-Lake-Khemani 的工作标志着布朗棘轮研究从单粒子输运机制向多体非平衡相行为生成器的跃迁，稳态热流驱动的新型集体行为可能催生对「随机对称性破缺」的新理解。
- **Riemann 收缩度量在控制与学习中的交叉应用增多**：Kawano-Bullo 的 ISS-收缩等价性和 Pouladi 的神经收缩微分模型，均从不同角度利用 Riemann 几何结构为受控动力系统提供稳定性保证，预示着微分几何工具在随机最优控制（特别是 HJB 方程的几何求解）中的进一步渗透。

---
*报告生成时间：2026-07-09 08:57 · 覆盖 arXiv 分类：cond-mat.stat-mech / math-ph / math.DG / math.OC / eess.SY*
