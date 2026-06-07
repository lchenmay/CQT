Original Version: [JCHA.IN](https://jcha.in/t/lUzFZhoTQ), [Flea Academy](https://fleaacademy.com/m/54864740)

### Power Set

Let $X,Y\\in\\textbf{Set}$ and $m = |X|,\\ n = |Y|$. Let $A \\in \\textbf 2^X$ and $B \\in \\textbf 2^Y$ are subsets, representing as binary-valued column vectors:

$$
A = \\begin{bmatrix} a_1 \\\\ \\vdots \\\\ a_m \\end{bmatrix} \\in \\textbf 2_m =  \\textbf 2^X,\\ 
B = \\begin{bmatrix} b_1 \\\\ \\vdots \\\\ b_n \\end{bmatrix} \\in \\textbf 2_n =  \\textbf 2^Y
$$
 
Recall that we have discussed the disjoint union of two sets using the concatenating of columns. (ref. [JCHA.IN](https://jcha.in/t/AXln9UTxr), [Flea Academy Lecture Notes on Linear Algebra (2) Sum and Product of Sets](https://fleaacademy.com/m/54864754)):

$$
A + B = \\begin{bmatrix}a_1 \\\\ \\vdots \\\\ a_m\\end{bmatrix} \\oplus \\begin{bmatrix}b_1 \\\\ \\vdots \\\\ b_n\\end{bmatrix} 
= \\begin{bmatrix}a_1\\\\ \\vdots \\\\a_m \\\\ b_1 \\\\ \\vdots \\\\b_n\\end{bmatrix}
$$

It is equivalent to say $A + B \\subset X + Y$ or $A + B \\in \\textbf 2^{X + Y}$. This 
$(m+n)$ dimensional column vector belongs to $\\textbf 2_{m+n}$ and obviously:

$$
\\textbf 2^{X + Y} = \\textbf 2_{m+n}
$$ 

The sum or disjoint union of sets $X + Y$ produces the **direct sum** of the power sets as well as the representing column vector spaces s.t.

$$
\\textbf 2^X \\oplus \\textbf 2^Y = \\textbf 2^{X + Y},\\ \\textbf 2_m \\oplus \\textbf 2_n = \\textbf 2_{m+n}  
$$

Let $\\textbf 2_\\textbf{Col}$ denote the category of various dimensions of $\\textbf 2$-valued column vector spaces. Equipped with $\\oplus$ this category is a commutative (in the sense of isomorphism) additive system. 

$$
\\begin{align}
h^\\textbf 2 : (\\textbf{Set},+) &\\to (\\textbf 2_\\textbf{Col},\\oplus) \\\\
X &\\mapsto h^\\textbf 2 X = \\textbf 2^X = \\textbf 2_m \\\\ 
Y &\\mapsto h^\\textbf 2 Y = \\textbf 2^Y = \\textbf 2_n \\\\ 
X + Y &\\mapsto h^\\textbf 2 (X + Y) = \\textbf 2^{X+Y} = \\textbf 2^X \\oplus \\textbf 2^Y = \\textbf 2_m \\oplus \\textbf 2_n = \\textbf 2_{m+n} \\\\ 
\\end{align}
$$

### Free Abelian Group

Similiarily let $\\mathbb Z_\\textbf{Col}$ denote the category of various dimensions of $\\mathbb Z$-valued column vector spaces. Equipped with $\\oplus$ this category is a commutative (in the sense of isomorphism) additive system. 

$$
\\begin{align}
h^\\mathbb Z : (\\textbf{Set},+) &\\to (\\mathbb Z_\\textbf{Col},\\oplus) \\\\ 
X &\\mapsto h^\\mathbb Z X = \\mathbb Z^X = \\mathbb Z_m \\\\ 
Y &\\mapsto h^\\mathbb Z Y = \\mathbb Z^Y = \\mathbb Z_n \\\\ 
X + Y &\\mapsto h^\\mathbb Z (X + Y) = \\mathbb Z^{X+Y} = \\mathbb Z^X \\oplus \\mathbb Z^Y = \\mathbb Z_m \\oplus \\mathbb Z_n = \\mathbb Z_{m+n} \\\\ 
\\end{align}
$$

### Free Linear Space

For a field, say $\\mathbb C_\\textbf{Col}$ denote the category of various dimensions of $\\mathbb C$-valued column vector spaces. Equipped with $\\oplus$ this category is a commutative (in the sense of isomorphism) additive system. 

$$
\\begin{align}
h^\\mathbb C : (\\textbf{Set},+) &\\to (\\mathbb C_\\textbf{Col},\\oplus) \\\\
X &\\mapsto h^\\mathbb C X = \\mathbb C^X = \\mathbb C_m \\\\ 
Y &\\mapsto h^\\mathbb C Y = \\mathbb C^Y = \\mathbb C_n \\\\ 
X + Y &\\mapsto h^\\mathbb C (X + Y) = \\mathbb C^{X+Y} = \\mathbb C^X \\oplus \\mathbb C^Y = \\mathbb C_m \\oplus \\mathbb C_n = \\mathbb C_{m+n} \\\\ 
\\end{align}
$$

Takeaway:
**Free functor preserves direct sum.**
