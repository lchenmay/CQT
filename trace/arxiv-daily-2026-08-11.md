
## 📅 2026-08-11（周一 8/10 批次）随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. A Symplectic Theory of Turbulence Closure: Hidden Reservoir Dynamics, Endogenous Stochastic Transport, and Kraichnan Dual Cascades
* **中文翻译**：辛几何湍流闭合理论：隐式库动力学、内生随机输运与 Kraichnan 对偶级联
* **作者 & 机构**：Mickaël D. Chekroun（Weizmann Institute）, James C. McWilliams（UCLA）
* **检索来源**：arXiv:2608.06606 [physics.flu-dyn / math-ph]，58pp
* **核心突破 (What's New)**：首次为二维湍流的亚网格闭合提出**辛几何闭合方案（SGC）**——从多层随机模型的几何约化中导出隐藏的辛自由度"库"，库中未解析的随机活动通过受约束的哈密顿交换回流到解析尺度。同一生成泛函 **G** 既产生 emergent Hamiltonian 亚网格速度（其强迫恰为解析涡度的 Lie 输运），又在几何上保证增强拟涡能守恒、拉回有界性和紧致随机拉回吸引子。
* **数学/物理模型 (Methodology)**：
  - 辛几何约化：Hamiltonian 交换通过辛泛函 G 在解析/未解析自由度间进行
  - 随机拉回动力学：pullback boundedness → compact random pullback attractor
  - 有限记忆欧拉理论：消除库变量后，单圈线重整化（one-loop line-renormalized order）的库收缩再现 Kraichnan 直接相互作用近似（DIA）算子结构
  - 随机伽利略不变性（Random Galilean transformations）：嵌套 Jacobian 顶点自然施加 O(p⁴) 红外压制消除均匀扫描模
  - 自洽恢复经典 k⁻⁵/³ 反能量级联和 k⁻³ 正拟涡能级联
* **与本方向关联度**：🎯🎯🎯🎯🎯🎯 **本方向有史以来最高优先级论文**。本文首次在一个具体的物理系统中实现了"随机动力学→辛几何结构→涌现耗散/输运"的完整理论链，恰好证明了一个长期空白（连续 25 期"伊藤+辛几何"无结果）背后的深层可能性——**随机湍流本质上可以理解为辛流形上的隐藏库随机驱动过程**。内生随机输运（endogenous stochastic transport）这一概念对"随机对称性与净能量交换"的辛几何表述具有根本性的启发。

---

#### 2. Inverse Reinforcement Learning for Indefinite Mean-Field Social Optimization with Multiplicative Noise
* **中文翻译**：具有乘性噪声的不定平均场社会优化的逆强化学习
* **作者 & 机构**：Ying Cao, Xun Li（Hong Kong Polytechnic University）, Bing-Chang Wang（Shandong University）
* **检索来源**：arXiv:2608.07252 [math.OC]
* **核心突破 (What's New)**：在不满足标准凸性假定的不定成本权重（indefinite cost weights）环境下，解决**乘性噪声**平均场系统的逆强化学习问题——从专家演示中恢复未知社会成本权重并复现最优控制策略。提出基于模型和无模型两套算法，证明了收敛性和闭环稳定性。
* **数学/物理模型 (Methodology)**：
  - 耦合随机代数 Riccati 方程（CSARE）+ Lyapunov 方程求解
  - 基于模型：两阶段顺序循环分别处理个体和平均场动力学
  - 无模型：积分强化学习（integral RL）+ 最小二乘辨识，仅需秩条件满足的轨迹数据
  - 刻画了恢复成本权重的非唯一性特征
* **与本方向关联度**：🎯🎯🎯🎯 直接处理**乘性噪声下的随机最优控制**——这是"端口受控 Hamilton 系统+乘性噪声"追踪关键词的核心变体。虽然本文偏平均场博弈/RL 方向，但耦合 Riccati-Lyapunov 求解技术对随机 Hamilton 系统的均方稳定性分析具有方法论启示。不定成本权重引入的非凸性挑战也与 Liouville 测度非正定性有类比。

---

#### 3. Stochastic Homogenization of Non-local Hamilton-Jacobi-Bellman Equations
* **中文翻译**：非局部 Hamilton-Jacobi-Bellman 方程的随机均匀化
* **作者 & 机构**：Wenjia Jing, Qi Zhang（清华大学丘成桐数学科学中心）
* **检索来源**：arXiv:2608.06814 [math.AP / math.OC]
* **核心突破 (What's New)**：将 KRV 2006 方法（拉普拉斯消失的 HJB 均匀化）首次推广到带**跳-扩散（jump-diffusion）的非局部积分-微分 HJB 方程**，在平稳遍历随机介质中建立随机均匀化理论。关键技术突破：将非局部算子表示为梯度上的正则积分算子的散度形式以构造近似超校正子。
* **数学/物理模型 (Methodology)**：
  - Kosygina-Rezakhanlou-Varadhan（KRV）框架：HJB 解的随机最优控制表示 → 近似超校正子构造 → 扩散过程与随机介质中抽象扩散的链接
  - 非局部 Lévy 型积分-微分算子 → 散度形式表示
  - 平稳遍历随机介质中的均匀化极限定理
* **与本方向关联度**：🎯🎯🎯 HJB 方程是随机最优控制的核心数学工具，本文将其均匀化理论推进到非局部跳-扩散情形，对理解"流形上随机控制的多尺度行为"有直接理论价值。跳-扩散的引入使其更接近真实非平衡系统的随机驱动（非纯高斯噪声），与"随机对称性破缺+概率流"的问题结构一致。

---

#### 4. Monte Carlo Methods on Compact Symplectic Manifolds
* **中文翻译**：紧辛流形上的蒙特卡洛方法
* **作者 & 机构**：Yuri A. Kordyukov（俄罗斯科学院乌拉尔分院）
* **检索来源**：arXiv:2608.07021 [math.DG / math-ph / math.PR]，16pp
* **核心突破 (What's New)**：在预量子化紧辛流形上构造了任意 C¹ 函数的**无偏蒙特卡洛积分估计量**，求积节点采用 Bochner-Schrödinger 算子的行列式点过程（DPP）。证明估计量满足中心极限定理，且 MSE 衰减速率达到 Bakhvalov 最优最坏情况界。
* **数学/物理模型 (Methodology)**：
  - Bochner-Schrödinger 算子谱投影 → 行列式点过程
  - 辛几何结构保证谱投影的渐近均匀性（Kostant-Atiyah-Bott 型迹公式）
  - 中心极限定理 + Bakhvalov 最优界证明
* **与本方向关联度**：🎯🎯 虽然本文偏数值计算方向，但它将**随机采样（Monte Carlo）方法正式建立于辛流形的几何结构之上**，对"随机动力学在辛几何背景下的数值实现"提供了严格的理论基础。行列式点过程的排斥性也与费米子/排斥性布朗粒子的随机热力学有隐含联系。

---

### 💡 今日趋势洞察

**今日（8/10 批次）是本追踪项目启动以来相关性最强的一个批次。**

1. **辛几何+随机动力学的突破性交汇**：Chekroun & McWilliams 的 SGC 理论是本方向连续追踪 26 期以来首次直接命中的"辛几何内生随机动力学"核心论文。它证明了一个深层猜想——**湍流闭合可以被理解为一个辛流形上的随机 Hamilton 系统**，其中"隐藏自由度"的回流就是随机输运的几何来源。这与 Gibbs 测度/辛约化/随机力学的理论框架形成了天然的对话通道。

2. **乘性噪声+最优控制的工程→理论迁移**：Cao-Li-Wang 的乘性噪声不确定成本权重逆 RL 代表了"工程系统中的 FBSDE/Riccati"向"非凸随机最优控制理论"的渗透。耦合代数 Riccati 方程的结构与 PCH 系统在随机扰动下的 L² 增益分析有直接关联。

3. **持续空白状态**：尽管今日批次质量极高，直接的"They-they"论文（"Brownian gyrator"="随机热力学+微分几何+能量收集"三领域同时出现）仍未出现。Itô 修正+辛约化的严格理论工作依然空白，但 Chekroun 的 SGC 以具体物理系统验证了该方向的可行性。

4. **方法论趋势**：行列式点过程（DPP）作随机积分节点、随机伽利略不变性约束算子的 O(p⁴) 红外压制、Wasserstein-2 梯度策略——这些工具正在从纯数学向物理/控制交叉领域渗透。下一批追踪应特别关注信息几何（Fisher-Rao/Wasserstein）在随机热力学中的应用。
---
