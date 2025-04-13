---
title: 容器库常用内容
order: 4
---

[C++ 文档：容器库](https://cpp.33dai.wiki/reference/zh/cpp/container.html)

### vector（向量、动态数组）

- `vector<int> a;`：定义了一个名字叫作 `a`，可以存 `int` 的动态数组。初始数组为空。
- `vector<int> a[100];`：定义了 $100$ 个动态数组 `a[0]~a[99]` 都是动态数组。
- `a.push_back(x);`： 添加元素，把 `x` 添加到动态数组末尾。
- `a[pos]`：访问元素，访问下标为 `pos` 的元素
- `a.clear()`：清空数组，清空整个数组，数组大小也归零了。
- `a.resize(100)`：更改数组大小，把数组大小修改为 `100`
- `a.size()`：当前数组大小 
- `a.empty()`：数组是否为空，数组是空的就返回真
- `a.begin()`：起始位置迭代器：
- `a.end()`：结束位置迭代器：

### deque（双端队列）

- `deque<int> q;`：定义了一个名字叫作 `q` 的双端队列。
- `q.front()`：返回队头（的引用）。
- `q.back()`：返回队尾（的引用）。
- `q.push_back(x);`：从队列末尾放入 `x`。
- `q.push_front(x);`：从队列开头放入 `x`。
- `q.pop_back();`：从队列末尾弹出元素。
- `q.pop_back();`：从队列开头弹出元素。
- `q[pos]`：访问元素，访问下标为 `pos` 的元素
- `q.clear()`：清空双端队列，双端队列大小也归零了。
- `q.size()`：当前队列大小 
- `q.empty()`：队列是否为空，队列是空的就返回真

### stack（栈）

- `stack<int> sta;`：定义了一个名字叫作 `sta` 的栈。
- `sta.top()`：返回栈顶（的引用）。
- `sta.push(x);`：把 `x` 压入栈。
- `sta.pop();`：弹出栈顶元素。
- `sta.size()`：当前栈大小 
- `sta.empty()`：栈是否为空，栈是空的就返回真

### queue（队列）

- `queue<int> q;`：定义了一个名字叫作 `q` 的队列。
- `q.front()`：返回队头（的引用）。
- `q.front()`：返回队尾（的引用）。
- `q.push(x);`：把 `x` 压入队列。
- `q.pop();`：弹出队头。
- `q.size()`：当前队列大小 
- `q.empty()`：队列是否为空，队列是空的就返回真
