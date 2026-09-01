---
title: 矩阵运算
description: 矩阵的基本运算：加法、数乘、乘法、转置与逆矩阵
---

# 矩阵运算

## 矩阵的定义

由 $m \times n$ 个数 $a_{ij}$（$i=1,2,\dots,m$；$j=1,2,\dots,n$）排成的 $m$ 行 $n$ 列的数表

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

称为 $m \times n$ 矩阵，简记为 $A = (a_{ij})_{m \times n}$。

## 矩阵的线性运算

### 矩阵加法

设 $A = (a_{ij})$ 和 $B = (b_{ij})$ 都是 $m \times n$ 矩阵，则

$$
A + B = (a_{ij} + b_{ij})_{m \times n}
$$

### 数乘矩阵

设 $\lambda$ 是一个数，$A = (a_{ij})$ 是 $m \times n$ 矩阵，则

$$
\lambda A = (\lambda a_{ij})_{m \times n}
$$

### 运算规律

- 加法交换律：$A + B = B + A$
- 加法结合律：$(A + B) + C = A + (B + C)$
- 数乘结合律：$\lambda(\mu A) = (\lambda\mu)A$
- 分配律：$(\lambda + \mu)A = \lambda A + \mu A$，$\lambda(A + B) = \lambda A + \lambda B$

## 矩阵乘法

设 $A = (a_{ij})$ 是 $m \times s$ 矩阵，$B = (b_{ij})$ 是 $s \times n$ 矩阵，则 $AB = C = (c_{ij})$ 是 $m \times n$ 矩阵，其中

$$
c_{ij} = \sum_{k=1}^{s} a_{ik}b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{is}b_{sj}
$$

### 示例

设

$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}
$$

则

$$
AB = \begin{pmatrix}
1 \times 5 + 2 \times 7 & 1 \times 6 + 2 \times 8 \\
3 \times 5 + 4 \times 7 & 3 \times 6 + 4 \times 8
\end{pmatrix}
= \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}
$$

### 注意事项

- 矩阵乘法**不满足交换律**：一般 $AB \neq BA$
- 满足结合律：$(AB)C = A(BC)$
- 满足分配律：$A(B + C) = AB + AC$，$(A + B)C = AC + BC$
- $AB = O$ 不能推出 $A = O$ 或 $B = O$

## 矩阵的转置

把矩阵 $A$ 的行换成同序数的列得到的新矩阵，叫做 $A$ 的转置矩阵，记作 $A^T$（或 $A'$）。

若 $A = (a_{ij})_{m \times n}$，则 $A^T = (a_{ji})_{n \times m}$。

### 转置的运算规律

1. $(A^T)^T = A$
2. $(A + B)^T = A^T + B^T$
3. $(\lambda A)^T = \lambda A^T$
4. $(AB)^T = B^T A^T$

### 对称矩阵与反对称矩阵

- **对称矩阵**：$A^T = A$，即 $a_{ij} = a_{ji}$
- **反对称矩阵**：$A^T = -A$，即 $a_{ij} = -a_{ji}$，主对角线元素全为 0

## 逆矩阵

### 定义

设 $A$ 是 $n$ 阶方阵，如果存在 $n$ 阶方阵 $B$，使得

$$
AB = BA = E
$$

其中 $E$ 是 $n$ 阶单位矩阵，则称矩阵 $A$ 是**可逆的**，并称 $B$ 是 $A$ 的**逆矩阵**，记作 $A^{-1}$。

### 可逆的充要条件

$n$ 阶方阵 $A$ 可逆 $\Longleftrightarrow |A| \neq 0$（非奇异矩阵）。

此时

$$
A^{-1} = \frac{1}{|A|} A^*
$$

其中 $A^*$ 是 $A$ 的伴随矩阵。

### 逆矩阵的运算规律

1. $(A^{-1})^{-1} = A$
2. $(\lambda A)^{-1} = \dfrac{1}{\lambda} A^{-1}$（$\lambda \neq 0$）
3. $(AB)^{-1} = B^{-1} A^{-1}$
4. $(A^T)^{-1} = (A^{-1})^T$

## 矩阵的初等变换

### 三种初等行变换

1. 交换两行：$r_i \leftrightarrow r_j$
2. 数乘某行：$r_i \times k$（$k \neq 0$）
3. 倍加变换：$r_i + k r_j$

### 用初等变换求逆矩阵

构造增广矩阵 $(A | E)$，对其施行初等行变换，当左边的 $A$ 变成单位矩阵 $E$ 时，右边的 $E$ 就变成了 $A^{-1}$：

$$
(A | E) \xrightarrow{\text{初等行变换}} (E | A^{-1})
$$

---

> 这是一个示例页面，展示了矩阵、行列式等复杂 LaTeX 的渲染效果。
