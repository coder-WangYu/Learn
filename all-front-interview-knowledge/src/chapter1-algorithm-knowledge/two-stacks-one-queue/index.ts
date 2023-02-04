/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-05 09:56:01
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-05 09:56:01
 * @Description: 用两个栈实现一个队列
 */
export class CustomQueue {
  private stack1 = []
  private stack2 = []

  /**
   * 入队 时间复杂度O(1)
   * @param n 目标元素
   * @returns Array
   */
  add(n: number): number[] {
    this.stack1.push(n)

    return this.stack1
  }

  /**
   * 出队 时间复杂度O(n)
   * @returns number | null
   */
  delete(): number | null {
    let result

    const stack1 = this.stack1
    const stack2 = this.stack2

    // 将stack1的元素全部移交到stack2
    while (stack1.length) {
      const n = stack1.pop()

      stack2.push(n)
    }

    // 将stack2栈顶的值作为出队结果
    result = stack2.pop()

    // 将stack2中剩余元素还给stack1
    while (stack2.length) {
      const n = stack2.pop()

      stack1.push(n)
    }

    // 若出队超出队列长度则直接返回null
    return result || null
  }

  // @ts-ignore get表示：可以通过属性的形式queue.length取，而不是方法
  get length(): number {
    return this.stack1.length
  }
}

// 功能测试
// const queue = new CustomQueue()
// console.info(queue.add(10))
// console.info(queue.add(20))
// console.info(queue.add(30))
// console.info(queue.length)
// console.info(queue.delete())
// console.info(queue.length)
// console.info(queue.delete())
// console.info(queue.length)
