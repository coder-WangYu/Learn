/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-06 10:18:53
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-06 10:18:53
 * @Description: 单向链表实现队列
 */

interface ListNode {
  value: number
  next?: ListNode
}

/**
 * 单向链表实现队列：时间复杂度O(1)
 */
export class MyQueue {
  // 创建头尾指针
  private head: ListNode | null = null
  private tail: ListNode | null = null

  // len：单独存储，遍历链表时间成本太高，时间复杂度为O(n)
  private len: number = 0

  /**
   * 入队
   * @param n 目标节点
   * @returns
   */
  add(n: number) {
    // 创建节点
    const newNode: ListNode = {
      value: n,
      next: null
    }

    // 如果头部指针为空，则添加为头部指针
    if (!this.head) {
      this.head = newNode
    }

    // 如果尾部指针存在，则替换尾部指针
    const tailNode = this.tail
    if (tailNode) {
      tailNode.next = newNode
    }
    this.tail = newNode

    // 链表长度增加
    this.len ++
  }

  /**
   * 出队
   * @returns number | null
   */
  delete(): number | null {
    if (this.len <= 0) return null

    // 获取当前节点
    const headNode = this.head
    if (!headNode) return null
    const value = headNode.value

    // 将头部指针替换为当前头部节点的后继节点
    this.head = headNode.next

    // 链表长度减少
    this.len --

    return value
  }

  /**
   * 返回length
   * @returns number
   */
  // @ts-ignore
  get length(): number {
    return this.len
  }
}

// 功能测试
// const queue = new MyQueue()
// queue.add(100)
// queue.add(200)
// queue.add(300)
// console.info("当前长度：" + queue.length)
// console.info("删除节点：" + queue.delete())
// console.info("当前长度：" + queue.length)
// console.info("删除节点：" + queue.delete())
// console.info("当前长度：" + queue.length)
// console.info("删除节点：" + queue.delete())
// console.info("删除节点：" + queue.delete())
// console.info("当前长度：" + queue.length)

// 性能测试
const q1 = new MyQueue()
console.time("queue with linked list")
for (let i = 0; i < 100000; i++) {
  q1.add(i)
}
for (let i = 0; i < 100000; i++) {
  q1.delete()
}
console.timeEnd("queue with linked list")

const q2 = []
console.time("queue with one array")
for (let i = 0; i < 100000; i++) {
  q2.push(i)
}
for (let i = 0; i < 100000; i++) {
  q2.shift()
}
console.timeEnd("queue with one array")
