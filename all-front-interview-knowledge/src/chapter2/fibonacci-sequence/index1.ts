/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-11 10:53:09
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-11 10:53:09
 * @Description: 斐波那契数列
 */

/**
 * 利用循环（非递归）实现斐波那契数列 时间复杂度O(n)
 * @param n 目标位置
 * @returns number 目标位置对应的值
 */
export function getFibonacciValue(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1

  // 定义三个指针
  let n1 = 1, // 记录 n - 1 的值
    n2 = 0, // 记录 n - 2 的值
    result = 0 // 记录 n 对应位置的值

  // 从2开始：0 和 1 是固定的
  for (let i = 2; i <= n; i++) {
    // 移动指针
    result = n1 + n2
    n2 = n1
    n1 = result
  }

  return result
}

// 功能测试
// console.info(getFibonacciValue(9))
// console.info(getFibonacciValue(100))
