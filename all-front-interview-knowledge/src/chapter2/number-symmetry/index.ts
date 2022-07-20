/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 10:39:16
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 10:39:16
 * @Description: 对称数
 */

/**
 * 利用reverse反转字符串求[1, 10000]之间的所有对称数
 * @param max 最大值[1, max]
 * @returns number[] 所有对称数的集合
 */
export function findNumberSymmetry(max: number): number[] {
  const result: number[] = []
  if (max <= 0) return result

  for (let i = 1; i <= max; i++) {
    const str = String(i)

    // 将字符串反转 判断是否等于原字符串
    if (str === str.split("").reverse().join("")) {
      result.push(Number(str))
    }
  }

  return result
}

// // 功能测试
// console.info(findNumberSymmetry(200))
