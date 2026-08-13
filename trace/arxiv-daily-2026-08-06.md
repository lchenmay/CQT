---
## 📅 2026-08-06 随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. Lower bounds on entropy production from dynamical correlation functions
* **中文翻译**：基于动力学关联函数的熵产生下界
* **作者 & 机构**：Paul Raux, Alexander M. Maier, **Udo Seifert**（斯图加特大学 II. Institut für Theoretische Physik）
* **检索来源**：arXiv:2608.03619 [cond-mat.stat-mech]
* **核心突破 (What's New)**：提出仅依赖**粗粒化可观测量双时关联函数的不对称性**即可导出熵产生下界，无需知晓底层微观动力学。对非平衡稳态任意关联滞后成立，对含时过程仅需零滞后极限。这解决了随机热力学中长期悬而未决的难题——**从部分观测中推断不可逆性**。
* **数学/物理模型 (Methodology)**：利用 Markov 动力学或过阻尼 Langevin 方程作为底层隐藏描述，将熵产生下界表达为实验可测双时关联函数时间反演不对称性的泛函。讨论了界限的优化与紧致性。
* **与本方向关联度**：⭐⭐⭐⭐⭐⭐ Seifert 是随机热力学创始人之一。此文将熵产生下界从静态涨落定理扩展到**动力学关联函数**——相当于给了不完全观测系统一个"不可逆性温度计"。对布朗回转器/净能量交换实验中如何从轨迹数据定量约束不可逆性提供了直接可用的新工具。

#### 2. Odd elasticity in a three-link microswimmer: feedback equivalence, global controllability, and the cost of non-reciprocity
* **中文翻译**：三连杆微游动机器人中的奇弹性：反馈等价、全局可控性与非互易性代价
* **作者 & 机构**：Rossella Attanasi, Gaetano Napoli, Marta Zoppello（意大利，具体机构待查全文）
* **检索来源**：arXiv:2608.02777 [math-ph]
* **核心突破 (What's New)**：发现**奇弹性（非厄米扭转刚度）对游动控制几何完全"不可见"**——不改变可控性/括号结构，仅通过 det **K** = k² + k₀² 缩放度量。核心结果是：**无论奇弹性符号正负，转向操纵的能量成本都严格更便宜**。这是几何控制理论对非互易耗散的极简分析。
* **数学/物理模型 (Methodology)**：Cartan (2,3,5) 子黎曼结构 + 次芬斯勒（Randers）度量刻画最优转向。反馈等价将非保守漂移吸收进控制向量场张成空间 → 系统化为无漂移形式。全阻力理论（RFT）数值验证。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 非互易性追踪第九弹。此文以极清晰的几何语言揭示了一个深层原则：**非互易性（奇弹性）在某些模式下并非增加耗散，而是降低特定操纵的能量代价**。子黎曼几何→非互易成本的分离结果对"几何流形上的随机控制"有直接方法论意义。但需注意此文是确定性低雷诺数框架，暂无随机热力学/涨落定理链接。

#### 3. Fast and slow mean-field games
* **中文翻译**：快慢平均场博弈
* **作者 & 机构**：Roxana Dumitrescu（King's College London）, Julian Gutierrez Pineda, **Peter Tankov**（ENSAE Paris）
* **检索来源**：arXiv:2608.03376 [math.OC]
* **核心突破 (What's New)**：提出含**公共噪声（common noise）**的平均场博弈（MFG）的快-慢分解框架：快变量携带遍历公共噪声，慢变量受控/可停止。通过对快过程平稳测度做平均化，将带公共噪声的 MFG **严格近似为无公共噪声的"有效"MFG**，并显式构造 ε-Nash 均衡。
* **数学/物理模型 (Methodology)**：耦合 HJB + Fokker-Planck 方程的两尺度平均化。快过程遍历 → 漂移系数取平稳测度期望 → 有效 MFG 的 HJB 方程不含公共噪声。随机化停时均衡存在性新结果 + 两尺度扩散强收敛 → 误差由时间尺度分离参数控制。
* **与本方向关联度**：⭐⭐⭐⭐ MFG 是连接随机最优控制（HJB）与多体统计物理的天然桥梁。此文的两尺度分解直接对应统计力学中的**快慢变量分离**（投影算子方法的精神），且 Tankov 组的数学严格性保证了近似可控。对大规模非平衡系统（如多粒子布朗回转器群体）的 MFG 建模有潜在启发。

#### 4. A McKean–Vlasov semigroup and its application to a martingale representation problem
* **中文翻译**：McKean–Vlasov 半群及其在鞅表示问题中的应用
* **作者 & 机构**：Mao Fabrice Djete, Mattia Martini
* **检索来源**：arXiv:2608.03412 [math.PR, math.OC]
* **核心突破 (What's New)**：在**带共同噪声**情形下构造 McKean–Vlasov 半群，通过有限粒子逼近+对角/非对角切分解识别 Lions 导数，得到 Wasserstein 空间上线型方程的 Feynman-Kac 表示，并在无漂移情形给出鞅表示问题的唯一解。
* **数学/物理模型 (Methodology)**：McKean–Vlasov 随机微分方程的条件密度流传函 → 半群 + Lions 导数一阶微分结构 → 倒向表示。核心是 Wasserstein 空间上的一阶变分演算的完备化，不依赖二阶信息几何结构。
* **与本方向关联度**：⭐⭐⭐⭐ McKean–Vlasov 过程是相互作用粒子系统的宏观极限，天然与"非线性 Fokker-Planck 方程"和"平均场热力学"连接。此文在 Wasserstein 测度空间上建立了一阶微分演算的完整闭合——虽然摘要未明确触及信息几何，但 Lions 导数本身就是 Otto 演算的核心元素，为后续将信息几何散度/度量引入 McKean–Vlasov 动力学铺了路。

#### 5. A Spectral Route to Directed-Polymer Glasses
* **中文翻译**：通向有向聚合物玻璃的谱路径
* **作者 & 机构**：Sen Mu, Abbas Ali Saberi, **Mehran Kardar**（MIT）
* **检索来源**：arXiv:2608.03730 [cond-mat.dis-nn, cond-mat.stat-mech]
* **核心突破 (What's New)**：将**多根相互回避的有向聚合物**（淬火无序介质中的玻璃态线物质）的多体转移矩阵问题，重构为**单根聚合物转移矩阵乘积的对数本征值填充问题**，以谱方法直接获取淬火自由能及其累积量，验证了副本 Bethe ansatz 的稀释理论预测。
* **数学/物理模型 (Methodology)**：副本 Bethe ansatz → 稀释极限自由能 ∝ ρ² + 幂律无序累积量。新方法：多粒子转移矩阵的组合爆炸 → 单粒子转移矩阵乘积的谱统计（本征值填充 + 线性谱边缘）。
* **与本方向关联度**：⭐⭐⭐ Kardar 是 KPZ 方程的 K。有向聚合物 = KPZ 普适类的核心玩具模型，且玻璃态线物质是理解非平衡无序系统中"遍历性破缺"和"老化"的着力点。但此文偏重静态谱方法，与动态非平衡/能量收集的直接距离较远。作为 Kardar 组的工作保留追踪。

---
### 💡 今日趋势洞察

1. **Seifert 把熵产生推断推进到"关联函数层次"**：从涨落定理（单时刻）→ 过渡路径（双时刻路径概率比）→ 现在直接用双时关联函数的不对称性做下界。这意味着实验者无需重建完整轨迹——只需测量两个可观测量之间的时间关联函数，就能给不可逆性定量下限。对本方向的布朗回转器实验设计有直接指导意义。

2. **非互易性追踪第九弹——几何控制视角介入**：Attanasi-Napoli-Zoppello 用 Cartan (2,3,5) 子黎曼几何揭示了非互易性在特定模式下**降低操纵代价**而非增加耗散的机制。这是非互易性论文九日连发中首次出现**子黎曼最优控制**工具链，标志着该领域从物理/统计力学向几何力学的交叉深化。

3. **MFG/McKean-Vlasov 方法论持续精细化**：Tankov 组的两尺度 MFG 和 Djete-Martini 的 MV 半群代表该方向从"存在性/适定性"向"可计算近似/表示论"的成熟转变。对本方向"多粒子非平衡系统的最优控制"有基础设施意义。

4. **今日批次整体偏"方法论深化"而非"爆发式新现象"**：与昨日 Bechinger 非互易记忆域 + LieStoNet 入 ICML 的高密度突破相比，今日更像"深层工具链补强日"。持续缺口：Itô+辛几何第二十一期空白，乘性噪声+PCH/Dirac 组合仍无命中。
---
