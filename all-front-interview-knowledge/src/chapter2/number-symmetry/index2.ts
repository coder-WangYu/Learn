/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 14:22:36
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 14:22:36
 * @Description: 对称数
 */

/**
 * 利用翻转数求[1, 10000]之间的对称数
 * @param max 最大值[1, max]
 * @returns number[] 所有对称数的集合
 */
export function findNumberSymmetry(max: number): number[] {
  const result: number[] = []
  if (max <= 0) return result

  for (let i = 1; i <= max; i++) {
    let number = i,
      reversNumber = 0

    // 生成任意数字的翻转数
    // 举例：123
    // number(n) = 123, reversNumber(r) = 0
    // 第一趟：123 > 0
    // r = 0 * 10 + 3 = 3, n = Math.floor(123 / 10) = 12
    // 第二趟：12 > 0
    // r = 3 * 10 + 2 = 32, n = Math.floor(12 / 10) = 1
    // 第三趟：1 > 0
    // r = 32 * 10 + 1 = 321, n = Math.floor(1 / 10) = 0
    // 结果：n = 0, r = 321
    while (number > 0) {
      reversNumber = reversNumber * 10 + number % 10
      number = Math.floor(number / 10)
    }

    if (i === reversNumber) result.push(i)
  }

  return result
}

// // 功能测试
// console.info(findNumberSymmetry(50))
// console.info(findNumberSymmetry(200))
// console.info(findNumberSymmetry(1000))
