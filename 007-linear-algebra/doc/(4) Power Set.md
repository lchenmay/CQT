Original Version: [JCHA.IN](https://jcha.in/t/D9U3tfESI), [Flea Academy](https://fleaacademy.com/m/54864728)

### Set as the Basis

Previously we represent a set by a column:

$$
X = \\{a,b\\} = \\begin{bmatrix}a\\\\b\\end{bmatrix}
$$

The dimension of a column is the cardinality of the corresponding set. (ref. [JCHA.IN](https://jcha.in/t/AXln9UTxr), [Flea Academy Lecture Notes on Linear Algebra (2) Sum and Product of Sets](https://fleaacademy.com/m/54864754))

Let $X$ be a **basis** to generate some mathematical structure. The standard procedure is the free generation using the contravariant Hom functor $h^A$ s.t.

$$
\\begin{align}
h^A: \\textbf{Set} &\\to \\textbf{Set} \\\\
X &\\mapsto h^A X = \\textbf{Set}(X,B) = A^X
\\end{align}
$$

When $A = \\textbf 1$ be a singleton, this procedure is trivial since:

$$
h^A X = A^X = \\textbf 1^X 
$$

and $|\\textbf 1^X | = 1$ without any meaningful information. So we start from a set $A$ with a cardinality greater than $1$:

### Power Set

Consider the contravariant Hom functor $h^\\textbf 2$, where $\\textbf 2 = \\{ 0, 1\\} \\in\\textbf{Set}$ is a binary set. Let $X\\in\\textbf{Set}$. $h^\\textbf 2$ yields the **characteristic functions** over the set $X$. For a subest $A \\subset X$, or as an element of the **power set**  

$$
A \\in PX = \\{ S:\\ S \\subset X \\}
$$

a characteristic function in the hom-set $h^\\textbf 2 X = \\textbf 2^X $ is determined:

$$
\\begin{align}
A: X &\\to \\textbf 2\\\\
x &\\mapsto A(x) = \\begin{cases} 1 &,\\ x \\in A \\\\ 0 &,\\ x \\notin A \\end{cases}
\\end{align}
$$

And vice versa. Hence the set of characteristic functions is isomorphic to the power set:

$$
h^\\textbf 2 X = \\textbf 2^X  \\simeq PX
$$ 

and the have the same cardinality.  Let $X$ with a cardinality $m = |X|$, finite or infinite:

$$
|h^\\textbf 2 X| = |\\textbf 2^X| = |PX| = 2^m 
$$ 

### Column Vector Space

Give the column representation of sets:

$$
X = \\{a,b,c\\} = \\begin{bmatrix}a\\\\b\\\\c\\end{bmatrix}, \\ 
A = \\{a,c\\} = \\begin{bmatrix}a\\\\c\\end{bmatrix}
$$

Since $A \\subset X$, there is a natural injection $A\\hookrightarrow X$. Based on the calculation in the characteristic function, the pointwise predicate in $X$ gives a binary-valued column:

$$
A = \\{a,c\\}
= \\begin{bmatrix}A(a)\\\\ A(b) \\\\ A(c)\\end{bmatrix}
= \\begin{bmatrix}a \\in A\\\\ b\\in A \\\\ c \\in A\\end{bmatrix}
= \\begin{bmatrix}1\\\\ 0 \\\\ 1\\end{bmatrix}
$$

Now we get the binary-valued column representation of a subset $A$ of $X$. The power set is:

$$
\\textbf 2^X = \\{ \\varnothing,\\{a\\},\\{b\\},\\{c\\},\\{a,b\\},\\{b,c\\},\\{c,a\\},X\\}
$$

or alternatively:

$$
\\textbf 2^X =\\left\\{ \\begin{bmatrix}0 \\\\0\\\\0 \\end{bmatrix},\\ \\begin{bmatrix}1 \\\\0 \\\\0\\end{bmatrix},\\ \\begin{bmatrix}0 \\\\1\\\\0 \\end{bmatrix},\\ \\begin{bmatrix}0 \\\\0\\\\1 \\end{bmatrix},\\ \\begin{bmatrix}1 \\\\1\\\\0 \\end{bmatrix},\\ \\begin{bmatrix}0 \\\\1\\\\1 \\end{bmatrix},\\ \\begin{bmatrix}1 \\\\0\\\\1 \\end{bmatrix},\\ \\begin{bmatrix}1 \\\\ 1 \\\\1 \\end{bmatrix} \\right\\} 
$$

The power set $\\textbf 2^X$ enumerates all the possibilities of the binary-valued column vectors:

$$
\\textbf 2^X = \\textbf 2_m = \\left\\{ \\begin{bmatrix}a_1 \\\\ \\vdots \\\\ a_m \\end{bmatrix} \\right\\}
$$

$\\textbf 2_m$ is the $m = |X|$ dimensional column vector space with values in $\\textbf 2$. Also noticed that 

$$
|\\textbf 2_m| = 2^m 
$$

Finally:

$$
h^\\textbf 2 X = \\textbf 2^X  \\simeq PX \\simeq \\textbf 2_m
$$

and

$$
\\dim \\textbf 2_m = \\dim\\textbf 2^X = m = |X|
$$

The column vector representation brings us into the realm of linear algebra.

### Basis

Let $m=|X|$ singletons as the subsets of $\\textbf 2^X$. Let $X = \\{a,b,c\\}$, the singletons has the column vector representations:

$$
e_1 = \\{a\\} = \\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}, \\ 
e_2 = \\{b\\} = \\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}, \\ 
e_3 = \\{c\\} = \\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}
$$

$E = \\{e_i\\}$ is the **computational basis** of $X$, since $\\forall A\\in PX$ can be represented as the binary linear combination of the basis vectors. i.e., $\\exists \\{ \\lambda_i: \\lambda_i \\in \\textbf 2\\}$ s.t.

$A = \\sum_i \\lambda_i e_if$

The binary linear combination is based on the sum (OR) and product (AND) structure of the Boolean algebra of $\\textbf 2$.

### Natural Embedding

An element of a set can be naturally embedded into the power set:

$$
\\begin{align}
X \\hookrightarrow \\textbf 2^X \\\\
x \\mapsto \\{x\\}
\\end{align}
$$

which is a good example of how a basis element embedded into the generated mathematical structure. Using column representation, let $X = \\{a,b,c\\}$, and for $a \\in X$ being a basis vector:

$$
\\{a\\} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix} \\in \\textbf 2_3
$$

it is a column vector that embedded into the column vector space.
