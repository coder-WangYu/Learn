/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 11:15:30
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 11:15:30
 * @Description: 对称数
 */

/**
 * 利用字符串头尾匹配求[1, 10000]之间的对称数
 * @param max 最大值[1, max]
 * @returns number[] 所有对称数的集合
 */
export function findNumberSymmetry(max: number): number[] {
  const result: number[] = []
  if (max <= 0) return result

  for (let i = 1; i <= max; i++) {
    const str = String(i)
    const length = str.length

    let flag = true,
      startIndex = 0,
      endIndex = length - 1

    while(startIndex < endIndex) {
      if (str[startIndex] !== str[endIndex]) {
        flag = false
        break
      } else {
        startIndex ++
        endIndex --
      }
    }

    if (flag) result.push(Number(i))
  }

  return result
}

// // 功能测试
// console.info(findNumberSymmetry(200))
// console.info(findNumberSymmetry(1000))
