---
title: MATLAB 速查手册
description: 常用 MATLAB 语法、矩阵运算与绘图速查
---

# MATLAB 速查手册

## 基本操作

```matlab
% 注释用百分号
x = 10;           % 分号抑制输出
y = 3.14;
z = x + y;        % 不加会显示结果
clear;            % 清除所有变量
clc;              % 清屏
who;              % 列出当前变量
whos;             % 列出变量详细信息
```

## 向量与矩阵

### 创建向量

```matlab
% 行向量
v = [1 2 3 4 5];
v = 1:5;           % 1 到 5，步长 1
v = 1:2:10;        % 1 到 9，步长 2
v = linspace(0, 1, 100);  % 0 到 1 均匀取 100 个点

% 列向量
v = [1; 2; 3];
v = (1:3)';        % 转置
```

### 创建矩阵

```matlab
A = [1 2 3; 4 5 6; 7 8 9];

% 特殊矩阵
zeros(3, 4);       % 全零矩阵
ones(3, 3);        % 全一矩阵
eye(3);             % 单位矩阵
rand(3, 3);         % 随机矩阵 [0,1]
randn(3, 3);        % 标准正态随机矩阵
diag([1 2 3]);      % 对角矩阵
```

### 矩阵索引

```matlab
A(2, 3);            % 第 2 行第 3 列
A(2, :);            % 第 2 行所有元素
A(:, 3);            % 第 3 列所有元素
A(1:2, 2:3);        % 子矩阵
A(end, :);          % 最后一行
A([1 3], [2 4]);    % 不连续索引
```

## 矩阵运算

```matlab
A + B;              % 加法
A - B;              % 减法
A * B;              % 矩阵乘法
A .* B;             % 逐元素乘法
A ./ B;             % 逐元素除法
A .^ 2;             % 逐元素平方
A';                 % 转置
inv(A);             % 逆矩阵
det(A);             % 行列式
rank(A);            % 秩
eig(A);             % 特征值
[V, D] = eig(A);    % 特征向量和特征值矩阵
trace(A);           % 迹
norm(A);            % 范数
```

## 线性方程组求解

```matlab
% 解 Ax = b
A = [1 2; 3 4];
b = [5; 11];
x = A \ b;          % 左除，推荐
x = inv(A) * b;     % 不推荐，数值稳定性差
```

## 控制流

```matlab
% if-else
if x > 10
    disp('大于10');
elseif x == 10
    disp('等于10');
else
    disp('小于10');
end

% for 循环
for i = 1:10
    disp(i);
end

for i = linspace(0, 1, 100)
    % ...
end

% while 循环
while x > 0
    x = x - 1;
end

% break 和 continue
for i = 1:10
    if i == 5
        continue;   % 跳过本次
    end
    if i == 8
        break;      % 跳出循环
    end
end
```

## 函数

```matlab
% 保存为 myfunc.m
function [output1, output2] = myfunc(input1, input2)
    % 函数体
    output1 = input1 + input2;
    output2 = input1 * input2;
end

% 匿名函数
f = @(x) x.^2 + 2*x + 1;
f(3);               % 16

% 多变量匿名函数
g = @(x, y) sin(x) + cos(y);
```

## 绘图

### 二维绘图

```matlab
x = linspace(0, 2*pi, 100);
y = sin(x);

figure;              % 新建图窗
plot(x, y, 'r-', 'LineWidth', 2);
hold on;             % 保持当前图
plot(x, cos(x), 'b--', 'LineWidth', 2);
hold off;

xlabel('x');
ylabel('y');
title('正弦和余弦函数');
legend('sin(x)', 'cos(x)', 'Location', 'best');
grid on;
axis([0 2*pi -1.5 1.5]);
```

### 线型和颜色

| 符号 | 颜色 | 符号 | 线型 |
|------|------|------|------|
| r | 红色 | - | 实线 |
| g | 绿色 | -- | 虚线 |
| b | 蓝色 | : | 点线 |
| k | 黑色 | -. | 点划线 |
| y | 黄色 | o | 圆圈标记 |
| m | 品红 | * | 星号标记 |
| c | 青色 | s | 方块标记 |

### 子图

```matlab
figure;
subplot(2, 2, 1);   % 2行2列，第1个
plot(x, sin(x));
title('sin(x)');

subplot(2, 2, 2);
plot(x, cos(x));
title('cos(x)');

subplot(2, 2, 3);
plot(x, tan(x));
title('tan(x)');

subplot(2, 2, 4);
plot(x, exp(-x));
title('e^{-x}');
```

### 三维绘图

```matlab
% 三维曲线
t = linspace(0, 10*pi, 1000);
figure;
plot3(sin(t), cos(t), t, 'b-', 'LineWidth', 1.5);
xlabel('x'); ylabel('y'); zlabel('z');
title('螺旋线');
grid on;

% 三维曲面
[X, Y] = meshgrid(-5:0.1:5, -5:0.1:5);
Z = sin(sqrt(X.^2 + Y.^2)) ./ (sqrt(X.^2 + Y.^2) + eps);

figure;
surf(X, Y, Z);
xlabel('x'); ylabel('y'); zlabel('z');
title('sinc 函数曲面');
colorbar;
shading interp;    % 平滑着色
view(45, 30);      % 视角
```

## 数值计算

```matlab
% 求根
f = @(x) x^3 - 2*x - 5;
x = fzero(f, 2);           % 在 2 附近找根

% 数值积分
f = @(x) sin(x).^2;
q = integral(f, 0, pi);    % 定积分

% 微分方程求解
% dy/dt = -2y, y(0) = 1
dydt = @(t, y) -2*y;
[t, y] = ode45(dydt, [0 5], 1);
plot(t, y);

% 拟合
x = [1 2 3 4 5];
y = [2.1 3.9 6.2 8.1 10.3];
p = polyfit(x, y, 1);      % 一次多项式拟合
y_fit = polyval(p, x);
```

## 常用数学函数

```matlab
sin(x), cos(x), tan(x)     % 三角函数
asin(x), acos(x), atan(x)  % 反三角函数
exp(x), log(x), log10(x)   % 指数和对数
sqrt(x), abs(x), sign(x)   % 开方、绝对值、符号
floor(x), ceil(x), round(x) % 取整
max(x), min(x), sum(x), mean(x)  % 统计
std(x), var(x), median(x)   % 统计
sort(x), find(x > 0)        % 排序和查找
```

---

> 这是 MATLAB 速查示例，涵盖了矩阵运算、绘图和数值计算等常用功能。
