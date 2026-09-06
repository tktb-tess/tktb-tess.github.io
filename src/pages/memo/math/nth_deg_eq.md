---
layout: ../../../layouts/MdLayout.astro
title: n次方程式 (n ≤ 4) の解法まとめ
description: よくクソ長い解みたいな感じで話題になる 3, 4 次方程式の解ですけど、一つ一つ順を追っていけば別にそこまで難しいものでもなくないですか?
---

最高次係数は常に非零とする。

### 目次

## 1次方程式

$$
\begin{gather*}
a_1x + a_0 = 0 \\
x = -\frac{a_0}{a_1}
\end{gather*}
$$

ただの式変形。特筆すべきことはない。

## 2次方程式

$$
a_2 x^2 + a_1 x + a_0 = 0
$$

$a_2$ で割り、平方完成する。

$$
\begin{gather*}
&x^2 + \frac{a_1}{a_2} x + \frac{a_0}{a_2} = 0 \\ \\
& \left( x + \frac{a_1}{2 a_2} \right)^2 - \frac{a_1^2}{4a_2^2} + \frac{a_0}{a_2} = 0 \\ \\
& \left( x + \frac{a_1}{2 a_2} \right)^2 = \frac{a_1^2 - 4a_0a_2}{4a_2^2}
\end{gather*}
$$

平方根をとり、整理する。

$$
\begin{gather*}
x + \frac{a_1}{2 a_2} = \pm \frac{\sqrt{a_1^2 - 4a_0a_2}}{2a_2} \\ \\
x = \frac{-a_1 \pm \sqrt{a_1^2 - 4a_0a_2}}{2a_2}
\end{gather*}
$$


## 3次方程式

$$
a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0
$$

$a_3$ で割り、$b_k = \dfrac{a_k}{a_3} \ (k = 0, 1, 2)$ とおくと、

$$
x^3 + b_2 x^2 + b_1 x + b_0 = 0
$$

立法完成して、2次の項を消す。3次の項は $\left(x + \dfrac{b_2}{3}\right)^3$ となるので、 $x = t - \dfrac{b_2}{3}$ と変換する。代入して整理すると、

$$
\begin{alignedat}{2}
& x^3 + b_2 x^2 + b_1 x + b_0 = 0 \\ \\
& \left(t - \frac{b_2}{3}\right)^3 + b_2 \left(t - \frac{b_2}{3}\right)^2 + b_1 \left(t - \frac{b_2}{3}\right) + b_0 = 0 \\ \\
& t^3 - b_2 t^2 + \frac{b_2^2}{3} t - \frac{b_2^3}{27} + b_2 \left(t^2 - \frac{2b_2}{3} t + \frac{b_2^2}{9} \right) + b_1 \left(t - \frac{b_2}{3}\right) + b_0 = 0 \\ \\
& t^3 + \left(b_1 - \frac{b_2^2}{3} \right) t + b_0 + \frac{2b_2^3}{27} - \frac{b_1b_2}{3} = 0 \\ \\
\end{alignedat}
$$

が得られ、

$$
\begin{alignedat}{2}
c_0 &= b_0 + \frac{2b_2^3}{27} - \frac{b_1b_2}{3} \\ \\
c_1 &= b_1 - \frac{b_2^2}{3}
\end{alignedat}
$$

とおけば、$t^3 + c_1t + c_0 = 0$ を得る。

次に、$t = u + v$ とおくと、

$$
\begin{alignedat}{2}
& (u + v)^3 + c_1(u + v) + c_0 = 0 \\
& u^3 + v^3 + 3uv(u + v) + c_1(u + v) + c_0 = 0 \\
& u^3 + v^3 + c_0 + (3uv + c_1)(u + v) = 0 \quad \cdots \text{(A)}
\end{alignedat}
$$

ここで、$\text{(A)}$ が成り立つためには、

$$
\left\{
\begin{alignedat}{2}
u^3 + v^3 + c_0 &= 0 \\
3uv + c_1 &= 0
\end{alignedat}
\right.
$$

の2式が成立すれば十分である。変形して、

$$
\left\{
\begin{alignedat}{2}
u^3 + v^3 &= -c_0 \\
u^3v^3 &= -\left(\frac{c_1}{3}\right)^3
\end{alignedat}
\right.
$$

解と係数の関係より、 $u^3, v^3$ は2次方程式

$$
s^2 + c_0 s - \left(\frac{c_1}{3}\right)^3 = 0
$$

の解になる。これを解いて、

$$
s = -\frac{c_0}{2} \pm \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}
$$

$u, v$ は対称なので、2つの解をそれぞれに割り当てても問題ない。よって

$$
\begin{alignedat}{2}
u^3 &= -\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3} \\ \\
v^3 &= -\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}
\end{alignedat}
$$

とする。1の原始3乗根 $-\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i$ を $\omega$ とおいて、3乗根をとると、

$$
\begin{alignedat}{2}
u &= \omega^k \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \\ \\
v &= \omega^k \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \qquad (k = 0, 1, 2)
\end{alignedat}
$$

のように、それぞれ3つの解が得られる。

$uv = -\dfrac{b_1}{3}$ となるように組み合わせを選ぶ。

$$
\begin{alignedat}{2}
&  \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \times \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \\ \\
&= \sqrt[3]{\left(-\frac{c_0}{2}\right)^2 - \left(\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3\right)} \\ \\
&= \sqrt[3]{-\left(\frac{c_1}{3}\right)^3} = -\frac{c_1}{3}
\end{alignedat}
$$

であるので、

$$
t = u + v = \omega^k \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} + \omega^{-k} \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \qquad (k = 0, 1, 2)
$$

となる。よって3次方程式 $a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0$ の解は、

$$
\begin{gather*}
x = - \frac{b_3}{3} + t = -\frac{b_2}{3} + \omega^k \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} + \omega^{-k} \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \quad (k = 0, 1, 2)
\end{gather*}
$$

ただし、

$$
\begin{alignedat}{2}
b_l &= \frac{a_l}{a_3} \ \ (l = 0, 1, 2) \\ \\
c_0 &= b_0 + \frac{2b_2^3}{27} - \frac{b_1b_2}{3} \\ \\
c_1 &= b_1 - \frac{b_2^2}{3}
\end{alignedat}
$$

### 還元不能

上の $\left(\dfrac{c_0}{2}\right)^2 + \left(\dfrac{c_1}{3}\right)^3$ の値が負のとき、$u^3, v^3$ は虚数となる。不等式を立てて変形すると、

$$
\begin{alignedat}{2}
\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3 &< 0 \\ \\
27c_0^2 + 4c_1^3 &< 0 \\ \\
- 4c_1^3 - 27c_0^2 &> 0
\end{alignedat}
$$

である。

また、3次方程式 $a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0$ の判別式 $D$ は

$$
D = -4a_1^3 a_3 + a_1^2 a_2^2 - 4a_0 a_2^3 + 18a_0 a_1 a_2 a_3 - 27 a_0^2 a_3^2
$$

である。これに $a_0 = c_0, \ a_1 = c_1, \ a_2 = 0, \ a_3 = 1$ を代入すると、

$$
D = -4c_1^3 - 27c_0^2
$$

つまり $u^3, v^3$ が虚数であることと、$D > 0$ すなわち3次方程式が3つの実数解をもつことは、実は同値なのである。さらに3次方程式が既約な場合、虚数を避けて代数的な解を書き下すことはできないことが分かっており、これを **還元不能** という。解が全て実数解なのに虚数の立方根の和でしか書けないというのはなかなか不思議であると私は思う。

### 例

次の3次方程式を解いてみる。

$$
x^3 - 6x^2 - 3x + 28 = 0
$$

$x = t + 2$ とおいて2次の項を消す。

$$
\begin{alignedat}{2}
& (t + 2)^3 - 6(t + 2)^2 - 3(t + 2) + 28 = 0 \\
& t^3 + 6t^2 + 12t + 8 - 6t^2 - 24t - 24 - 3t - 6 + 28 = 0 \\
& t^3 - 15t + 6 = 0
\end{alignedat}
$$

$t = u + v$ とおいて整理。

$$
\begin{alignedat}{2}
& (u + v)^3 - 15(u + v) + 6 = 0 \\
& u^3 + v^3 + 6 + (3uv - 15)(u + v) = 0
\end{alignedat}
$$

よって

$$
\left\{
\begin{alignedat}{2}
u^3 + v^3 + 6 &= 0 \\
3uv - 15 &= 0
\end{alignedat}
\right.
$$

が成り立てば十分。変形して

$$
\left\{
\begin{alignedat}{2}
u^3 + v^3 &= -6 \\
u^3v^3 &= 125
\end{alignedat}
\right.
$$

よって $u^3, v^3$ は 2次方程式 $s^2 + 6s + 125 = 0$ の解になる。これを解いて、

$$
s = -3 \pm \sqrt{3^2 - 125} = -3 \pm 2\sqrt{29} i
$$

2つの解を $u^3, v^2$ それぞれに割り当てても問題ないので、

$$
\begin{alignedat}{2}
u^3 &= -3 + 2\sqrt{29} i \\
v^3 &= -3 - 2\sqrt{29} i
\end{alignedat}
$$

とする。1の原始3乗根 $-\dfrac{1}{2} + \dfrac{\sqrt{3}}{2}i$ を $\omega$ とおくと、$t$ は

$$
t = u + v = \omega^k \sqrt[3]{-3 + 2\sqrt{29} i} + \omega^{-k} \sqrt[3]{-3 - 2\sqrt{29} i} \quad (k = 0, 1, 2)
$$

よって解は

$$
x = 2 + t = 2 + \omega^k \sqrt[3]{-3 + 2\sqrt{29} i} + \omega^{-k} \sqrt[3]{-3 - 2\sqrt{29} i} \quad (k = 0, 1, 2)
$$

である。3つの解は全て実数であるが、この式から虚数単位 $i$ を除去することはできない（還元不能）。

## 4次方程式

$$
a_4x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0
$$

まず $a_4$ で割り、$b_k = \dfrac{a_k}{a_4} \ (k = 0, 1, 2, 3)$ とおくと、

$$
x^4 + b_3 x^3 + b_2 x^2 + b_1 x + b_0 = 0
$$

3次方程式と同様の方法で3次の項を消す。4次の項は $\left( x + \dfrac{b_3}{4} \right)^4$ となるので $x = t - \dfrac{b_3}{4}$ と変換する。代入して整理すると、

$$
\begin{alignedat}{2}
& x^4 + b_3 x^3 + b_2 x^2 + b_1 x + b_0 = 0 \\ \\
& \left( t - \frac{b_3}{4} \right)^4 + b_3 \left( t - \frac{b_3}{4} \right)^3 + b_2 \left( t - \frac{b_3}{4} \right)^2 + b_1 \left( t - \frac{b_3}{4} \right) + b_0 = 0 \\ \\
& t^4 - b_3 t^3 + \frac{3b_3^2}{8} t^2 - \frac{b_3^3}{16} t + \frac{b_3^4}{256} + b_3 \left(t^3 - \frac{3b_3}{4} t^2 + \frac{3b_3^2}{16} t - \frac{b_3^3}{64}\right) + b_2 \left(t^2 - \frac{b_3}{2}t + \frac{b_3^2}{16} \right) + b_1 \left( t - \frac{b_3}{4} \right) + b_0 = 0 \\ \\
& t^4 + \left(b_2 - \frac{3b_3^2}{8}\right) t^2 + \left(b_1 + \frac{b_3^3}{8} - \frac{b_2b_3}{2}\right) t  + b_0 - \frac{3b_3^4}{256} + \frac{b_2b_3^2}{16} - \frac{b_1b_3}{4} = 0
\end{alignedat}
$$

となり、

$$
\begin{alignedat}{2}
c_0 &= b_0 - \frac{3b_3^4}{256} + \frac{b_2b_3^2}{16} - \frac{b_1b_3}{4} \\ \\
c_1 &= b_1 + \frac{b_3^3}{8} - \frac{b_2b_3}{2} \\ \\
c_2 &= b_2 - \frac{3b_3^2}{8}
\end{alignedat}
$$

とおけば、$t^4 + c_2 t^2 + c_1 t + c_0 = 0$ を得る。

$\mu$ をある複素数（具体的な値は後で求める）として、$2\mu t^2 +\mu^2 - 2\mu t^2 -\mu^2$ を加える。$t^4 + 2\mu t^2 +\mu^2 = (t^2 + \mu)^2$ であることを使って変形すると

$$
\begin{alignedat}{2}
& t^4 + 2\mu t^2 + \mu^2 - 2\mu t^2 - \mu^2 + c_2 t^2 + c_1 t + c_0 = 0 \\
& (t^2 + \mu)^2 + (c_2 - 2\mu) t^2 + c_1 t + c_0 - \mu^2 = 0 \\
& (t^2 + \mu)^2 - ((2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0) = 0
\end{alignedat}
$$

ここで、左辺が (2乗) - (2乗) の形になれば、左辺は2つの2次式に因数分解出来て2次方程式に帰着できる。よって第2項 $(2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0$ が $(\alpha t + \beta)^2$ の形で表せるように $\mu$ の値を決める。これは2次方程式 (第2項) = 0 が重解をもつこと、またその判別式が0であることと同値。判別式は

$$
\begin{alignedat}{2}
&(-c_1)^2 - 4(2\mu - c_2)(\mu^2 - c_0) \\
&= - 4(2\mu^3 - c_2\mu^2 - 2c_0\mu + c_0c_2) + c_1^2 \\
&= -8\mu^3 + 4c_2\mu^2 + 8c_0\mu - 4c_0c_2 + c_1^2 \\
\end{alignedat}
$$

であるので、$\mu$ は3次方程式

$$
8\mu^3 - 4c_2\mu^2 - 8c_0\mu + 4c_0c_2 - c_1^2 = 0
$$

を満たす。これを解いて $\mu$ を求める。

2次方程式 $ax^2 + bx + c = 0$ が重解をもつとき、

$$
\begin{alignedat}{2}
ax^2 + bx + c &= a\left(x + \frac{b}{2a}\right)^2 \\ \\
&= \left(\sqrt{a}x + \frac{b}{2\sqrt{a}}\right)^2
\end{alignedat}
$$

と変形できる。よって第2項は

$$
\begin{alignedat}{2}
&(2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0 \\ \\
&= \left(\sqrt{2\mu - c_2}t - \frac{c_1}{2\sqrt{2\mu - c_2}}\right)^2
\end{alignedat}
$$

である。

$$
\begin{alignedat}{2}
d_1 &= \sqrt{2\mu - c_2} \\ \\
d_2 &= -\frac{c_1}{2d_1}
\end{alignedat}
$$

とおけば、4次方程式は

$$
\begin{alignedat}{2}
&(t^2 + \mu)^2 - ((2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0) = 0 \\
&(t^2 + \mu)^2 - \left(d_1t + d_2\right)^2 = 0 \\
&\{(t^2 + \mu) + (d_1 t + d_2)\}\{(t^2 + \mu) - (d_1 t + d_2)\} = 0 \\
&(t^2 + d_1 t + d_2 + \mu)(t^2 - d_1 t - d_2 + \mu) = 0
\end{alignedat}
$$

と分解できる。$t^2 + d_1 t + \mu + d_2 = 0$ の解は

$$
t = -\frac{d_1}{2} \pm \sqrt{\frac{d_1^2}{4} - d_2 - \mu}
$$

$t^2 - d_1 t + \mu - d_2 = 0$ の解も同様に求めて、

$$
t = \frac{d_1}{2} \pm \sqrt{\frac{d_1^2}{4} + d_2 - \mu}
$$

よって、4次方程式 $a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0$ の解は

$$
\begin{alignedat}{2}
x = - &\frac{d_1}{2} - \frac{b_3}{4} \pm \sqrt{\frac{d_1^2}{4} - d_2 - \mu}, \\ \\
&\frac{d_1}{2} - \frac{b_3}{4} \pm \sqrt{\frac{d_1^2}{4} + d_2 - \mu}
\end{alignedat}
$$

ただし、$\mu$ は3次方程式 $8\mu^3 - 4c_2\mu^2 - 8c_0\mu + 4c_0c_2 - c_1^2 = 0$ の解であり、また

$$
\begin{alignedat}{2}
b_l &= \frac{a_l}{a_4} \ \ (l = 0, 1, 2, 3) \\ \\
c_0 &= b_0 - \frac{3b_3^4}{256} + \frac{b_2b_3^2}{16} - \frac{b_1b_3}{4} \\ \\
c_1 &= b_1 + \frac{b_3^3}{8} - \frac{b_2b_3}{2} \\ \\
c_2 &= b_2 - \frac{3b_3^2}{8} \\ \\
d_1 &= \sqrt{2\mu - c_2} \\ \\
d_2 &= -\frac{c_1}{2d_1}
\end{alignedat}
$$

である。

## 5次方程式

皆さんご存知の通り、5次以降の方程式には任意の方程式に対して使える代数的解法は存在しない。だが代数的解法に拘らなければ解く方法はある。

工事中……
