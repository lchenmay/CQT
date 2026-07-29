# 生成 C05 文章配图：有向完全二分图（右输入 Y^j → 左输出 X_i，每条边带箭头+上下标权重）
# 约定：上标 j = 右边输入 Y，下标 i = 左边输出 X；矩阵元 A^j_i（上标=输入列，下标=输出行）
# 用法: python gen-fig1-bipartite.py
import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['Microsoft YaHei', 'SimHei', 'Noto Sans CJK SC', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False

n, m = 3, 2  # 右 3 个输入(Y, 上标)，左 2 个输出(X, 下标)
# 高亮若干边（其余仍全部显示）
highlight = {(0, 0), (1, 1), (2, 0)}  # (j=右输入, i=左输出)

here = os.path.dirname(os.path.abspath(__file__))
out_path = os.path.join(here, 'fig1-bipartite.png')

fig = plt.figure(figsize=(11, 5.4), dpi=150)
gs = fig.add_gridspec(1, 2, width_ratios=[1.4, 1.0], wspace=0.30)

# ---------------- 左：有向完全二分图（右 Y^j → 左 X_i） ----------------
ax = fig.add_subplot(gs[0])
ax.set_xlim(-1.1, 5.2)
ax.set_ylim(-0.6, 2.6)
ax.axis('off')

left_x, right_x = 0.4, 4.2
ys_left = np.linspace(2.0, 0.0, m)
ys_right = np.linspace(2.0, 0.0, n)
left_pos = [(left_x, y) for y in ys_left]      # 输出 X（左，下标）
right_pos = [(right_x, y) for y in ys_right]   # 输入 Y（右，上标）

# 完全图：每一条边（右 Y^j → 左 X_i）都画箭头并显示权重 A^j_i
for j in range(n):
    for i in range(m):
        is_hl = (j, i) in highlight
        color = '#c0392b' if is_hl else '#7f8c8d'
        alpha = 0.95 if is_hl else 0.6
        lw = 2.2 if is_hl else 1.1
        ax.annotate('', xy=left_pos[i], xytext=right_pos[j],
                    arrowprops=dict(arrowstyle='-|>', color=color, lw=lw,
                                    alpha=alpha, shrinkA=9, shrinkB=11),
                    zorder=2 if is_hl else 1)
        mx = (right_pos[j][0] + left_pos[i][0]) / 2
        my = (right_pos[j][1] + left_pos[i][1]) / 2
        lab = fr'$A^{{{j+1}}}_{{{i+1}}}$'
        ax.text(mx, my + 0.06, lab, color=color,
                fontsize=12 if is_hl else 10,
                fontweight='bold' if is_hl else 'normal',
                ha='center', va='center',
                bbox=dict(boxstyle='round,pad=0.16', fc='white', ec='none'),
                zorder=3)

# 节点：左=输出 X（下标），右=输入 Y（上标）
for i, (x, y) in enumerate(left_pos):
    ax.scatter([x], [y], s=340, color='#2c3e50', zorder=4)
    ax.text(x - 0.30, y, fr'$X_{{{i+1}}}$', color='white', fontsize=12,
            ha='center', va='center', zorder=5)
for j, (x, y) in enumerate(right_pos):
    ax.scatter([x], [y], s=340, color='#2980b9', zorder=4)
    ax.text(x + 0.34, y, fr'$Y^{{{j+1}}}$', color='white', fontsize=12,
            ha='center', va='center', zorder=5)

ax.set_title('有向完全二分图（右输入 $Y^j$ → 左输出 $X_i$）', fontsize=15, pad=12)

# ---------------- 右：权重矩阵（上标=输入列，下标=输出行） ----------------
ax2 = fig.add_subplot(gs[1])
ax2.axis('off')

# 矩阵 A 为 m×n：行=输出 X_i（下标），列=输入 Y^j（上标）；元 A^j_i
cell_text = [[fr'$A^{{{j+1}}}_{{{i+1}}}$' for j in range(n)] for i in range(m)]
col_labels = [fr'$Y^{{{j+1}}}$' for j in range(n)]
row_labels = [fr'$X_{{{i+1}}}$' for i in range(m)]

tbl = ax2.table(cellText=cell_text, colLabels=col_labels, rowLabels=row_labels,
                loc='center', cellLoc='center')
tbl.auto_set_font_size(False)
tbl.set_fontsize(14)
tbl.scale(1.0, 1.7)

for (j, i) in highlight:
    cell = tbl[(i + 1, j)]
    cell.set_facecolor('#f9d6d5')
    cell.set_text_props(fontweight='bold', color='#c0392b')

ax2.set_title('权重矩阵 $A$（上标=输入列，下标=输出行）', fontsize=15, pad=12)

# 中部连接说明
fig.text(0.5, 0.02,
         '箭头方向 = 关系方向：从右部输入 $Y^j$ 指向左部输出 $X_i$；矩阵元 $A^j_i$（上标=输入，下标=输出）',
         ha='center', fontsize=12, color='#444')

fig.savefig(out_path, dpi=150, bbox_inches='tight', facecolor='white')
print('saved:', out_path)
