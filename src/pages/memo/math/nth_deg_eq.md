---
layout: ../../../layouts/MdLayout.astro
title: n 次方程式 (n ≤ 4) の解法まとめ
---

以降、最高次係数は常に非零とする。

## 1次方程式

$$
\begin{gather*}
a_1x + a_0 = 0 \\
x = -\frac{a_0}{a_1}
\end{gather*}
$$

ただの式変形、特筆すべきことはない。

## 2次方程式

$$
a_2 x^2 + a_1 x + a_0 = 0
$$

$a_2$ で割り、平方完成する。

$$
\begin{alignedat}{2}
x^2 + \frac{a_1}{a_2} x + \frac{a_0}{a_2} &= 0 \\ \\
\left( x + \frac{a_1}{2 a_2} \right)^2 - \frac{a_1^2}{4a_2^2} + \frac{a_0}{a_2} &= 0 \\ \\
\left( x + \frac{a_1}{2 a_2} \right)^2 &= \frac{a_1^2 - 4a_0a_2}{4a_2^2}
\end{alignedat}
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
x^3 + b_2 x^2 + b_1 x + b_0 &= 0 \\ \\
\left(t - \frac{b_2}{3}\right)^3 + b_2 \left(t - \frac{b_2}{3}\right)^2 + b_1 \left(t - \frac{b_2}{3}\right) + b_0 &= 0 \\ \\
t^3 - b_2 t^2 + \frac{b_2^2}{3} t - \frac{b_2^3}{27} + b_2 \left(t^2 - \frac{2b_2}{3} t + \frac{b_2^2}{9} \right) + b_1 \left(t - \frac{b_2}{3}\right) + b_0 &= 0 \\ \\
t^3 + \left(b_1 - \frac{b_2^2}{3} \right) t + b_0 + \frac{2b_2^3}{27} - \frac{b_1b_2}{3} &= 0 \\ \\
\end{alignedat}
$$

が得られ、

$$
c_0 = b_0 + \frac{2b_2^3}{27} - \frac{b_1b_2}{3}, \quad c_1 = b_1 - \frac{b_2^2}{3}
$$

とおけば、$t^3 + c_1t + c_0 = 0$ を得る。

次に、$t = u + v$ とおくと、

$$
\begin{alignedat}{2}
(u + v)^3 + c_1(u + v) + c_0 &= 0 \\
u^3 + v^3 + 3uv(u + v) + c_1(u + v) + c_0 &= 0 \\
u^3 + v^3 + c_0 + (3uv + c_1)(u + v) &= 0 \quad \cdots \text{(A)}
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
u^3 + v^3 &= -c_0 \\ \\
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
\begin{alignedat}{2}
s &= \frac{1}{2}\left(-c_0 \pm \sqrt{c_0^2 + 4\left(\frac{c_1}{3}\right)^3} \right) \\ \\
&= -\frac{c_0}{2} \pm \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}
\end{alignedat}
$$

$u, v$ は対称なので、2つの解の片方を一方の変数に固定しても問題ない。よって

$$
u^3 = -\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}, \quad v^3 = -\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}
$$

とする。1の原始3乗根 $\dfrac{-1 + \sqrt{3}i}{2}$ を $\omega$ とおいて、3乗根をとると、

$$
u = \omega^k \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}}, \quad v = \omega^k \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \qquad (k = 0, 1, 2)
$$

のように、それぞれ3つの解が得られる。

$uv = -\dfrac{b_1}{3}$ となるように組み合わせを選ぶ。

$$
\begin{gather*}
  \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \times \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \\ \\
  \begin{alignedat}{2}
    &= \sqrt[3]{\left(-\frac{c_0}{2}\right)^2 - \left(\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3\right)} \\ \\
    &= \sqrt[3]{-\left(\frac{c_1}{3}\right)^3} = -\frac{c_1}{3}
  \end{alignedat}
\end{gather*}
$$

であり、また $\omega^3 = 1$ であることを踏まえると、

$$
t = u + v = \omega^k \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} + \omega^{-k} \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} \qquad (k = 0, 1, 2)
$$

となる。よって解は、

$$
\begin{gather*}
x = \omega^k \sqrt[3]{-\frac{c_0}{2} + \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} + \omega^{-k} \sqrt[3]{-\frac{c_0}{2} - \sqrt{\left(\frac{c_0}{2}\right)^2 + \left(\frac{c_1}{3}\right)^3}} -\frac{b_2}{3} \quad (k = 0, 1, 2) \\ \\
b_l = \frac{a_l}{a_3} \ (l = 0, 1, 2), \quad c_0 = b_0 + \frac{2b_2^3}{27} - \frac{b_1b_2}{3}, \quad c_1 = b_1 - \frac{b_2^2}{3}
\end{gather*}
$$

## 4次方程式

$$
a_4x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0
$$

3次方程式の場合と同様に $a_4$ で割り、$b_k = \dfrac{a_k}{a_4} \ (k = 0, 1, 2, 3)$ とおくと、

$$
x^4 + b_3 x^3 + b_2 x^2 + b_1 x + b_0 = 0
$$

四乗完成して3次の項を消す。完成後の4次の項は $\left( x + \dfrac{b_3}{4} \right)^4$ となるので $x = t - \dfrac{b_3}{4}$ と変換する。代入して整理すると、

$$
\begin{alignedat}{2}
x^4 + b_3 x^3 + b_2 x^2 + b_1 x + b_0 = 0 &= 0 \\ \\
\left( t - \frac{b_3}{4} \right)^4 + b_3 \left( t - \frac{b_3}{4} \right)^3 + b_2 \left( t - \frac{b_3}{4} \right)^2 + b_1 \left( t - \frac{b_3}{4} \right) + b_0 &= 0 \\ \\
t^4 - b_3 t^3 + \frac{3b_3^2}{8} t^2 - \frac{b_3^3}{16} t + \frac{b_3^4}{256} + b_3 \left(t^3 - \frac{3b_3}{4} t^2 + \frac{3b_3^2}{16} t - \frac{b_3^3}{64}\right) + b_2 \left(t^2 - \frac{b_3}{2}t + \frac{b_3^2}{16} \right) + b_1 \left( t - \frac{b_3}{4} \right) + b_0 &= 0 \\ \\
t^4 + \left(b_2 - \frac{3b_3^2}{8}\right) t^2 + \left(b_1 + \frac{b_3^3}{8} - \frac{b_2b_3}{2}\right) t  + b_0 - \frac{3b_3^4}{256} + \frac{b_2b_3^2}{16} - \frac{b_1b_3}{4} &= 0
\end{alignedat}
$$

となり、

$$
c_0 = b_0 - \frac{3b_3^4}{256} + \frac{b_2b_3^2}{16} - \frac{b_1b_3}{4}, \quad c_1 = b_1 + \frac{b_3^3}{8} - \frac{b_2b_3}{2}, \quad c_2 = b_2 - \frac{3b_3^2}{8}
$$

とおけば、$t^4 + c_2 t^2 + c_1 t + c_0 = 0$ を得る。

$\mu$ をある (後で決める) 実数として、$2\mu t^2 +\mu^2 - 2\mu t^2 -\mu^2$ を加える。$t^4 + 2\mu t^2 +\mu^2 = (t^2 + \mu)^2$ であることを使って変形すると

$$
\begin{alignedat}{2}
t^4 + 2\mu t^2 + \mu^2 - 2\mu t^2 - \mu^2 + c_2 t^2 + c_1 t + c_0 &= 0 \\
(t^2 + \mu)^2 + (c_2 - 2\mu) t^2 + c_1 t + c_0 - \mu^2 &= 0 \\
(t^2 + \mu)^2 - ((2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0) &= 0
\end{alignedat}
$$

ここで、左辺が (2乗) - (2乗) の形になれば、左辺は2つの2次式に因数分解出来て2次方程式に帰着できる。よって第2項 $(2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0$ が $(\alpha t + \beta)^2$ の形で表せるように $\mu$ の値を決める。これは2次方程式 (第2項) = 0 が重解をもつこと、またその判別式が0であることと同値。したがって、

$$
\begin{alignedat}{2}
(-c_1)^2 - 4(2\mu - c_2)(\mu^2 - c_0) &= 0 \\
4(2\mu^3 - c_2\mu^2 - 2c_0\mu + c_0c_2) - c_1^2 &= 0 \\
8\mu^3 - 4c_2\mu^2 - 8c_0\mu + 4c_0c_2 - c_1^2 &= 0 \\ \\
\mu^3 - \frac{c_2}{2} \mu^2 - c_0\mu + \frac{c_0c_2}{2} - \frac{c_1^2}{8} &= 0
\end{alignedat}
$$

このような3次方程式が得られる。これを解いて $\mu$ を得る。

2次方程式 $ax^2 + bx + c = 0$ が重解をもつとき、

$$
\begin{gather*}
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 \\ \\
= \left(\sqrt{a}x + \frac{b}{2\sqrt{a}}\right)^2
\end{gather*}
$$

よって第2項は

$$
(2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0 = \left(\sqrt{2\mu - c_2}t - \frac{c_1}{2\sqrt{2\mu - c_2}}\right)^2
$$

であり、4次方程式は

$$
\begin{alignedat}{2}
(t^2 + \mu)^2 - ((2\mu - c_2)t^2 - c_1 t + \mu^2 - c_0) &= 0 \\ \\
(t^2 + \mu)^2 - \left(\sqrt{2\mu - c_2}t - \frac{c_1}{2\sqrt{2\mu - c_2}}\right)^2 &= 0 \\ \\
\left\{t^2 + \mu + \left(\sqrt{2\mu - c_2}t - \frac{c_1}{2\sqrt{2\mu - c_2}}\right)\right\} \left\{t^2 + \mu - \left(\sqrt{2\mu - c_2}t - \frac{c_1}{2\sqrt{2\mu - c_2}}\right)\right\} &= 0 \\ \\
\left(t^2 + \sqrt{2\mu - c_2}t + \mu - \frac{c_1}{2\sqrt{2\mu - c_2}}\right) \left(t^2 - \sqrt{2\mu - c_2}t + \mu + \frac{c_1}{2\sqrt{2\mu - c_2}}\right) &= 0 \\ \\
\end{alignedat}
$$

と分解できる。

$$
\begin{gather*}
t^2 + \sqrt{2\mu - c_2}t + \mu - \frac{c_1}{2\sqrt{2\mu - c_2}} = 0 \\ \\
2\sqrt{2\mu - c_2}t^2 + 2(2\mu - c_2)t + 2\mu\sqrt{2\mu - c_2} - c_1 = 0 \\ \\
t = \frac{-2\mu + c_2 \pm \sqrt{(2\mu-c_2)^2 - 2\sqrt{2\mu - c_2} \times (2\mu\sqrt{2\mu - c_2} - c_1)}}{2\sqrt{2\mu - c_2}} \\ \\
t = \frac{-2\mu + c_2 \pm \sqrt{4\mu^2 - 4c_2\mu + c_2^2 -4\mu(2\mu - c_2) + 2c_1\sqrt{2\mu - c_2}}}{2\sqrt{2\mu - c_2}} \\ \\
\end{gather*}
$$

工事中……
