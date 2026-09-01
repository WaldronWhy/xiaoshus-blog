---
title: 机器学习基础
description: 机器学习的基本概念、分类与核心算法概览
---

# 机器学习基础

## 什么是机器学习

机器学习是人工智能的一个分支，它使计算机能够从数据中学习规律，而不需要被显式地编程。

一个经典的定义：

> 对于某类任务 $T$ 和性能度量 $P$，如果一个计算机程序在 $T$ 上以 $P$ 衡量的性能随着经验 $E$ 而自我完善，那么我们称这个计算机程序在从经验 $E$ 中学习。

## 机器学习的分类

### 按学习方式分类

| 类型 | 特点 | 典型算法 |
|------|------|----------|
| **监督学习** | 训练数据有标签 | 线性回归、逻辑回归、SVM、决策树、神经网络 |
| **无监督学习** | 训练数据无标签 | K-Means、PCA、层次聚类、关联规则 |
| **半监督学习** | 少量标签 + 大量无标签 | 标签传播、自训练 |
| **强化学习** | 通过与环境交互获得奖励 | Q-Learning、DQN、Policy Gradient |

## 线性回归

### 模型表示

给定 $m$ 个训练样本 $\{(x^{(i)}, y^{(i)})\}_{i=1}^{m}$，其中 $x^{(i)} \in \mathbb{R}^n$ 是特征向量，$y^{(i)} \in \mathbb{R}$ 是标签。

线性回归模型为：

$$
h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \cdots + \theta_n x_n = \theta^T x
$$

其中 $\theta = (\theta_0, \theta_1, \dots, \theta_n)^T$ 是模型参数，$x = (1, x_1, \dots, x_n)^T$ 是增广特征向量。

### 损失函数

使用均方误差（MSE）作为损失函数：

$$
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} \left( h_\theta(x^{(i)}) - y^{(i)} \right)^2
$$

### 梯度下降

参数更新规则：

$$
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)
$$

其中 $\alpha$ 是学习率。对线性回归，梯度为：

$$
\frac{\partial}{\partial \theta_j} J(\theta) = \frac{1}{m} \sum_{i=1}^{m} \left( h_\theta(x^{(i)}) - y^{(i)} \right) x_j^{(i)}
$$

### 最小二乘解析解

当特征矩阵 $X$ 列满秩时，存在解析解：

$$
\theta^* = (X^T X)^{-1} X^T y
$$

## 逻辑回归

### Sigmoid 函数

$$
g(z) = \frac{1}{1 + e^{-z}}
$$

### 模型表示

$$
h_\theta(x) = g(\theta^T x) = \frac{1}{1 + e^{-\theta^T x}}
$$

表示样本属于正类的概率 $P(y=1 | x; \theta)$。

### 交叉熵损失函数

$$
J(\theta) = -\frac{1}{m} \sum_{i=1}^{m} \left[ y^{(i)} \log h_\theta(x^{(i)}) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)})) \right]
$$

## 模型评估指标

### 分类问题

- **准确率**：$\text{Accuracy} = \dfrac{TP + TN}{TP + TN + FP + FN}$
- **精确率**：$\text{Precision} = \dfrac{TP}{TP + FP}$
- **召回率**：$\text{Recall} = \dfrac{TP}{TP + FN}$
- **F1 分数**：$F_1 = \dfrac{2 \times \text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$

### 回归问题

- **均方误差**：$\text{MSE} = \dfrac{1}{m} \sum_{i=1}^{m} (y^{(i)} - \hat{y}^{(i)})^2$
- **均方根误差**：$\text{RMSE} = \sqrt{\text{MSE}}$
- **平均绝对误差**：$\text{MAE} = \dfrac{1}{m} \sum_{i=1}^{m} |y^{(i)} - \hat{y}^{(i)}|$
- **决定系数**：$R^2 = 1 - \dfrac{\sum_{i}(y^{(i)} - \hat{y}^{(i)})^2}{\sum_{i}(y^{(i)} - \bar{y})^2}$

## 过拟合与欠拟合

| 问题 | 表现 | 解决方法 |
|------|------|----------|
| **欠拟合** | 训练误差和测试误差都大 | 增加模型复杂度、增加特征、减少正则化 |
| **过拟合** | 训练误差小，测试误差大 | 增加训练数据、正则化（L1/L2）、Dropout、早停 |

### 正则化

L2 正则化（岭回归）损失函数：

$$
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2 + \frac{\lambda}{2m} \sum_{j=1}^{n} \theta_j^2
$$

其中 $\lambda > 0$ 是正则化参数。

---

> 这是一个机器学习基础笔记示例，后续可以在此基础上扩展更多算法的详细推导。
