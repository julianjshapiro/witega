{ "subject": "Number Theory", "lesson": "1.1", "title": "Intro to Sets", "author": "Julian J. Shapiro", "video_url": "https://www.youtube.com/embed/jNQXAC9IVRw", "sources": ["https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols#Set_and.2For_logic_notation", "*Introduction to the Theory of Numbers*, by G.H Hardy and E. M. Wright, Chapter 1"] }
# Intro to Sets
### Notation and Syntax
Sets are just groups of distinct numbers.  Some basic syntax:
$$C = \{x,y,\ldots,z,\ldots\}$$
*Set C is x, y, the values between y and z, and the values after z.  When an ellipsis is present, you have to follow the pattern.  For instance: $\{1,2,...,6\}$ refers to the set $\{1,2,3,4,5,6\}$.
*Typically, the pattern will be every integer.

Subsets are sets that are only made out of the elements of a larger set, called a superset.  If the subset is not equal to the superset, then it is considered proper, and vice versa.

Some symbols: 
* $a\in b$, element $a$ is in set $b$.
* $a\ni b$, element $b$ is in set $a$.
* $a\cup b$, the union of the sets $a$ and $b$.  ($\{1,2,3\}\cup\{2,3,4\}=\{1,2,3,4\}$)
* $a\cap b$, the intersection of the sets $a$ and $b$. ($\{1,2,3\}\cap\{2,3,4\}=\{2,3\}$)
* $a\setminus b$, the difference of the sets $a$ and $b$. ($\{1,2,3\}\setminus\{2,3,4\}=\{1\}$)
* $a\subset b$, set $a$ is a proper subset of set $b$. ($\{1,3,5\}\subset\{1,2,3,4,5\}$)
* $a\supset b$, set $a$ is a proper superset of set $b$. ($\{1,2,3,4,5\}\supset\{1,3,5\}$)
* $a\subseteq b$, set $a$ is a subset of set $b$.
* $a\supseteq b$, set $a$ is a superset of set $b$.
 
### Common Sets
**The Natural Numbers**: the positive integers. 
$$\mathbb{N}=\{1,2,3,\ldots\}$$


* Most mathematicians consider zero to also be a natural number.  Sometimes $\mathbb{N}^\ast$ or $\mathbb{Z}^*_+$ are used to exclude 0, and $\mathbb{N}_0$ or $\mathbb{Z}^+_0$ can be used to include 0.

**The Integers**: every whole number
$$\mathbb{Z} = {\{...,-3,-2,-1,0,1,2,3,\ldots\}}$$
**Rational Numbers**: any number that can be expressed as $\frac{a}{b}$, where $a$ and $b$ are both integers ($b$ being non-zero).
$$\mathbb{Q}\ni0.75, -135.384, \frac{1}{3}$$
**Real Numbers ($\mathbb{R}$):** All of the points on an infinitely long number line.  They can include any number operations, and they can be very, very, long and complex.
**Complex Numbers ($\mathbb{C}$)**: These numbers contain a real part, and a complex part in terms of $i$.
