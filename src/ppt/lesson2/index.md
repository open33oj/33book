---
title: 入门基础2
layout: SlidePage
---


@slidestart blood

## 学会输入

- `cout` : `character` + `out` 字符输出 
- `cin` : `character` + `in` 字符输入 

--

```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a, b;
    char c;
    cin >> a >> c >> b;
    cout << a + b << "\n";
    return 0;
}
```

--

```cpp
int a, b;
char c;
cin >> a >> c >> b;
cout << a + b << "\n";
return 0;
```

输入这些分别会输出什么？

- `13+11`：<span class="fragment fade-in">$24$</span>
- `13-11`：<span class="fragment fade-in">$24$</span>
- `13 11`：<span class="fragment fade-in">$14$</span>

---

## OJ 使用

OJ ~ Online Judge ~ 在线评测

--

### 题目页面

![](/assets/image/ppt/lesson2/1.jpg)

--

### 常见评测结果

- `Accepted` ：程序输出完全正确
- `Wrong Answer` ：答案错误
- `Time Limit Exceeded` ：运行时间超限
- `Memory Limit Exceeded` ：运行内存超限
- `Runtime Error`：运行时错误
- `Compile Error`：编译失败

---

## 条件判断

登陆 OJ 网站时输错了密码会怎么样？

--

```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    string username; // 储存输入的用户名
    string password; // 储存输入的密码
    cout << "请输入用户名:";
    cin >> username;
    cout << "请输入密码:";
    cin >> password;
    // 判断用户名密码是否正确
    如果((username为"admin")并且(password为"123456"))
    {
        cout << "用户名密码正确！";
    }
    否则
    {
        cout << "用户名密码不正确！";
    }    
    return 0;
}
```

--

### 新单词

- `if`：如果
- `else`：否则

--

### 比较（关系）运算符

- `>`：大于
- `<`：小于
- `==`：等于
- `!=`：不等于
- `<=`：小于等于
- `>=`：大于等于

--

### 逻辑运算符

- `&&`：and，并且（与）
- `||`：or，或者（或）
- `!`：not，不是（非）

--

### 用户名密码验证

```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    string username; // 储存输入的用户名
    string password; // 储存输入的密码
    cout << "请输入用户名:";
    cin >> username;
    cout << "请输入密码:";
    cin >> password;
    // 判断用户名密码是否正确
    if ((username == "admin") and (password == "123456"))
    {
        cout << "用户名密码正确！";
    }
    else
    {
        cout << "用户名密码不正确！";
    }
    return 0;
}
```

---

## 条件判断语法

```cpp
if (条件表达式)
{
    条件成立时执行的语句
}
else
{
    条件不成立时执行的语句
}
```

--

```cpp
if (        )
{
}
else if (        )
{
}
else
{
}
```

--

### 下面代码会输出什么？（1）

```cpp
if (1 > 2)
    cout << "Yes";
else
    cout << "No";
```

--

### 下面代码会输出什么？（2）

```cpp
if (2 > 1)
    cout << "A";
    if (1 > 2)
        cout << "B";
else
    cout << "C";
```

--

### 下面代码会输出什么？（3）

```cpp
int x = 60;
if (x < 60)
{
    cout << "A\n";
}
else if (x < 100)
{
    cout << "B\n";
}
else
{
    cout << "C\n";
}
```

--

### 下面代码会输出什么？（4）

```cpp
int x = 50;
if (1 <= x <= 30)
    cout << "A";
else
    cout << "B";
```

---

## 布尔逻辑体系

Boolean [adj.] 布尔逻辑体系的（分别以 1 和 0 代指真和假）

--

- 真（`1 < 2`）：`true`、$1$
- 假（`1 > 2`）：`false`、$0$

--

- 真：$-\infty\sim -1$
- 假：$0$
- 真：$1\sim \infty$

--

```cpp
int x = 50;
if (1 <= x <= 30)
    cout << "A";
else
    cout << "B";
```

---

## 运算符优先级

- 单目运算符：
    - `a++`、`a--`
    - `not !`

-- 

- 数学运算符
    - 乘除：`* / %`
    - 加减：`+ -`

--

- 比较运算符
    - 大于小于号：`< <= > >=`
    - 相等不等：`== !=`

--

- 双目逻辑运算：
    - 且：`and &&`
    - 或：`or ||`

--

- 赋值运算：`= += -= *= /= %=`

@slideend