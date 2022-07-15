/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-11 10:19:08
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-11 10:19:08
 * @Description: 斐波那契数列
 */

// f(n) = f(n - 1) + f(n - 2)
// 0 1 1 2 3 5 8 13 21 34 55 ......
/**
 * 利用递归实现斐波那契数列 时间复杂度O(2^n)
 * @param n 目标位置
 * @returns number 目标位置的值
 */
export function getFibonacciValue(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1

  return getFibonacciValue(n - 1) + getFibonacciValue(n - 2)
}

// 功能测试
// console.info(getFibonacciValue(9))
// console.info(getFibonacciValue(10))
