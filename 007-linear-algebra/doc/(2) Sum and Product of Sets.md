Original Version: [JCHA.IN](https://jcha.in/t/AXln9UTxr), [Flea Academy](https://fleaacademy.com/m/54864754)

Now we can obtain the binary operation of numbers from the binary operation of sets.

### Column

Let  
$X = \\{a,b\\},\\ Y = \\{a,c,e\\}, \\textbf 1 = \\{ 1 \\}$
The sets, as well as the empty set can be represented in columns:

$$
X = \\begin{bmatrix}a\\\\b\\end{bmatrix},\\ 
Y = \\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix},\\ 
\\varnothing = [],\\ \\textbf 1 = \\begin{bmatrix} 1 \\end{bmatrix}
$$

The dimension of a column is the cardinality of the corresponding set.

### Disjoint Union

By concatenating the columns a new column is formed:

$$
X + Y = \\begin{bmatrix}a\\\\b\\end{bmatrix} \\oplus \\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix}
= \\begin{bmatrix}(X,a)\\\\(X,b)\\\\(Y,a)\\\\(Y,c)\\\\(Y,e)\\end{bmatrix}
$$

The symbol $\\oplus$ of **direct sum** is applied here. We will explain later that this concatenation is the direct sum in the category of sets. Also notice that $a$ appears twice. To distinguish the appearance in either the different sets, we used the $(X,a)$ and $(X,b)$. The concatenation of columns gives a new set:

$$
X + Y = \\{(X,a),(X,b),(Y,a),(Y,c),(Y,e)\\}
$$

which is **disjoint union** of $X$ and $Y$. Also:

$$
Y + X = \\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix} \\oplus \\begin{bmatrix}a\\\\b\\end{bmatrix} 
= \\begin{bmatrix}(Y,a)\\\\(Y,c)\\\\(Y,e)\\\\(X,a)\\\\(X,b)\\end{bmatrix}
$$

obviously $X + Y \\simeq Y + X$ and in the words of category theory, the sets are equal in the sense of isomorphism:

$$
X + Y = Y + X
$$

Thus $(\\textbf{Set},+)$ is a **commutative** additive system.It has a unit $\\varnothing$ s.t.:

$$
X + \\varnothing  = \\varnothing + X = X
$$

Now $(\\textbf{Set},+,\\varnothing)$ is a commutative **monoid**. Applying the cardinality functor:

$$
\\begin{align}
\\textbf{Set} &\\stackrel{|\\cdot|}{\\longrightarrow} \\mathcal N \\\\
X &\\mapsto |X| \\\\
Y &\\mapsto |Y| \\\\
X + Y &\\mapsto |X + Y| = |X| + |Y| \\\\
X + \\varnothing &\\mapsto |X + \\varnothing| = |X| \\\\
\\end{align}
$$

We obtain a commutative monoid $(\\mathcal N,+,0)$ for numeric operations.

### Cartesian Product

Let every element of $X$ to be associated with every element of $Y$:

$$
(a,Y) = \\begin{bmatrix}(a,a)\\\\(a,c)\\\\(a,e)\\end{bmatrix},\\
(b,Y) = \\begin{bmatrix}(b,a)\\\\(b,c)\\\\(b,e)\\end{bmatrix},\\
$$

Then we have the **Kronecker product** of the columns:

$$
X \\times Y = \\begin{bmatrix}a\\\\b\\end{bmatrix} \\otimes \\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix}
= \\begin{bmatrix}(a,a)\\\\(a,c)\\\\(a,e)\\\\(b,a)\\\\(b,c)\\\\(b,e)\\end{bmatrix}
$$

The symbol $\\otimes$ of **tensor product** is applied here. We will explain later that this essentially the tensor product in the category of sets. The Kronecker product of columns gives a new set:

$$
X \\times Y = \\{ (a,a)(a,c),(a,e),(b,a),(b,c),(b,e) \\}
$$

which is the **cartesian product** of $X$ and $Y$. Also:

$$
Y \\times X = \\{ (a,a),(a,b),(c,a),(c,b)(e,a), (e,b) \\} 
$$

obviously $X \\times Y \\simeq Y \\times X$ and in the words of category theory, the sets are equal in the sense of isomorphism:

$$
X \\times Y = Y \\times X 
$$

Thus $(\\textbf{Set},\\times)$ is a **commutative** additive system. Any singleton serves as the unit, for example $\\textbf 1 = \\{ 1 \\}$, s.t.:

$$
X \\times \\textbf 1 = \\{ (a,1),(b,1) \\},\\ \\textbf 1 \\times X  = \\{ (1,a),(1,b) \\}
$$

Obviously they are equal in the sense of isomorphism:

$$
X \\times \\textbf 1 = X  = \\textbf 1 \\times X
$$

Now $(\\textbf{Set},\\times,\\textbf 1)$ is a commutative **monoid**. Applying the cardinality functor:

$$
\\begin{align}
\\textbf{Set} &\\stackrel{|\\cdot|}{\\longrightarrow} \\mathcal N \\\\
X &\\mapsto |X| \\\\
Y &\\mapsto |Y| \\\\
X \\times Y &\\mapsto |X \\times Y| = |X| \\times |Y| \\\\
X \\times \\textbf 1 &\\mapsto |X \\times \\textbf 1| = |X| \\\\
\\end{align}
$$

We obtain a commutative monoid $(\\mathcal N,\\times,1)$ for numeric operations.

### Commutative Semiring

Now consider

$$
X = \\begin{bmatrix}a\\\\b\\end{bmatrix},\\ 
Y = \\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix},\\ 
Z = \\begin{bmatrix}p\\\\q\\end{bmatrix}
$$

We have:

$$
X \\times Z = \\begin{bmatrix}a\\\\b\\end{bmatrix} \\otimes \\begin{bmatrix}p\\\\q\\end{bmatrix} =
\\begin{bmatrix}(a,p)\\\\(a,q)\\\\(b,p)\\\\(b,q)\\end{bmatrix},\\ 
Y \\times Z = \\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix} \\otimes \\begin{bmatrix}p\\\\q\\end{bmatrix} =
\\begin{bmatrix}(a,p)\\\\(a,q)\\\\(c,p)\\\\(c,q)\\\\(e,p)\\\\(e,q)\\end{bmatrix},\\
$$

also notice that:

$$
(X+Y) \\times Z = 
\\left(\\begin{bmatrix}a\\\\b\\end{bmatrix} \\oplus 
\\begin{bmatrix}a\\\\c\\\\e\\end{bmatrix} \\right) \\otimes 
\\begin{bmatrix}p\\\\q\\end{bmatrix}
= \\begin{bmatrix}(X,a)\\\\(X,b)\\\\(Y,a)\\\\(Y,c)\\\\(Y,e)\\end{bmatrix}
 \\otimes 
\\begin{bmatrix}p\\\\q\\end{bmatrix}
= \\begin{bmatrix}
((X,a),p)\\\\((X,a),q)\\\\
((X,b),p)\\\\((X,b),q)\\\\
((Y,a),p)\\\\((Y,a),q)\\\\
((Y,c),p)\\\\((Y,c),q)\\\\
((Y,e),p)\\\\((Y,e),q)
\\end{bmatrix}
$$

Obviously,  in the sense of isomorphism:

$$
X \\times Z + Y \\times Z = (X+Y) \\times Z
$$

This is the **law of distribution**. With this property, the category of sets $(\\textbf{Set},+,\\varnothing,\\times,\\textbf 1)$, equipped with sum and product, forms a **commutative semiring**.
