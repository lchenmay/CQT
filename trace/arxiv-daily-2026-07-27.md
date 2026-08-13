---
## 📅 2026-07-27 随机热力学与几何控制前沿动态

> 检索批次：arXiv **MONDAY, 27 JULY 2026** 新投稿（覆盖此前 09:00 占位轮次）
> 检索范围：cond-mat.stat-mech(5) + math-ph(6) + math.DG(4) + math.OC(13) + eess.SY(8) ≈ 36 篇新投稿

---

### 🎯 核心推荐文献

#### 1. arXiv:2607.22201 — Trajectory-Regularized Stochastic Optimal Control via KL Divergence
- **中文翻译**：基于 KL 散度的轨迹正则化随机最优控制
- **作者&机构**：Mintae Kim, Koushil Sreenath（UC Berkeley 混合系统/机器人）
- **检索来源**：eess.SY / cs.LG（CDC 2026 投稿）
- **核心突破**：用 Girsanov 定理把"受控轨迹分布 vs 参考轨迹分布"的 KL 散度转化为**二次漂移项失配惩罚**，得到保持动态规划（DP）结构的修正运行代价，导出对应 **HJB 方程**并刻画最优策略；在 LQ 设定下给出带增广控制代价的**闭式解**。这是"**Hamilton-Jacobi-Bellman + 随机最优控制**"关键词组合本轮的**最强直接命中**，且 KL 散度把信息几何（相对熵）自然编入随机控制代价。
- **数学物理模型**：Girsanov 指数鞅 / 轨迹级 KL = \(\int_0^T \tfrac12\|\mu-\mu_0\|^2 dt\) / HJB \(\partial_t V + \min_u\{\cdots + \tfrac12\|\mu-\mu_0\|^2\} = 0\) / LQ Riccati
- **与本方向关联度**：【高】—— 同时命中 HJB+随机最优控制主线，并以 KL 散度接通"随机热力学×信息几何"支线；是上周 Liu-Qi（李群保结构 DP）之后，HJB 框架在随机控制中的又一高质量推进。

#### 2. arXiv:2607.22527 — Effective field theories of nonlinear fluctuating hydrodynamics in one dimension
- **中文翻译**：一维非线性涨落流体动力学的有效场论
- **作者&机构**：Matija Koterle, Enej Ilievski（卢布尔雅那大学理论物理）
- **检索来源**：cond-mat.stat-mech
- **核心突破**：在指认旧有公式内在不自洽后，给出构造一维流体系统有效场论的通用系统方法——以**满足局域平衡物理约束（热力学 Maxwell 关系 + 涨落-耗散对称）的耦合随机 Langevin 型方程**形式表达，并用两相互作用流体模式 + 非高斯平稳平衡测度的简单模型数值验证。把超扩散输运等低维非平衡现象提升到可计算的随机场论层级。
- **数学物理模型**：耦合随机 Langevin 方程 / 涨落-耗散定理（FDT）/ 非高斯平稳测度 / 局域平衡约束
- **与本方向关联度**：【高】—— 直接属于"随机热力学 / 非平衡耗散"主轴；随机 Langevin + 涨落-耗散对称是随机热力学核心建模语言，与布朗陀螺仪、概率流、熵产生率研究共享底层框架。

#### 3. arXiv:2607.22021 — Classification of Six-dimensional Real Nilpotent Lie Bialgebras of Symplectic Type and their Poisson-Lie Groups
- **中文翻译**：辛型六维实幂零李双代数的分类及其 Poisson-Lie 群
- **作者&机构**：A. Poursistani, Gh. Haghighatdoost, J. Abedi-Fardad（伊朗大不里士/马拉盖大学）
- **检索来源**：math-ph
- **核心突破**：分类**全部辛型六维实幂零李双代数**，给出对应全部六维 Poisson-Lie 群上的 Poisson 结构，并构造出以 Poisson-Lie 群为相空间、其对偶李群为对称群的一类**新型可积哈密顿系统**。这是 Poisson 几何/Poisson-Lie 群基础设施的拓荒性分类结果。
- **数学物理模型**：李双代数 / Poisson-Lie 群 / 辛型（symplectic type）约束 / 可积哈密顿系统
- **与本方向关联度**：【中高】—— 延续上周 Krhac-Schuller（2607.20740）打开的 PCH/Dirac 几何入口：Poisson-Lie 群与 Dirac 结构是端口-哈密顿（PCH）系统的数学基石。本期从"分类 + 可积系统构造"侧加固该基础设施，但"乘性噪声 + PCH"专门组合仍缺席。

#### 4. arXiv:2607.22353 — Langevin for Nonconvex Optimization: Exact, Inexact and Zeroth-Order
- **中文翻译**：面向非凸优化的 Langevin 方法：精确、不精确与零阶
- **作者&机构**：Emanuele Naldi, Marco Rando, Lorenzo Rosasco, Silvia Villa（热那亚大学 / MIT / INRIA）
- **检索来源**：math.OC
- **核心突破**：在平滑+耗散假设下研究非凸优化的非渐近 excess-risk 界（而非完整抽样保证）。核心是经 **Csiszár-Kullback-Pinsker 不等式 + 指数矩估计**，把**相对熵（KL）直接通往目标函数值误差**，避免中间 Wasserstein 界，得到对 Log-Sobolev 常数更锐利的依赖；并推广到不精确梯度与仅依赖函数值的零阶 Langevin，给出首个零阶 ULA 的全局非凸复杂度界。
- **数学物理模型**：Unadjusted Langevin Algorithm / 相对熵→目标误差 / Log-Sobolev 常数 / CKP 不等式 / 零阶有限差分估计
- **与本方向关联度**：【中高】—— "**随机热力学 + 信息几何**"关键词组合的**最近邻命中**：把 Langevin / Fokker-Planck / 相对熵 / Log-Sobolev 这套随机热力学工具链用于随机优化，与 Kim-Sreenath 的 KL 正则化形成"信息几何在随机动力学两侧升温"的呼应。

#### 5. arXiv:2607.22084 — Lifts of partial cohomological field theories and examples of bi-Hamiltonian structures in the non-semisimple case
- **中文翻译**：部分上同调场论的提升与非半单情形下的 bi-Hamiltonian 结构
- **作者&机构**：Guido Carlet, Dimitrios Makris, Sergey Shadrin（巴黎 / 阿姆斯特丹）
- **检索来源**：math-ph（交叉至 math.DG / nlin.SI）
- **核心突破**：定义关于 Frobenius 代数的部分上同调场论（pCHT）提升，系统构造出非半单齐次 pCHT，其可积系统拥有**第二哈密顿结构**，从而确认 Buryak 等关于非半单情形第二 Poisson 括号显式公式的猜想；并联系 Morimoto 的"无穷近点 Weil 丛几何结构提升"理论。
- **数学物理模型**：pCHT 提升 / 第二 Poisson 括号 / bi-Hamiltonian 可积系统 / Frobenius 代数
- **与本方向关联度**：【中】—— 几何力学 / Poisson 基础设施双线加固（与 #3 的 Poisson-Lie 群互补），为后续"随机 Hamilton 系统 + 保结构数值 / 乘性噪声 PCH"提供可积系统侧的代数母体。

---

### 🔭 备选关注（本日次相关）

| arXiv ID | 标题 | 关联点 |
|----------|------|--------|
| 2607.22191 | Finite-Time Stabilization of Linear Systems via Optimal Control (Weng-Chitour-Mason) | 最优控制导出 **HJB 方程**并研究其值函数正则性，有限时间镇定 |
| 2607.21945 | Strategic Inference of Adversarial Navigation Objectives (Hu-Yang) | HJ 时间最优路径 + **Jacobi 场几何**：漂移项敏感性主项为"流场 Hessian 与 HJ 特征流 Jacobi 场的缩并"——辛几何邻近 |
| 2607.21890 | Stackelberg Games with a Robust Leader (Li-Zhang-Zhu) | 鲁棒领导者 Stackelberg 经**Wasserstein 空间上的 HJB 方程**刻画 |
| 2607.22362 | A Small-Noise Analysis of Controlled Functional Differential Equations (Criens-Nendel) | 受控泛函微分方程小噪声渐近，Boué-Dupuis + 小噪声 Laplace 原理（随机最优控制/大偏差） |
| 2607.22528 | Extreme First-Passage Time of Many Interacting Particles (Ruicheng Bao) | 相互作用极端首达时间，no-go 定理 + \(1/N\) 加速极限——非平衡统计力学 |
| 2607.21965 | Inertial Asynchronous Computation (Gökmen-Fruchart et al.) | 把"非平衡物质"框架用于异步多体计算，loop dynamical mean-field theory 相图 |
| 2607.22203 | Experimental Scheme for Molecular Rectification (Jiang) | "无需信息或外能的持续定向输运"分子整流实验方案——**几何棘轮近邻**（Brownian gyrator/ratchet 实验侧） |
| 2607.21794 | Safe Stabilizing Linear Feedback (Mestres-Mousavi-Ong-Ames) | HOCBF 安全约束下全局指数镇定 + LQR/鲁棒控制（高阶控制障碍函数） |

---

### 💡 今日趋势洞察

1. **HJB + 随机最优控制 直接命中日**：Kim-Sreenath（2607.22201）用 Girsanov 把轨迹级 KL 散度转成二次漂移项惩罚，保持 DP 结构并给出 HJB 闭式解——这是本追踪周期里"Hamilton-Jacobi-Bellman AND 随机最优控制"组合的**最强直接命中**，且与上周 Liu-Qi（李群保结构 DP）形成"欧氏代价 + 弯曲状态空间"两翼互补。

2. **Poisson / Hamilton 几何基础设施双线加固**：Poursistani 等（Poisson-Lie 群 / 辛型幂零李双代数）与 Carlet 等（非半单 bi-Hamiltonian 第二 Poisson 括号）同日现身，延续上周 Krhac-Schuller（2607.20740）打开的 PCH/Dirac 几何入口。港建继续推进，但"**乘性噪声 + PCH/Dirac**"专门组合仍未出现。

3. **相对熵 / Langevin 工具在非平衡与随机优化两侧收敛**：Koterle-Ilievski 用耦合随机 Langevin + 涨落-耗散对称构建 1D 涨落流体力学 EFT；Naldi 等用相对熵→目标误差（CKP + Log-Sobolev）给出非凸 Langevin 优化的非渐近界。两文从不同方向使用同一套"Langevin / Fokker-Planck / 相对熵"语言——**信息几何在非平衡与随机优化间的桥接正在升温**（KL 散度今日同时出现在 Kim-Sreenath 与 Naldi 两条线上）。

4. **持续缺口提醒**：
   - **Itô 修正 + 辛几何**：第十二期仍缺失（Hu-Yang 的 HJ-Jacobi 场几何属辛邻近，但非 Itô 修正专门论文）。
   - **Brownian gyrator / 净能量交换**：本日无专门新作，仅有 Jiang（2607.22203）分子整流实验作为几何棘轮近邻。
   - **乘性噪声 + PCH/Dirac**：Poisson 基础设施被加固，但乘性噪声×PCH 专门组合待补。
   - **随机热力学 + 信息几何**：Naldi（Langevin + 相对熵）为最强近邻命中，直接以"随机热力学"命名的研究仍稀缺。
