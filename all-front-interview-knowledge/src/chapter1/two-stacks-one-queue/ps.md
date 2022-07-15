### 划重点：

#### 1.队列是先进先出的（FIFO）
#### 2.一个数组实现队列存在严重的性能问题，数组的shift操作时间复杂度是O(n)
#### 3.两个数组实现队列需要借用另一个数组将目标数组顺序翻转，然后通过数组的pop出栈
#### 4.两个数组实现的队列时间复杂度是O(2n)，但O(2n)和O(n)属于统一数量级