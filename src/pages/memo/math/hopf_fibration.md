---
layout: ../../../layouts/MdLayout.astro
title: Hopf fibration
---


3次元球面

$$
S^3=\left\lbrace(x_0,y_0,x_1,y_1)\in\mathbb{R}^4 \ |\ x_0^2+y_0^2+x_1^2+y_1^2=1\right\rbrace
$$

を考える。 $\mathbb{R}^4$ を $\mathbb{C}^2$ と同一視すると、 $z_0=x_0+iy_0,z_1=x_1+iy_1$ とおいて、

$$
S^3=\left\lbrace(z_0,z_1)\in\mathbb{C}^2 \ |\ |z_0|^2+|z_1|^2=1\right\rbrace
$$

となる。 $\mathbb{C}^2 \setminus \{(0,0)\}$ からリーマン球面 $\mathbb{C}\mathrm{P}^1 \simeq \mathbb{C} \cup \lbrace\infty\rbrace$ への写像

$$
(z_0, z_1) \mapsto [z_0 : z_1]
$$

$$
\simeq\left\lbrace
\begin{aligned}
&\frac{z_0}{z_1} & &(z_1 \neq 0) \\ \\
&\infty & &(z_1 = 0)
\end{aligned}
\right.
$$

で $S^3$ を移す。

さらに、複素数平面から2次元球面 $S^2$ 上の座標表示に変換する。その写像は、

$$
z
\mapsto\left\lbrace
\begin{aligned}
\frac{1}{|z|^2+1}&(2\text{Re}\ z,2\text{Im}\ z, |z|^2-1) & &(z \neq \infty) \\ \\
&(0,0,1) & &(z = \infty)
\end{aligned}
\right.
$$

$z$ に $\dfrac{z_0}{z_1}$ を代入すると、 $|z_0|^2+|z_1|^2=1$ を用いて、

$z_1 \neq 0$ のとき

$$
\begin{alignedat}{1}
\frac{z_0}{z_1}
&\mapsto
\frac{1}{|z_0/z_1|^2+1}\left(2\text{Re}{\frac{z_0}{z_1}},2\text{Im}{\frac{z_0}{z_1}},\left|\frac{z_0}{z_1}\right|^2-1\right) \\ \\
&= \frac{1}{|z_0|^2+|z_1|^2}\left(2\text{Re}{\left(|z_1|^2 \cdot \frac{z_0}{z_1}\right)},2\text{Im}{\left(|z_1|^2 \cdot \frac{z_0}{z_1}\right)},|z_0|^2-|z_1|^2\right) \\ \\
&= \left(2\text{Re}{\left(z_1z_1^* \cdot \frac{z_0}{z_1}\right)},2\text{Im}{\left(z_1z_1^* \cdot \frac{z_0}{z_1}\right)},|z_0|^2-|z_1|^2\right) \\ \\
&= \left(2\text{Re}\ z_0z_1^*, 2\text{Im}\ z_0z_1^*,|z_0|^2-|z_1|^2\right)
\end{alignedat}
$$

となる。 $z_1=0$ のときもこの式を満たす。

よって、Hopf fibration $S^3 \to S^2$ の明示的な写像は

$$
(z_0,z_1) \mapsto \left(2\text{Re}\ z_0z_1^*,\ 2\text{Im}\ z_0z_1^*,\ |z_0|^2-|z_1|^2\right)
$$

である。複素数を実数に直すと、

$$
\begin{alignedat}{1}
z_0z_1^* &= (x_0+iy_0)(x_1-iy_1) \\
&= x_0x_1+y_0y_1+i(y_0x_1-x_0y_1) \\
\\
|z_0|^2-|z_1|^2 &= x_0^2+y_0^2-x_1^2-y_1^2
\end{alignedat}
$$

であるので、

$$
(x_0,y_0,x_1,y_1) \mapsto \left(2(x_0x_1+y_0y_1),\ 2(y_0x_1-x_0y_1),\ x_0^2+y_0^2-x_1^2-y_1^2\right)
$$
