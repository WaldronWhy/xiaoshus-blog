---
title: 极限与连续
description: 高等数学核心概念：极限的定义、性质与计算方法
---

# 极限与连续

## 数列极限的定义

设 $\{x_n\}$ 为一数列，如果存在常数 $a$，对于任意给定的正数 $\varepsilon$（不论它多么小），总存在正整数 $N$，使得当 $n > N$ 时，不等式

$$
|x_n - a| < \varepsilon
$$

都成立，那么就称常数 $a$ 是数列 $\{x_n\}$ 的极限，或者称数列 $\{x_n\}$ 收敛于 $a$，记作

$$
\lim_{n \to \infty} x_n = a
$$

## 函数极限的定义

### $x \to x_0$ 时的极限

设函数 $f(x)$ 在点 $x_0$ 的某一去心邻域内有定义，如果存在常数 $A$，对于任意给定的正数 $\varepsilon$，总存在正数 $\delta$，使得当 $x$ 满足不等式 $0 < |x - x_0| < \delta$ 时，对应的函数值 $f(x)$ 都满足不等式

$$
|f(x) - A| < \varepsilon
$$

那么常数 $A$ 就叫做函数 $f(x)$ 当 $x \to x_0$ 时的极限，记作

$$
\lim_{x \to x_0} f(x) = A
$$

## 极限的运算法则

设 $\lim f(x) = A$，$\lim g(x) = B$，则：

1. **和差**：$\lim [f(x) \pm g(x)] = A \pm B$
2. **乘积**：$\lim [f(x) \cdot g(x)] = A \cdot B$
3. **商**：$\lim \dfrac{f(x)}{g(x)} = \dfrac{A}{B}$（$B \neq 0$）
4. **常数倍**：$\lim [c \cdot f(x)] = c \cdot A$

## 两个重要极限

### 第一个重要极限

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

**证明思路**：利用单位圆中的面积关系 $S_{\triangle AOB} < S_{\text{扇形}AOB} < S_{\triangle AOD}$，得到

$$
\cos x < \frac{\sin x}{x} < 1
$$

再由夹逼准则得证。

### 第二个重要极限

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

其中 $e \approx 2.71828$ 是自然对数的底。

等价形式：

$$
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$

## 无穷小与无穷大

### 无穷小的比较

设 $\alpha$ 和 $\beta$ 都是在同一个自变量变化过程中的无穷小：

- 若 $\lim \dfrac{\beta}{\alpha} = 0$，则称 $\beta$ 是比 $\alpha$ **高阶**的无穷小，记作 $\beta = o(\alpha)$
- 若 $\lim \dfrac{\beta}{\alpha} = \infty$，则称 $\beta$ 是比 $\alpha$ **低阶**的无穷小
- 若 $\lim \dfrac{\beta}{\alpha} = c \neq 0$，则称 $\beta$ 与 $\alpha$ 是**同阶**无穷小
- 若 $\lim \dfrac{\beta}{\alpha} = 1$，则称 $\beta$ 与 $\alpha$ 是**等价**无穷小，记作 $\beta \sim \alpha$

### 常用等价无穷小（$x \to 0$ 时）

$$
\sin x \sim x, \quad \tan x \sim x, \quad \arcsin x \sim x, \quad \arctan x \sim x
$$

$$
1 - \cos x \sim \frac{1}{2}x^2, \quad e^x - 1 \sim x, \quad \ln(1+x) \sim x
$$

$$
(1+x)^\alpha - 1 \sim \alpha x
$$

## 函数的连续性

### 连续的定义

设函数 $y = f(x)$ 在点 $x_0$ 的某一邻域内有定义，如果

$$
\lim_{x \to x_0} f(x) = f(x_0)
$$

则称函数 $f(x)$ 在点 $x_0$ 处连续。

### 间断点的分类

| 类型 | 条件 | 示例 |
|------|------|------|
| 可去间断点 | 左右极限存在且相等，但不等于函数值或函数在该点无定义 | $f(x) = \dfrac{\sin x}{x}$ 在 $x=0$ |
| 跳跃间断点 | 左右极限存在但不相等 | 符号函数 $\text{sgn}(x)$ 在 $x=0$ |
| 无穷间断点 | 极限为无穷大 | $f(x) = \dfrac{1}{x}$ 在 $x=0$ |
| 振荡间断点 | 极限不存在且不为无穷大 | $f(x) = \sin\dfrac{1}{x}$ 在 $x=0$ |

## 闭区间上连续函数的性质

1. **有界性定理**：闭区间上的连续函数在该区间上有界
2. **最大值最小值定理**：闭区间上的连续函数在该区间上一定能取得最大值和最小值
3. **零点定理**：若 $f(x)$ 在 $[a, b]$ 上连续，且 $f(a) \cdot f(b) < 0$，则至少存在一点 $\xi \in (a, b)$，使得 $f(\xi) = 0$
4. **介值定理**：若 $f(x)$ 在 $[a, b]$ 上连续，且 $f(a) \neq f(b)$，则对于 $f(a)$ 与 $f(b)$ 之间的任意一个数 $C$，至少存在一点 $\xi \in (a, b)$，使得 $f(\xi) = C$

---

> 这是一个示例页面，展示了 LaTeX 公式的渲染效果。你可以在此基础上添加自己的笔记内容。
