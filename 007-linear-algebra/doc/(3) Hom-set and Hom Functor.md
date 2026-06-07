Original Version: [JCHA.IN](https://jcha.in/t/5lndSe6XM), [Flea Academy](https://fleaacademy.com/m/54864700)

### Hom-set

Let $C$ be a category, for example, $C = \\textbf{Set}$ the category of sets. A category is consisted by a collection of arrows. Each arrow has a couple of endpoints. If we fix the endpoints, say, $X$ as the source endpoint and $Y$ as the destination point, we get a restricted collection of arrows:

$$
\\text{Hom}(X,Y) = C(X,Y)
$$

Called **hom-set**, which is the abbreviation of homomorphism set. In many categories, the arrows are homomorphisms, so hom-set has a similar meaning of set of arrows, fixing the endpoints.
In $C = \\textbf{Set}$ the category of sets, it is the collection of all the $X \\to Y$ functions, denoted:

$$
Y^X = \\textbf{Set}(X,Y) = \\text{Hom}(X,Y) = \\{f: X \\to Y \\} \\in\\textbf{Set}
$$

It is also a set, thus an dot of the category of sets. It is a little bit weird that the hom-set is denoted $Y^X$. At the beginning it is not easy to link between the set of function to an exponential. To understand this, we still need the help of the concept of cardinality.

### Singleton

Given a set $Y = \\{a,c,e\\}$ and a singleton $\\textbf{1} = \\{ 1 \\}$, consider all functions in the following form:

$$
\\begin{align}
f: \\textbf 1 &\\to Y \\\\
1 &\\mapsto f(1) \\\\
\\end{align}
$$

There are 3 such functions:

$$
\\textbf Y^\\textbf 1 = \\{ f: \\textbf 1 \\to Y\\}
= \\{ f_a,f_b,f_c:\\  f_a(1) = a,f_b(1) = b, f_c(1) = c \\}
$$

it is interesting that:

$$
|Y^\\textbf 1| = |\\textbf{Set}(\\textbf 1,Y)| = |\\{f: \\textbf 1 \\to Y \\}|= |Y|
$$

In the sense of isomorphism:
$$
Y^\\textbf 1 = Y
$$

Takeaway:
** Every set can be represented by a set of functions from a singleton to this set.**

So the entire set theory can be introduced over the arrows rather than points/elements.

### Exponential

A binary set can be expressed as a sum:

$$
\\textbf 2$ = \\{1,2\\} = \\textbf 1 + \\textbf 1 
$$

Notice that:

$$
|Y^\\textbf 2| = |Y^{ \\textbf 1 + \\textbf 1 } | = |Y^\\textbf 1| \\times |Y^\\textbf 1|
$$

and for any set $X$, let $|X| = m$:

$$
|Y^X| = |Y^{ \\textbf 1 \\underbrace{+ \\cdots +}_{m} \\textbf 1 } | = |Y^\\textbf 1| \\underbrace{ \\times \\cdots \\times }_{m} |Y^\\textbf 1| = |Y|^{|X|}
$$

Using the functor formula:

$$
\\begin{align}
\\textbf{Set} &\\stackrel{|\\cdot|}{\\longrightarrow} \\mathcal N \\\\
X &\\mapsto |X| \\\\
Y &\\mapsto |Y| \\\\
Y^X &\\mapsto |Y^X| = |Y| \\times |X| \\\\
\\textbf 1^X &\\mapsto |\\textbf 1^X| = 1 \\\\
Y^\\textbf 1 &\\mapsto |Y^\\textbf 1| = |Y| \\\\
\\end{align}
$$

We obtain the numeric exponential operation from the set of functions $Y^X$. In another word, $Y^X$ being a set itself, is the **exponential of sets**.

### Hom Functors

We need a couple of fixed endpoints to get a hom-set of a category. Still using $C = \\textbf{Set}$ for example:

$$
Y^X = \\textbf{Set}(X,Y) = \\text{Hom}(X,Y)
$$

This is similar to a binary variate function:

$$
\\begin{align}
f: A \\times B &\\to C \\\\
(a,b) &\\mapsto f(a,b)
\\end{align}
$$

Fixing one variable we have:

$$
\\begin{align}
f(a,-): B &\\to C \\\\
b &\\mapsto (a,b)
\\end{align}\\ \\ \\ \\ \\ \\ \\ 
\\begin{align} 
f(-,b): A &\\to C \\\\
a &\\mapsto f(a,b)
\\end{align}
$$

With similar operation, we have a couple of functor:

$$
h_A = \\textbf{Set}(A,-),\\ h^B = \\textbf{Set}(-,B) 
$$

s.t.

$$
\\begin{align}
h_A: \\textbf{Set} &\\to \\textbf{Set} \\\\
X &\\mapsto h_A X = \\textbf{Set}(A,X) = X^A
\\end{align}
$$
 
$$
\\begin{align}
h^B: \\textbf{Set} &\\to \\textbf{Set} \\\\
X &\\mapsto h^B X = \\textbf{Set}(X,B) = B^X
\\end{align}
$$

$h_A$ is called the **covariant Hom functor** and $h^B$ is called the **contravariant Hom functor**.

The properties of a singleton can be described using the covariant Hom functor:

$$
h_{\\textbf 1} X = \\textbf{Set}(\\textbf 1,X) = X^{\\textbf 1} \\simeq X
$$

And the contravariant Hom functor will be much more interest in the remainder of this lecture note.
