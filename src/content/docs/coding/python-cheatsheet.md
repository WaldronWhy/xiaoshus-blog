---
title: Python 速查手册
description: 常用 Python 语法、数据结构与标准库速查
---

# Python 速查手册

## 基本数据类型

```python
# 整数
x = 10
# 浮点数
y = 3.14
# 字符串
s = "hello"
# 布尔值
flag = True
# 空值
none_val = None
```

## 数据结构

### 列表 (list)

```python
nums = [1, 2, 3, 4, 5]

# 索引
nums[0]       # 1
nums[-1]      # 5
nums[1:3]     # [2, 3]

# 常用方法
nums.append(6)      # 末尾添加
nums.insert(0, 0)   # 指定位置插入
nums.pop()           # 弹出末尾元素
nums.remove(3)       # 删除第一个匹配元素
nums.sort()          # 排序
nums.reverse()       # 反转
len(nums)            # 长度
```

### 字典 (dict)

```python
person = {"name": "Alice", "age": 20}

person["name"]           # 访问
person["gender"] = "F"   # 添加/修改
person.get("email", "N/A")  # 安全访问
person.keys()            # 所有键
person.values()          # 所有值
person.items()           # 所有键值对
```

### 集合 (set)

```python
s = {1, 2, 3}
s.add(4)
s.remove(1)
s & {2, 3, 4}    # 交集 {2, 3, 4}
s | {4, 5, 6}    # 并集 {2, 3, 4, 5, 6}
s - {3, 4}        # 差集 {2}
```

## 控制流

```python
# if-elif-else
if x > 10:
    print("大于10")
elif x == 10:
    print("等于10")
else:
    print("小于10")

# for 循环
for i in range(5):
    print(i)

for item in ["a", "b", "c"]:
    print(item)

for idx, val in enumerate(["a", "b", "c"]):
    print(idx, val)

# while 循环
while x > 0:
    x -= 1
```

## 函数

```python
def greet(name, greeting="Hello"):
    """问候函数"""
    return f"{greeting}, {name}!"

# 调用
greet("Alice")                    # "Hello, Alice!"
greet("Bob", greeting="Hi")       # "Hi, Bob!"

# lambda 表达式
square = lambda x: x ** 2
square(5)  # 25

# *args 和 **kwargs
def func(*args, **kwargs):
    print(args)    # 元组
    print(kwargs)  # 字典
```

## 列表推导式

```python
# 基本形式
squares = [x ** 2 for x in range(10)]

# 带条件
evens = [x for x in range(10) if x % 2 == 0]

# 字典推导式
square_dict = {x: x ** 2 for x in range(5)}

# 集合推导式
unique_lengths = {len(word) for word in ["hello", "hi", "hey"]}
```

## 常用标准库

```python
import math
math.sqrt(16)      # 4.0
math.pi            # 3.14159...
math.e             # 2.71828...
math.log(8, 2)     # 3.0

import random
random.random()           # [0, 1) 随机浮点数
random.randint(1, 10)     # [1, 10] 随机整数
random.choice(["a", "b"]) # 随机选择
random.shuffle(list)       # 打乱列表

import os
os.getcwd()            # 当前目录
os.listdir(".")        # 列出文件
os.makedirs("a/b")     # 创建目录
os.path.exists("x")    # 路径是否存在

import json
json.dumps(data)       # 序列化为字符串
json.loads(string)     # 反序列化
```

## 文件操作

```python
# 读取文件
with open("file.txt", "r", encoding="utf-8") as f:
    content = f.read()

# 逐行读取
with open("file.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())

# 写入文件
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello, World!")
```

## 异常处理

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零")
except Exception as e:
    print(f"其他错误: {e}")
else:
    print("没有异常时执行")
finally:
    print("无论如何都执行")
```

## 类与对象

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"我叫{self.name}，今年{self.age}岁"

class Student(Person):
    def __init__(self, name, age, major):
        super().__init__(name, age)
        self.major = major

    def greet(self):
        return f"{super().greet()}，专业是{self.major}"
```

---

> 这是 Python 速查示例，你可以根据自己的需要添加更多内容。
