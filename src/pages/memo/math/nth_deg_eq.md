---
layout: ../../../layouts/MdLayout.astro
title: n 次方程式 (n ≤ 4) の解法まとめ
---

以降、 最高次係数は常に非零とする。

## 1次方程式

$$
\begin{alignedat}{2}
a_1x + a_0 &= 0 \\
x &= -\frac{a_0}{a_1}
\end{alignedat}
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
\begin{alignedat}{2}
x + \frac{a_1}{2 a_2} &= \pm \frac{\sqrt{a_1^2 - 4a_0a_2}}{2a_2} \\ \\
x &= \frac{-a_1 \pm \sqrt{a_1^2 - 4a_0a_2}}{2a_2}
\end{alignedat}
$$


## 3次方程式

$$
a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0
$$

$a_3$ で割り、立法完成して、2次の項を消す。3次の項は $\left(x + \dfrac{a_2}{3a_3}\right)^3$ となるので、 $t = x + \dfrac{a_2}{3a_3}$ とおく。代入して整理して、

$$
\begin{alignedat}{2}
x^3 + \frac{a_2}{a_3} x^2 + \frac{a_1}{a_3} x + \frac{a_0}{a_3} &= 0 \\ \\
\left(t - \frac{a_2}{3a_3}\right)^3 + \frac{a_2}{a_3} \left(t-\frac{a_2}{3a_3}\right)^2 + \frac{a_1}{a_3} \left(t-\frac{a_2}{3a_3}\right) + \frac{a_0}{a_3} &= 0 \\ \\
t^3 - \frac{a_2}{a_3} t^2 + \frac{a_2^2}{3a_3^2} t - \frac{a_2^3}{27a_3^3} + \frac{a_2}{a_3} t^2 - \frac{2a_2^2}{3a_3^2} t + \frac{a_2^3}{9a_3^3} + \frac{a_1}{a_3} t - \frac{a_1a_2}{3a_3^2} + \frac{a_0}{a_3} &= 0 \\ \\
t^3 + \frac{a_1}{a_3} t + \frac{a_2^2}{3a_3^2} t - \frac{2a_2^2}{3a_3^2} t + \frac{a_2^3}{9a_3^3} - \frac{a_2^3}{27a_3^3} - \frac{a_1a_2}{3a_3^2} + \frac{a_0}{a_3} &= 0 \\ \\
t^3 + \left(\frac{a_1}{a_3} - \frac{2a_2^2}{3a_3^2} \right) t - \frac{a_1a_2}{3a_3^2} + \frac{a_0}{a_3^2} + \frac{2a_2^3}{27a_3^3} &= 0
\end{alignedat}
$$

が得られる。

$$
b_0 = \frac{a_1}{a_3} - \frac{2a_2^2}{3a_3^2}, \quad b_1 = - \frac{a_1a_2}{3a_3^2} + \frac{a_0}{a_3^2} + \frac{2a_2^3}{27a_3^3}
$$

とおいて、$t^3 + b_1t + b_0 = 0$ とする。

次に、$t = u + v$ とおくと、

$$
\begin{alignedat}{2}
(u + v)^3 + b_1(u + v) + b_0 &= 0 \\
u^3 + 3u^2v + 3uv^2 + v^3 + b_1(u + v) + b_0 &= 0 \\
u^3 + v^3 + 3uv(u + v) + b_1(u + v) + b_0 &= 0 \\
u^3 + v^3 + b_0 + (3uv + b_1)(u + v) &= 0 \quad \cdots \text{(A)}
\end{alignedat}
$$

ここで、$\text{(A)}$ が成り立つためには、

$$
\left\{
\begin{alignedat}{2}
u^3 + v^3 + b_0 &= 0 \\
3uv + b_1 &= 0
\end{alignedat}
\right.
$$

の2式が成立すれば十分である。変形して、

$$
\left\{
\begin{alignedat}{2}
u^3 + v^3 &= -b_0 \\
u^3v^3 &= -\left(\frac{b_1}{3}\right)^3
\end{alignedat}
\right.
$$

解と係数の関係より、 $u^3, v^3$ は2次方程式

$$
s^2 + b_0 s - \left(\frac{b_1}{3}\right)^3 = 0
$$

の解になる。これを解いて、

$$
\begin{alignedat}{2}
s &= \frac{1}{2}\left(-b_0 \pm \sqrt{b_0^2 + 4\left(\frac{b_1}{3}\right)^3} \right) \\ \\
&= -\frac{b_0}{2} \pm \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}
\end{alignedat}
$$

$u, v$ は対称なので、2つの解の片方を一方の変数に固定しても問題ない。よって

$$
u^3 = -\frac{b_0}{2} + \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}, \quad v^3 = -\frac{b_0}{2} - \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}
$$

とする。1の原始3乗根 $\dfrac{-1 + \sqrt{3}i}{2}$ を $\omega$ とおいて、3乗根をとると、

$$
u = \omega^k \sqrt[3]{-\frac{b_0}{2} + \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}}, \quad v = \omega^k \sqrt[3]{-\frac{b_0}{2} - \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} \qquad (k = 0, 1, 2)
$$

のように、それぞれ3つの解が得られる。

$uv = -\dfrac{b_1}{3}$ となるように組み合わせを選ぶ。

$$
\begin{gather*}
\sqrt[3]{-\frac{b_0}{2} + \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} \times \sqrt[3]{-\frac{b_0}{2} - \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} \\ \\
= \sqrt[3]{\left(-\frac{b_0}{2}\right)^2 - \left(\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3\right)} \\ \\
= \sqrt[3]{-\left(\frac{b_1}{3}\right)^3} = -\frac{b_1}{3}
\end{gather*}
$$

であり、また $\omega^3 = 1$ であることを踏まえると、

$$
t = u + v = \omega^k \sqrt[3]{-\frac{b_0}{2} + \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} + \omega^{-k} \sqrt[3]{-\frac{b_0}{2} - \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} \qquad (k = 0, 1, 2)
$$

となる。よって解は、

$$
\begin{gather*}
x = \omega^k \sqrt[3]{-\frac{b_0}{2} + \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} + \omega^{-k} \sqrt[3]{-\frac{b_0}{2} - \sqrt{\left(\frac{b_0}{2}\right)^2 + \left(\frac{b_1}{3}\right)^3}} -\frac{a_2}{3a_3} \qquad (k = 0, 1, 2) \\ \\
b_0 = \frac{a_1}{a_3} - \frac{2a_2^2}{3a_3^2}, \quad b_1 = - \frac{a_1a_2}{3a_3^2} + \frac{a_0}{a_3^2} + \frac{2a_2^3}{27a_3^3}
\end{gather*}
$$

## 4次方程式

Coming soon……
