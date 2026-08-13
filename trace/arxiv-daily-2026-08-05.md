## 📅 2026-08-05 随机热力学与几何控制前沿动态

### 核心推荐文献

#### 1. Memory with Onsager-Casimir symmetry: Rotating particle in a viscoelastic fluid
* **中文翻译**：带有 Onsager-Casimir 对称性的记忆效应：粘弹性流体中的旋转粒子
* **作者 & 机构**：Debankur Das, Niloyendu Roy, Niklas Windbacher, **Clemens Bechinger**（Konstanz，布朗回转器实验先驱）, Matthias Krüger（Göttingen）
* **检索来源**：arXiv:2608.00344 [cond-mat.stat-mech]
* **核心突破 (What's New)**：首次从实验+理论双轨构建了**时间非局域随机动力学中 Onsager-Casimir 对称性的最小实现体系**。实验发现旋转增强长时扩散、并产生正交位移分量的时间反对称交叉关联。理论核心：非互易记忆核按对数螺线旋转，满足 Onsager-Casimir 对称性——这是非互易性从"瞬时耦合"向"记忆耦合"的理论跃迁。
* **数学/物理模型 (Methodology)**：示踪粒子 + 慢浴变量耦合 → 消去浴变量 → 广义 Langevin 方程（非 Markov 记忆核）。记忆核在旋转矢量反转下满足 Onsager-Casimir 对称 + 涨落-耗散关系。导出几何构造将双时交叉关联与粒子横向响应的反对称扇区直接联系——**超越经典 Einstein 关系**（后者只涉及对称扇区）。
* **与本方向关联度**：⭐⭐⭐⭐⭐⭐ 直接命中全部三条主线。① Bechinger = 布朗热机/回转器实验之父之一，此工作是该组在理论框架层面的重磅贡献；② 非互易记忆核 → 非平衡统计物理核心对象；③ **Onsager-Casimir = 随机热力学时间反演对称性的精确数学表达**，直接对应追踪关键词"随机对称性"。非互易现象第八弹（记忆域扩展）。

#### 2. LieStoNet: Learning Lie Symmetries from Spatiotemporal Data for Stochastic Dynamical Systems
* **中文翻译**：LieStoNet：从时空数据中学习随机动力系统的李对称性
* **作者 & 机构**：Shida Liu, Abhishek Gupta, Sumit Sinha, **L. Mahadevan**（Harvard，应用数学/物理学巨擘）
* **检索来源**：arXiv:2608.01582 [cond-mat.stat-mech] — **已被 ICML 2026 接收**
* **核心突破 (What's New)**：首个**无模板、端到端**从 SDE 轨迹数据自动发现 Lie 点对称性的框架。无需预指定对称群、模板或正则坐标。基于 Gaeta-Quintero(1999) 的 SDE Lie 对称理论（SDE 对称 ↔ Fokker-Planck 对称），直接从噪声轨迹中提取可解释的李代数生成元。
* **数学/物理模型 (Methodology)**：两步神经代理学习：① 从增量数据学漂移 f 和扩散 g 的神经网络代理 → ② 通过强制执行 SDE 确定方程（determining equations）学习可投影生成元。四项正则化：Lie 括号封闭性、李代数公理（双线性/反对称/Jacobi）、非冗余独立基。代理模型同时定义关联 Fokker-Planck 方程，可选并行发现其 Lie 点对称。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 李群+Langevin/SDE+FP 方程的三重交汇直接命中本方向"几何流形上的随机控制"。Mahadevan 将 20 世纪 90 年代的 Gaeta-Quintero 纯数学理论与现代深度学习桥接——**SDE 的对称性发现从"人算"变为"机算"**。对理解非平衡态随机系统的不变结构与守恒量有方法论意义。

#### 3. Channel selection at identically vanishing dissipation difference: isolating the frenetic sector of the overdamped path measure
* **中文翻译**：零耗散差异下的通道选择：隔离过阻尼路径测度的颤动扇区
* **作者 & 机构**：Shlomo Segal
* **检索来源**：arXiv:2608.00041 [physics.chem-ph] (cross-list cond-mat.stat-mech)
* **核心突破 (What's New)**：构造了一个**精确可控的反例**推翻鞍点局部信息（能垒+Hessian）足以决定反应通道选择的传统认知。通过精心设计: 两个通道端点相同、能垒完全相同、鞍点 Hessian 完全相同 → 但 Langevin 模拟分支比 P(+) = 0.4568 ± 0.0012 ≠ 50%——证明抉择完全来自路径积分的时间对称部分（frenesy/颤动扇区）。
* **数学/物理模型 (Methodology)**：Onsager-Machlup 路径权重分为时间反对称（熵流固定）和时间对称（frenesy）两扇区。耗散差异恒为零（梯度流无循环+通道对称），传统过渡态理论预测精确 50:50 → 实际偏离去往颤动扇区。从中抽出**协变几何贡献** (1/2) ln det(D_⊥ H_⊥)，无拟合参数复现模拟至 0.5σ。另外给出无参数预言：强度 ε 的螺线管力必须贡献恰好 2βε/π 给 ln[P(+)/P(-)]。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 直接探讨非平衡统计物理的核心问题——当熵产生（时间箭头的热力学部分）被精确消除后，剩余的是什么？答案是：**噪声-势能面耦合的几何**。对"随机对称性与净能量交换"的启发：布朗回转器的净旋转也可以在零平均耗散下由纯几何效应维持。

#### 4. Learning-Based Stochastic Optimal Control with Infinite-Horizon Probabilistic Constraints
* **中文翻译**：基于学习的无限时域概率约束随机最优控制
* **作者 & 机构**：Francesco Cordiano, Kanghui He, **Bart De Schutter**（TU Delft，控制领域顶级组）
* **检索来源**：arXiv:2608.01151 [math.OC] — 已投 IEEE TAC
* **核心突破 (What's New)**：将无限时域联合机会约束随机最优控制转化为约束 MDP，证明强对偶性，提出对偶上升算法收敛到最优可行确定性 Markov 策略。专为连续状态-输入空间设计离线价值函数学习算法，大幅降低在线计算复杂度。
* **数学/物理模型 (Methodology)**：状态增广 → 约束 MDP（成本+约束均加法结构）→ 强对偶性证明 → Lagrange 对偶无约束问题 → 对偶上升 + 价值函数近似（本质求解 Bellman 方程 = 离散 HJB 对应物）。
* **与本方向关联度**：⭐⭐⭐⭐ 虽未显式引用 HJB，但其约束 MDP 的价值函数学习本质上是离散时间 HJB 方程的求解。对随机控制计算方法的推进（特别是概率约束下的无限时域情形）对本方向"随机最优控制"子线有工具价值。De Schutter 组 = 欧洲随机最优控制领域重镇。

#### 5. Dual Variational Principles for Curl Forces
* **中文翻译**：卷曲力的对偶变分原理
* **作者 & 机构**：Arash Yavari（Georgia Tech）, Amit Acharya（CMU）
* **检索来源**：arXiv:2608.01219 [math-ph]
* **核心突破 (What's New)**：卷曲力（curl forces）是非保守、非耗散的位置依赖力，无法从普通势能导出，传统变分原理失效。本文构造了对偶变分格式：引入位置/速度的对偶变量 + 辅助函数 → 对偶作用的 Euler-Lagrange 方程同时复原原始运动方程和初始条件。**证明了非保守卷曲力动力学即使在无传统 Lagrange 量的情况下也可有变分描述**。
* **数学/物理模型 (Methodology)**：预对偶作用 + 原始驻点 → 对偶-原始映射 → 纯对偶作用。辅助对偶 Hamiltonian 沿稳态对偶轨迹守恒（虽非物理能量）。2D/3D 非线性卷曲力场 + Ziegler 柱实例验证。
* **与本方向关联度**：⭐⭐⭐ 确定性经典力学，不直接涉及随机热力学。但核心意义在于：① 非保守力的变分处理框架 → 若推广至含噪声情形（Onsager-Machlup 泛函的对偶版本），可能为随机非保守系统提供新变分工具；② Acharya 组同期另一篇 cross-list 论文（2608.02215, "Solving the Dissipation Inequality"）同样处理非保守力+耗散不等式，表明该组正系统推进非保守力理论基础。

---

### 🔍 备选关注

| arXiv ID | 标题 | 为何值得关注 |
|----------|------|-------------|
| 2608.00638 | **Work Statistics of Autonomous Quantum Energy Pumps** (Yang Peng) | 量子自主能量泵——能量收集概念在量子领域的对偶。与经典布朗回转器/能量收集直接对话 |
| 2608.02215 | **Solving the Dissipation Inequality not as a constitutive restriction** (Larrain Silva, Acharya) | 耗散不等式的新视角——非本构约束。Acharya 组今天两篇论文同时处理非保守力理论 |
| 2608.00751 | **Generalized Marginals of Wigner Distribution and Lagrangian Tomography** (Maurice de Gosson) | de Gosson = 辛几何大师。Wigner 分布的广义边际与 Lagrange 层析术。辛几何×随机量子力学的交叉 |

---

### 💡 今日趋势洞察

1. **Bechinger 组亲手完成非互易性的"记忆域"扩展**：此前七弹非互易论文绝大多数处理瞬时/稳态耦合。Das-Bechinger-Krüger 将非互易耦合提升至**时间非局域记忆核**（对数螺线旋转），并以 Onsager-Casimir 对称性奠定热力学自洽基础。这是该方向从现象学迈向公理化的重要一步——非互易现象现已覆盖即时(Sezik RG)→ 输运(Patel)→ 力学(Hayakawa)→ 相变(Aldrin 时间晶体)→ 自组装(Welker)→ **记忆域(Das et al.)** 六个物理层次。

2. **李群-随机动力系统交叉首次闯入顶会**：Mahadevan 组 LieStoNet 被 ICML 2026 接收，标志着"SDE 对称性自动发现"从数学物理学小众课题进入 ML 主流视野。Gaeta-Quintero(1999) 的 SDE 确定方程理论沉睡了 27 年后被深度学习唤醒——这对本方向"几何流形上的随机控制"是基础设施级推进。

3. **非保守力理论基础同日多线推进**：Acharya 组双论文（卷曲力变分原理 + 耗散不等式新解）与 Segal 的颤动扇区隔离、Das 的 Onsager-Casimir 记忆核，形成从变分原理→几何通道选择→热力学对称性的完整理论链条——非保守/非平衡力学的基础正在同期重铸。

4. **持续缺口**：Itô+辛几何第二十期未破零；乘性噪声+PCH/Dirac 组合仍空白；HJB 新论文缺席（今日仅 Cordiano 的离散时间 Bellman 近似相关）。
