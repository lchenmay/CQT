Original Version: [JCHA.IN](https://jcha.in/t/Zl5iYY3zE), [Flea Academy](https://fleaacademy.com/m/54864752)

Traditionally the introduction of linear spaces expresses the idea of ​​assigning some algebraic structures to the sets. In fact, a linear space is a very complex algebraic structure, and its construction requires the concepts of monoids, Abel groups, rings, fields, and modules. But let&apos;s start from another way of thinking here, namely:

** The Hom functor leverages the intrinsic structure of the field to convert a set into a linear space.**

### Category of Sets

Le $X,Y$ be sets and $f$ be a function:

$$
\\begin{align}
f: X &\\to Y \\\\
x &\\mapsto y = f(x)
\\end{align}
$$

There are two lines. The first line is the mapping from set to set, and the second line is the mapping from element to element. It can also be abbreviated as:

$$
f: X \\to Y :: x \\mapsto y = f(x)
$$

The function $f: X \\to Y$ is an **arrow**(or **morphism**). The collection of all the function arrows constitutes the **category of sets**, denoted $\\textbf{Set}$, which is a huge concept. 

Every function arrow has a couple of the source endpoint and the destination endpoint, i.e., the domain of definition $s(f) = \\text{Dom}\\ f$ and the codomain $t(f) = \\text{Cod} \\ f$, which are sets. The sets, being the endpoints of the function arrows, belong the category of sets $\\textbf{Set}$, as the **objects** or **dots** (distinguished from the concept of **points** or **elements** of a set) of the category. If we suppose $X,Y$ are sets and $f$ is a function, we denote:
$X,Y,f\\in\\textbf{Set}$ 

### Cardinality 

A set $X\\in\\textbf{Set}$ has no algebraic structure. The only information we can obtain is the number of elements in a set, called the **cardinality** of $X$, denoted $|X|$.

$\\varnothing = \\{\\} $ is the **empty set** and $|\\varnothing| = 1$
$\\textbf{1} = \\{ 1 \\}$ is a **singleton** consisting a unique element and $|\\textbf{1} | = 1$
$\\textbf{2} = \\{ 1,2 \\}$ is a **binary set** and $|\\textbf{2} | = 2$

A set consisting finite elements is a **finite set**. The **category of finite sets** is consisted by all the finite sets and functions between them, denoted $\\textbf{FinSet}$, which is a **subcategory** of the category of sets $\\textbf{Set}$.

Next, the infinite sets. Sets like the set of natural numbers $\\mathbb N$ is **countable**. All the countable sets have the same cardinality, denoted $\\aleph_0 = |\\mathbb N|$. In the literature of real analysis, various infinite sets have larger cardinality:

$$
\\aleph _{0}<\\aleph _{1}<\\aleph _{2}<...
$$

The collection of cardinalities forms the **category of cardinalities**, denoted $\\mathcal N$ with $\\leq$ being arrows and cardinalities being dots:

$$
0 \\leq 1 \\leq  2 \\leq 3 \\leq  \\cdots \\leq \\aleph_0 \\leq  \\aleph_1 \\leq \\cdots
$$

Given a couple of sets $X,Y\\in\\textbf{Set}$, the following predicates are equivalent:
1. Exists a bijection from $X \\to Y$ or from $Y\\to X$
2. Isomorphic $X \\simeq Y$
3. Equal cardinality $|X| = |Y|$
Thus, the cardinality is a description of the equivalent class of sets with equal cardinality:

$$
\\mathcal N = \\textbf{Set}/\\sim 
$$

### Partially Ordered Sets

$|\\cdot|$ is a map from the category of sets $\\textbf{Set}$ to the category of cardinalities:

$$
\\mathcal N = \\{ 0 \\leq 1 \\leq  2 \\leq 3 \\leq  \\cdots \\leq \\aleph_0 \\leq  \\aleph_1 \\leq \\cdots \\}
$$

A map from a set to a set is a function, while a map from a category to a category is a **functor**:

$$
\\begin{align}
|\\cdot|: \\textbf{Set} &\\to \\mathcal N \\\\
X &\\mapsto |X| \\\\
Y &\\mapsto |Y| \\\\
\\end{align}
$$

We call it the **cardinality functor**.

$(\\mathcal N,\\leq)$ is equipped with a partial order to compare the cardinalities, thus $(\\mathcal N,\\leq)$ is a **partial ordered set**. In fact every partially ordered set is a category, so we will not be confused whether $\\mathcal N$ is a category or a set.

As for the category of sets $\\textbf{Set}$, we can make it possible to compare two sets $\\forall X,Y\\in\\textbf{Set}$. If $\\exists \\iota: X \\to Y$ an **injection**, then there is a partial order from $X$ to $Y$, denoted：

$$
X \\hookrightarrow Y
$$

This is the **inclusion** from $X$ to $Y$ via the injection $\\iota$. The existence of injection $\\iota$ is equivalent to
$|X| \\leq |Y|$

Now we can conclude that the cardinality functor $|\\cdot|$ preserves the partial order structure:

$$
\\begin{align}
(\\textbf{Set},\\hookrightarrow) &\\stackrel{|\\cdot|}{\\longrightarrow}(\\mathcal N,\\leq)  \\\\
X &\\mapsto |X| \\\\
Y &\\mapsto |Y| \\\\
(X \\hookrightarrow) &\\mapsto (|X| \\leq |Y|)
\\end{align}
$$

There are four lines. The first line is the mapping from category to category, the 2nd and the 3rd lines are the mapping from dot to dot, and the last line is the mapping from arrow to arrow.
