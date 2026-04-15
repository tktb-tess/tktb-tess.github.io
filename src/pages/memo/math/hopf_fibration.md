---
layout: ../../../layouts/MdLayout.astro
title: Hopf fibration
---

*Hopf fibration* $S^3 \to S^2$ の構築方法。

## 目次

## Riemann球面を用いた方法

3次元球面

```math
S^3=\left\lbrace(x_0,y_0,x_1,y_1)\in\mathbb{R}^4 \ |\ x_0^2+y_0^2+x_1^2+y_1^2=1\right\rbrace
```

を考える。 $\mathbb{R}^4$ を $\mathbb{C}^2$ と同一視すると、 $z_0=x_0+iy_0,z_1=x_1+iy_1$ とおいて、

```math
S^3=\left\lbrace(z_0,z_1)\in\mathbb{C}^2 \ |\ |z_0|^2+|z_1|^2=1\right\rbrace
```

となる。 $\mathbb{C}^2 \setminus \{(0,0)\}$ からRiemann球面 $\mathbb{C}\mathrm{P}^1 \simeq \mathbb{C} \cup \lbrace\infty\rbrace$ への写像

```math
(z_0, z_1) \mapsto [z_0 : z_1]
```

```math
\simeq\left\lbrace
\begin{aligned}
&\frac{z_0}{z_1} & &(z_1 \neq 0) \\ \\
&\infty & &(z_1 = 0)
\end{aligned}
\right.
```

で $S^3$ を移す。

さらに、複素数平面から2次元球面 $S^2$ 上の座標表示に変換する。その写像は、

```math
z
\mapsto\left\lbrace
\begin{aligned}
\frac{1}{|z|^2+1}&(2\text{Re}\ z,2\text{Im}\ z, |z|^2-1) & &(z \neq \infty) \\ \\
&(0,0,1) & &(z = \infty)
\end{aligned}
\right.
```

$z$ に $\dfrac{z_0}{z_1}$ を代入すると、 $|z_0|^2+|z_1|^2=1$ を用いて、

$z_1 \neq 0$ のとき

```math
\begin{alignedat}{1}
\frac{z_0}{z_1}
&\mapsto \frac{1}{|z_0/z_1|^2+1}\left(2\text{Re}{\frac{z_0}{z_1}},2\text{Im}{\frac{z_0}{z_1}},\left|\frac{z_0}{z_1}\right|^2-1\right) \\ \\
&= \frac{1}{|z_0|^2+|z_1|^2}\left(2\text{Re}{\left(|z_1|^2 \cdot \frac{z_0}{z_1}\right)},2\text{Im}{\left(|z_1|^2 \cdot \frac{z_0}{z_1}\right)},|z_0|^2-|z_1|^2\right) \\ \\
&= \left(2\text{Re}{\left(z_1z_1^* \cdot \frac{z_0}{z_1}\right)},2\text{Im}{\left(z_1z_1^* \cdot \frac{z_0}{z_1}\right)},|z_0|^2-|z_1|^2\right) \\ \\
&= \left(2\text{Re}\ z_0z_1^*, 2\text{Im}\ z_0z_1^*,|z_0|^2-|z_1|^2\right)
\end{alignedat}
```

となる。 $z_1=0$ のときもこの式を満たす。

よって、*Hopf fibration* $S^3 \to S^2$ の明示的な写像は

```math
(z_0,z_1) \mapsto \left(2\text{Re}\ z_0z_1^*,\ 2\text{Im}\ z_0z_1^*,\ |z_0|^2-|z_1|^2\right)
```

である。複素数を実数に直すと、

```math
\begin{alignedat}{1}
z_0z_1^* &= (x_0+iy_0)(x_1-iy_1) \\
&= x_0x_1+y_0y_1+i(y_0x_1-x_0y_1) \\
\\
|z_0|^2-|z_1|^2 &= x_0^2+y_0^2-x_1^2-y_1^2
\end{alignedat}
```

であるので、

```math
(x_0,y_0,x_1,y_1) \mapsto \left(2(x_0x_1+y_0y_1),\ 2(y_0x_1-x_0y_1),\ x_0^2+y_0^2-x_1^2-y_1^2\right)
```

## 四元数を用いた方法

4次元空間上の各点 $(x_0,x_1,x_2,x_3)$ を四元数 $x_0+x_1\mathbf{i}+x_2\mathbf{j}+x_3\mathbf{k}$ と同一視する。3次元球面は単位四元数全体の集合となり、また乗法に関して群となる。つまり

```math
S^3 = \left\{q \in \mathbb{H}\,|\,|q|^2=1\right\}
```

である。

また、3次元実空間上の点 $(x_0,x_1,x_2)$ を純四元数 $x_0\mathbf{i}+x_1\mathbf{j}+x_2\mathbf{k}$ と同一視する。

```math
\mathbb{R}^3 = \left\{\,p \in \mathbb{H}\,|\,\operatorname{Re}{p}=0\right\}
```

$S^3$ から3次回転群への写像 $\rho$ を以下のように定義する。

```math
\begin{gather*}
\rho : S^3 \to \text{SO}(3) \\
\rho_q(p) = qpq^{*} \quad (p \in \mathbb{R}^3,\,q \in S^3)
\end{gather*}
```

ただし $q^{*}$ は $q$ の四元共役。

この $p$ を $\mathbf{i}$ に固定すれば、像もまた $S^2$ 上になる。この写像

```math
\begin{gather*}
h : S^3 \to S^2 \\
q \mapsto \rho_q(\mathbf{i}) = q\mathbf{i}q^{*}
\end{gather*}
```

が *Hopf fibration* である。
