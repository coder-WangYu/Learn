/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-15 17:05:06
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-15 17:05:06
 * @Description: 获取字符串中连续次数最多的字符
 */

interface CharInfo {
  char: string[]
  times: number
}

/**
 * 利用双指针获取字符串中连续次数最多的字符 时间复杂度O(n)
 * @param str 目标字符串
 * @returns string 连续次数最多的字符
 */
export function getCharacterMostTimes(str: string): CharInfo {
  const result: CharInfo = {
    char: [],
    times: 0
  }
  const length = str.length
  if (!length) return result

  let i = 0, j = i, charTimes = 0



  return result
}

// // 功能测试
// console.info(getCharacterMostTimes("abbbbbccddddde"))
// console.info(getCharacterMostTimes("aaabbbbcccccde"))
