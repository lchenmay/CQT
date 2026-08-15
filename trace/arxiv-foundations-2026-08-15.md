# CQT arXiv 基础与物理哲学追踪 — 2026-08-15（北京运行日）

> **实际抓取批次**：arXiv **Friday, 14 August 2026** 批次（新批次，与上次运行的 Thu 13 Aug 不同 → 正常处理）
> **抓取分类**：math-ph, gr-qc, hep-th, quant-ph
> **分页处理**：quant-ph 新投稿 55 篇 + 交叉列表 17 篇 = 72 条，已用 `?skip=55&show=50` 取回尾段，无截断

---

## 一、各分类计数

| 分类 | 新投稿 (new) | 交叉列表 (cross) | 合计 |
|---|---:|---:|---:|
| math-ph | 12 | 22 | 34 |
| gr-qc | 28 | 14 | 42 |
| hep-th | 33 | 15 | 48 |
| quant-ph | 55 | 17 | 72 |
| **总计（含重复计数）** | **128** | **68** | **196** |

注：交叉列表条目在多个分类下重复出现，去重后独立论文数约 150 篇量级。

---

## 二、量子基础与解释（Quantum Foundations & Interpretation）子区块

本批次从 196 条中筛出与量子基础/诠释直接相关者 **9 篇**，其中 **6 篇** 判定为强命中并入库。

### 强命中（已入 Foundations/arXiv 收藏 + bookmark.md）

1. **2608.13402 — Categorical symmetries and generalized charges from operator algebras**（hep-th/math-ph/quant-ph）
   从局域算子代数网与 DHR 理论重构范畴对称性与广义荷。→ **§003 + §004 双重命中**

2. **2608.12512 — Modular theory and emergent geometry in subalgebra inclusions**（hep-th/math-ph）
   Tomita-Takesaki 模理论 × 子代数包含 → 涌现几何。→ **§004 强命中**

3. **2608.13278 — Spectral triples and finite-dimensional approximations of noncommutative spaces**（math-ph/math.OA）
   谱三元组的有限维逼近与收敛。→ **§004 强命中**

4. **2608.13035 — Sheaf-theoretic contextuality and the logic of quantum measurement scenarios**（quant-ph/math.CT）
   层论刻画情境性障碍（Abramsky-Brandenburger 纲领）。→ **§003 强命中 + 量子基础（contextuality）**

5. **2608.13088 — Operational derivation of quantum theory from information-theoretic axioms**（quant-ph）
   GPT 公理化重构 → Jordan/C*-代数表示定理。→ **§004 强命中 + 量子基础（reconstruction）**

6. **2608.13551 — Relational quantum mechanics and the algebra of local observers**（quant-ph/gr-qc）
   RQM 观察者相对事实 → 局域观察者代数与交叉积。→ **§004 命中 + 量子基础（relational）**

### 弱命中 / 观察名单（未入库）

7. **2608.12519 — Flux control of measurement back-action and Leggett-Garg correlations in chiral quantum walks**（quant-ph）
   规范不变通量调控连续测量反作用，构造性达到 Lüders 界 3/2。属量子基础（宏观实在论/Leggett-Garg）但工具是图上量子行走谱测度，与 §003/§004 结构主线仅弱相关。

8. **2608.13561 — Experimental Quantum Key Distribution in an Indefinite Causal Order**（quant-ph）
   量子 SWITCH 中的 BB84 类协议实验。不定因果序（ICO）是量子基础议题（过程矩阵/因果结构），但本文是实验与协议向，非结构基础。

9. **2608.12785 — A Minimum-Cardinality Genuinely Unextendible Product Basis in Three Qutrits**（quant-ph）
   三 qutrit GUPB 最小基数 = 14，附带绑定纠缠与无纠缠强非局域性。属纠缠结构基础，与 §004 的态空间几何弱相关。

另注：**2608.12427 — Is the Aharonov-Casher phase geometrical or dynamical?**（cond-mat.mes-hall/quant-ph）区分几何相与动力学相，几何相位是纤维丛/几何量子力学近邻，但主体为 Rashba SOI 具体模型，本次不入库。

---

## 三、映射到 CQT 章节

### §003-type-topos（类型论与拓扑斯）
- **2608.13035**（层论情境性）：spectral presheaf topos 的直系工作，层的整体截面存在性 ↔ 非情境隐变量赋值，是 §003 中「量子逻辑的 topos 内在语义」最直接的当期文献。
- **2608.13402**（范畴对称性）：fusion category 对称性从算子代数导出，为 §003 的「范畴结构不是外加语言而是从算子代数涌现」提供论证素材。

### §004-Gelfand（Gelfand 对偶与非交换几何）
- **2608.12512**（模理论 × 子代数包含）：模流作为「代数 → 几何」的生成器，是 Gelfand 对偶在非交换侧的动力学化，本批次最强命中。
- **2608.13278**（谱三元组有限维逼近）：Connes 谱三元组的可计算化，直接服务 §004 关于「谱数据完全决定几何」的展开。
- **2608.13088**（GPT 公理化重构）：从操作公理落到 Jordan/C*-代数表示，是 §004「为什么必须是 C*-代数」这一问的当期回答。
- **2608.13551**（RQM 观察者代数）：交叉积构造把「观察者」编码为代数运算，与 §004 的 crossed product / type II 代数线相接。

### 跨章连线（延续既有脉络）
- 算子代数 × 范畴：2608.13402 ← 2608.12157（08-14，任意子凝聚张量范畴 × 算子代数）
- 情境性：2608.13035 ← 2608.12021（08-14，n-qubit Pauli 群情境性）
- 谱几何：2608.13278 ← 2608.11721（08-14，谱算子微积分）
- 关联诠释：2608.13551 ← 2608.10334（08-13，Schwarzschild 时空关联诠释检验）

---

## 四、本次入库记录

- **Foundations/arXiv 收藏**：新增 6 篇（2608.13402, 2608.12512, 2608.13278, 2608.13035, 2608.13088, 2608.13551）
- **bookmark.md**：已在 `## 2026-08-15` 节追加上述 6 条，按 arXiv ID 去重（与既有 2608.* 46 处引用无重叠）

---

## 五、下次检索建议

arXiv 周末（Sat/Sun）不推送新批次。今日（周六）抓到的 Fri 14 Aug 批次是本周最后一批。

- **首选：周二 08:00+（北京）** — 届时应有 Mon 17 Aug 批次
- **备选：若仍为旧批次，周三 04:30（北京）** 复查

（周一 08:00 北京对应 Sun 20:00 ET，arXiv 周日不发；故跳过周一，从周二起检索。）
