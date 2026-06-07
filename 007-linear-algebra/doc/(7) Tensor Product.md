Original Version: [JCHA.IN](https://jcha.in/t/VxHZVovQn), [Flea Academy](https://fleaacademy.com/m/54864734)

### Power Set

Let $X,Y\\in\\textbf{Set}$ and $m = |X|,\\ n = |Y|$. Let $A \\in \\textbf 2^X$ and $B \\in \\textbf 2^Y$ are subsets, representing as binary-valued column vectors:

$$
A = \\begin{bmatrix} a_1 \\\\ \\vdots \\\\ a_m \\end{bmatrix} \\in \\textbf 2_m =  \\textbf 2^X,\\ 
B = \\begin{bmatrix} b_1 \\\\ \\vdots \\\\ b_n \\end{bmatrix} \\in \\textbf 2_n =  \\textbf 2^Y
$$
 
Recall that we have discussed the cartesian product of two sets using the Kronecker product. (ref. [JCHA.IN](https://jcha.in/t/AXln9UTxr), [Flea Academy Lecture Notes on Linear Algebra (2) Sum and Product of Sets](https://fleaacademy.com/m/54864754)):

$$
A \\times B = \\begin{bmatrix}a_1 \\\\ \\vdots \\\\ a_m\\end{bmatrix} \\otimes \\begin{bmatrix}b_1 \\\\ \\vdots \\\\ b_n\\end{bmatrix} 
= \\begin{bmatrix}a_1 b_1 \\\\ a_1 b_2 \\\\ \\vdots \\\\ a_2 b_1 \\\\ a_2 b_2 \\\\ \\vdots \\\\a_m  b_n  \\end{bmatrix}
$$

It is equivalent to say $A \\times B \\subset X \\times Y$ or $A \\times B \\in \\textbf 2^{X \\times Y}$. This 
$(mn)$ dimensional column vector belongs to $\\textbf 2_{mn}$ and obviously:

$$
\\textbf 2^{X \\times Y} = \\textbf 2_{mn}
$$ 

The product of sets $X + Y$ produces the **tensor product** of the power sets as well as the representing column vector spaces s.t.

$$
\\textbf 2^X \\otimes \\textbf 2^Y = \\textbf 2^{X \\times Y},\\ \\textbf 2_m \\otimes \\textbf 2_n = \\textbf 2_{mn}  
$$

Let $\\textbf 2_\\textbf{Col}$ denote the category of various dimensions of $\\textbf 2$-valued column vector spaces. Equipped with $\\otimes$ this category is a commutative (in the sense of isomorphism) multiplicative system. 

$$
\\begin{align}
h^\\textbf 2 : (\\textbf{Set},\\times) &\\to (\\textbf 2_\\textbf{Col},\\otimes) \\\\
X &\\mapsto h^\\textbf 2 X = \\textbf 2^X = \\textbf 2_m \\\\  
Y &\\mapsto h^\\textbf 2 Y = \\textbf 2^Y = \\textbf 2_n \\\\ 
X + Y &\\mapsto h^\\textbf 2 (X \\times Y) = \\textbf 2^{X \\times Y} = \\textbf 2^X \\otimes\\textbf 2^Y = \\textbf 2_m \\otimes\\textbf 2_n = \\textbf 2_{m+n} \\\\ 
\\end{align}
$$
 
### Free Abelian Group

Similiarily let $\\mathbb Z_\\textbf{Col}$ denote the category of various dimensions of $\\mathbb Z$-valued column vector spaces. Equipped with $\\otimes$ this category is a commutative (in the sense of isomorphism) multiplicative system. 

$$
\\begin{align}
h^\\mathbb Z : (\\textbf{Set},\\times ) &\\to (\\mathbb Z_\\textbf{Col},\\otimes) \\\\ 
X &\\mapsto h^\\mathbb Z X = \\mathbb Z^X = \\mathbb Z_m \\\\ 
Y &\\mapsto h^\\mathbb Z Y = \\mathbb Z^Y = \\mathbb Z_n \\\\  
X + Y &\\mapsto h^\\mathbb Z (X \\times Y) = \\mathbb Z^{X \\times Y} = \\mathbb Z^X \\otimes\\mathbb Z^Y = \\mathbb Z_m \\otimes\\mathbb Z_n = \\mathbb Z_{m+n} \\\\ 
\\end{align}
$$

### Free Linear Space

For a field, say $\\mathbb C_\\textbf{Col}$ denote the category of various dimensions of $\\mathbb C$-valued column vector spaces. Equipped with $\\otimes$ this category is a commutative (in the sense of isomorphism) multiplicative system. 

$$
\\begin{align}
h^\\mathbb C : (\\textbf{Set},\\times) &\\to (\\mathbb C_\\textbf{Col},\\otimes) \\\\
X &\\mapsto h^\\mathbb C X = \\mathbb C^X = \\mathbb C_m \\\\ 
Y &\\mapsto h^\\mathbb C Y = \\mathbb C^Y = \\mathbb C_n \\\\ 
X + Y &\\mapsto h^\\mathbb C (X \\times Y) = \\mathbb C^{X \\times Y} = \\mathbb C^X \\otimes \\mathbb C^Y = \\mathbb C_m \\otimes \\mathbb C_n = \\mathbb C_{m+n} \\\\ 
\\end{align}
$$

Takeaway:
**Free functor preserves tensor product.**
