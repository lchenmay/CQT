
## 📅 2026-08-09（周日·周末扫尾）随机热力学与几何控制前沿动态

> **状态说明**：今日为周日，arXiv 无新批次上线（最新批次仍为周五 8/7）。本期简报对 8/4–8/7 窗口内可能遗漏的高相关论文做补充扫描，并追踪一批提前更新的重要预印本修订版。

### 核心推荐文献

#### 1. Stochastic thermodynamics for classical non-Markov jump processes (v5 更新)
* **中文翻译**：经典非马尔可夫跳跃过程的随机热力学（第五版修订）
* **作者 & 机构**：Kiyoshi Kanazawa（筑波大学/Kyoto）、Andreas Dechant（京都大学）
* **检索来源**：arXiv:2506.04726v5 [cond-mat.stat-mech]（v5 发布于 2026-08-04；初版 2025-06-05）
* **核心突破 (What's New)**：将随机热力学的基本框架——包括细致涨落定理和热力学第二定律——**严格推广到带有任意长记忆的非马尔可夫跳跃过程**。关键创新是「Fourier embedding」技术：通过引入辅助 Fourier 模式，将非马尔可夫跳跃过程等价变换为 Markov 场动力学（辅助模式空间上的 Fokker-Planck 演化），从而在保持热力学一致性的前提下，对历史依赖涨落实现**不依赖于嵌入方式的累积熵产**——仅由目标系统可观测量唯一确定。
* **数学/物理模型 (Methodology)**：Markov 嵌入 + Fourier 模态展开 → 辅助场空间 Markov 化 → 时间反演对称性充要条件 → 非 Markov 第二定律与累积熵产定理。示例包括历史依赖二态模型和历史依赖随机游走（类比 Zwanzig 模型的跳跃过程版本），给出透明微观解释。
* **与本方向关联度**：⭐⭐⭐⭐⭐ 这是**非平衡态统计物理基石的重大拓展**。对于我们的「随机对称性与净能量交换」主题，该工作提供了在记忆/非 Markov 设定下定义和计算不可逆熵产的系统工具——正是理解生物分子马达、布朗回转器在非 Markov 浴中能量-信息转换所必需的理论语言。

#### 2. Stabilizer Design for Policy Iteration in Stochastic Linear Quadratic Control: A Spectrum-Assignment Approach
* **中文翻译**：随机线性二次控制中策略迭代的稳定器设计：频谱配置方法
* **作者 & 机构**：Xinyu Cao, Bing-Chang Wang, Ying Cao（山东大学控制科学与工程学院）
* **检索来源**：arXiv:2608.05953 [math.OC]（2026-08-07 批次）
* **核心突破 (What's New)**：针对**状态和控制均依赖的乘性噪声（multiplicative noise）**随机 LQ 系统，提出一种基于 Lyapunov 型算子频谱的初始稳定控制器构造方法——使 model-free 策略迭代（PI）的初始化阶段不再依赖完整模型信息。乘性噪声打破了确定性情形下 Hurwitz 判据的稳定性判别范式，作者转而使用融合漂移和扩散项的 Lyapunov 型不等式。
* **数学/物理模型 (Methodology)**：Lyapunov-type operator 频谱分析 → 从稳定辅助系统逐步逼近原系统（调节累积因子 cumulation factor） → model-free 数据驱动算法（不依赖初始稳定策略即可达最优控制）。
* **与本方向关联度**：⭐⭐⭐⭐ 该文直接命中「乘性噪声」核心关键词。Lyapunov 型不等式「同时包含漂移和扩散项」的结构，在数学上暗合了 **Itô 校正 + 流形曲率** 的几何直觉（随机流形上的二阶矩稳定性 = 扩散项贡献不可忽略）。对理解「随机流形上的最优控制」有直接建模参考价值。

#### 3. Characteristic Sensitivity Ensembles for Inference of Hidden Dynamics from Marginal Observations
* **中文翻译**：基于特征敏感性集成从边缘观测推断隐藏动力学的框架
* **作者 & 机构**：Qi Wang, Gustaaf Jacobs（San Diego State University）
* **检索来源**：arXiv:2608.06190 [math.OC / math.DS / math.ST]（2026-08-07 批次）
* **核心突破 (What's New)**：将低维观测中表现为扩散/不可逆的随机动力学，**重新表述为增广状态空间中的确定性可逆 Liouville 流**：隐变量承载随机性与记忆，联合密度满足双曲 Liouville 方程，边缘分布是这些双曲动力学在观测坐标上的投影。利用 Liouville 方程的特征线（characteristic lines）传播粒子，绕过直接求解高维 PDE。
* **数学/物理模型 (Methodology)**：增广空间 Liouville 方程 → 特征线粒子传输 → Euler 敏感度沿特征线传播 → cross U-statistic 无偏梯度估计 → 随机梯度下降。验证：线性三模态、非线性 Gompertz 生长、双稳态隐藏模态使单峰边缘变双峰、Stokes-Oseen 阻力恢复。
* **与本方向关联度**：⭐⭐⭐ 该文在方法论上提供了一个有趣的连接：**从 Liouville 方程到随机过程的降维**本质上是一种几何约化（symmetry reduction / projection onto observed coordinates）。这对我们理解「辛几何中的随机约化」和「流形上确定性流与扩散流之间的对偶性」有启发意义。但文内未明确使用几何力学语言，属于方法论交叉。

---
### 💡 今日趋势洞察

1. **非 Markov 随机热力学正在形成体系**：Kanazawa & Dechant 的 Fourier embedding 方案给出了一套完整的「记忆依赖涨落 → 热力学一致性约束」框架（该文已被 PRX 接收的 rumor 在学界流传）。这意味着随机热力学正从 Markov 的"舒适区"向真实实验条件（生物分子、胶体粒子在粘弹性介质中的记忆效应）大幅推进——未来几个月很可能看到非 Markov 版本的涨落定理在具体器件模型中落地。

2. **乘性噪声控制从工程到物理的桥梁在搭建**：Cao 等人的随机 LQ 控制工作虽首发于控制论社区，但其核心数学结构（Lyapunov 算子含扩散项、频谱配置 = 稳定性模式选择）与统计物理中「噪声诱导相变」「随机共振」的数学语言高度同构。建议关注控制论×统计物理的交叉地带，尤其 stochastic LQ → Fokker-Planck 控制的对应。

3. **周末窗口提醒**：周一（8/10）arXiv 将发布新的工作日批次，预计 cond-mat.stat-mech 和 math-ph 会有显著更新。建议周一扫描重点关注：非 Markov 随机热力学的实验验证论文、信息几何在机器学习中被刻意误用的辨析、以及几何力学社区对 Q-contact 结构的后续回应（上周 de León 等人的 Noether 定理仍在活跃评论期）。
