---
## 📅 2026-08-14 随机热力学与几何控制前沿动态
> 数据批次：arXiv 2026-08-13（周四）｜覆盖分类：cond-mat.stat-mech / math-ph / math.DG / math.OC / eess.SY

### 核心推荐文献

#### 1. Higher-order variation and pathwise Ito calculus on manifolds
* **中文翻译**：流形上的高阶变分与路径伊藤积分
* **作者 & 机构**：Rama Cont（Oxford / Imperial，路径随机分析与粗糙路径学派）
* **检索来源**：arXiv:2608.12225 [math.PR]（交叉 math.DG）
* **核心突破 (What's New)**：为任意低正则路径上的光滑函数建立了**流形上的内蕴微积分**，定义了沿路径的精确微分形式的路径积分；对 $p=2$ 把 Föllmer 的路径伊藤积分**推广到流形值路径**，并把 Schwartz 二阶微分几何推广为高阶类比。
* **数学/物理模型 (Methodology)**：用沿分割序列的 $p$ 阶变分张量（局部对称张量测度）刻画路径正则性，仅需流形上的**仿射联络**；导出高阶变量替换公式与几何传递原理（高阶切向量分解为对称张量分量），并给出黎曼流形与李群上分数布朗运动指数提升的高阶伊藤型积分。
* **与本方向关联度**：🔶🔶🔶🔶🔶 **今日最重要命中——Itô 修正 + 微分几何的直接结合。** 把路径伊藤积分提升到流形，正是"随机对称性 + 几何流形上随机动力学"的严格数学底座；可为流形上 Fokker-Planck/随机控制中的 Itô 漂移修正提供内蕴几何工具。

---
#### 2. Geometry of Noisy Quantum Many-Body Dynamics with Continuous Symmetries: Entanglement and Correlations
* **中文翻译**：具连续对称性的噪声量子多体动力学几何：纠缠与关联
* **作者 & 机构**：Marco Lastres, Sanjay Moudgalya（Princeton，量子动力学/纠缠组）
* **检索来源**：arXiv:2608.11297 [cond-mat.stat-mech]（交叉 math-ph / quant-ph）
* **核心突破 (What's New)**：证明具 $U(1)/SU(2)$ 连续对称性的布朗噪声量子动力学，其晚期平均演化由**基态流形的量子几何**控制，且该几何直接由 $k$-交换子（系统 $k$ 个副本的对称代数）决定、与噪声微观细节无关。
* **数学/物理模型 (Methodology)**：把平均化晚期动力学映射到副本哈密顿量低能物理，用时间相关变分原理（TDVP）解释亚弹道 Rényi 纠缠增长与关联函数反常衰减；几何奇异性源于连续在位对称性产生的冻结"空穴"态。
* **与本方向关联度**：🔶🔶🔶🔶 **随机对称性 + 几何的直接命中。** 展示了"连续对称性 + 噪声 → 基态流形几何"的普适框架，为随机对称性破缺下纠缠/关联的几何起源提供了全新视角（亦涵盖 Haar 随机电路）。

---
#### 3. A piston-like polymer stochastic heat engine
* **中文翻译**：一种活塞式聚合物随机热机
* **作者 & 机构**：Yi-Jui Chiu, Cheng-Hung Chang（National Changhua University of Education，台湾彰师大）
* **检索来源**：arXiv:2608.11507 [cond-mat.stat-mech]
* **核心突破 (What's New)**：提出一种**更像活塞-气缸热机**的聚合物随机热机：热量经循环过程转化为功，聚合物在变温下被拉入/拉出狭窄通道，功直接由力-位置图的循环轨迹读出（类比宏观 p-V 图），并验证普适低耗散界、再生条件恢复卡诺效率。
* **数学/物理模型 (Methodology)**：高自由度聚合物（拉绳穿过通道）+ 循环温度驱动；用数值模拟验证功/功率的低耗散标度、效率的普适低耗散界，以及再生协议下的卡诺效率恢复。
* **与本方向关联度**：🔶🔶🔶🔶 **非平衡能量收集/能量交换侧强命中。** 把"机械力产生"纳入随机热机（不同于纯胶体模型），其力-位移循环净功的几何读法，正是"净能量交换"（net energy exchange）在受限几何中实现的具体范例。

---
#### 4. The Advective Fisher-Rao Geometry of Deterministic Measure Transport
* **中文翻译**：确定性测度输运的对流 Fisher-Rao 几何
* **作者 & 机构**：Benjamin Gess（Max Planck / Bielefeld）, Johannes Müller
* **检索来源**：arXiv:2608.12111 [math.OC]（交叉 math.DG / math.PR / cs.LG）
* **核心突破 (What's New)**：引入**对流 Fisher-Rao 度量**用于连续性方程支配的概率测度路径上的优化，证明其产生最优下降方向；并证明它从三条路径自然涌现——路径测度上 Fisher-Rao 的重标零噪声极限、Freidlin-Wentzell 大偏差率泛函二阶变分期望、Benamou-Brenier 作用泛函的 Hessian。
* **数学/物理模型 (Methodology)**：在概率测度路径空间上构造对流 Fisher-Rao 度量（信息几何工具），联结最优输运（Benamou-Brenier）与大偏差（Freidlin-Wentzell）；配 Gauss-Newton 数值实验实现密度/速度场最优拟合。
* **与本方向关联度**：🔶🔶🔶🔶 **信息几何 + 随机控制/大偏差直接命中。** 把信息几何（Fisher-Rao）与随机过程大偏差、动态最优输运统一，正是"信息几何解决随机控制与优化"这一中优先级方向的代表工作。

---
#### 5. Macroscopic fluctuation theory for the multi-time statistics of current in non-stationary diffusive systems
* **中文翻译**：非平稳扩散系统中电流多时统计的宏观涨落理论
* **作者 & 机构**：Sabyasachi Chowdhury, Kapil Sharma, Sandeep Jangid, Tridib Sadhu（Tata Institute of Fundamental Research, Mumbai）
* **检索来源**：arXiv:2608.12119 [cond-mat.stat-mech]（JSTAT StatPhys29 特刊）
* **核心突破 (What's New)**：把宏观涨落理论（MFT）的涨落流体动力学框架**扩展到非平稳态**，得到电流的**多时大偏差统计**；并发现"电流涨落与分数布朗运动的联系"在阶跃初始条件下**不再成立**——修正了此前基于平坦初始条件的认知。
* **数学/物理模型 (Methodology)**：对非相互作用晶格气体与硬核布朗点粒子给出 MFT 显式解，对一般系统用微扰法得到双时关联闭式；并用非相互作用气体与 SSEP 的微观动力学独立验证。
* **与本方向关联度**：🔶🔶🔶🔶 **非平衡净电流涨落侧强命中。** 把电流多时统计推进到非平稳系统，其对"净电流-分数布朗运动"普适联系的条件性揭示，直接影响随机输运/能量收集中电流涨落普适类的判定。

---
### 💡 今日趋势洞察

今日（8/13）批次是本追踪自 SGC 辛几何湍流闭合以来**关键词命中率最高的一批**：路径伊藤积分被严格提升到流形（Itô+微分几何的直接结合）、Port-Hamiltonian 扰动抑制（PCH 直接命中）、Fisher-Rao 对流几何联结大偏差与最优输运（信息几何）、聚合物随机热机（净能量交换）、噪声多体动力学+连续对称性几何（随机对称性）——五个核心关键词线全部有实弹。趋势上，**"噪声/随机动力学"与"几何结构（流形、Fisher-Rao、对称代数流形）"的深度融合**是本批主线，路径级随机分析与信息几何正从工具层面系统接管非平衡与控制的几何化表达；PCH 与乘性噪声的直接组合仍待进一步命中。
