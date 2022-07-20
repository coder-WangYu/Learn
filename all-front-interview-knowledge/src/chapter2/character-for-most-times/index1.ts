/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-15 17:05:06
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-15 17:05:06
 * @Description: 获取字符串中连续次数最多的字符
 */

interface CharInfo {
  char: string
  times: number
}

/**
 * 利用双指针获取字符串中连续次数最多的字符 时间复杂度O(n)
 * @param str 目标字符串
 * @returns string 连续次数最多的字符
 */
export function getCharacterMostTimes(str: string): CharInfo {
  const result: CharInfo = {
    char: "",
    times: 0
  }
  const length = str.length
  if (!length) return result

  // i,j初始位置都是0 i持续向后移动 str[i] !== str[j]时 j追上i i继续移动...
  //  a   a   a   b   b   c   d   e
  // i,j
  //  j   i
  //  j       i
  //  j           i
  //             i,j
  //              j   i
  //              j       i
  //                     i,j
  //                      j   i
  //                         i,j
  //                          j   i
  //                             j,i
  let i = 0, j = 0, charTimes = 0

  for (i; i < length; i++) {
    if (str[i] === str[j]) {
      charTimes ++
    }

    if (str[i] !== str[j] || i === length - 1) {
      // 次数大于当前次数的清空数组并将当前字符推入char数组
      if (charTimes > result.times) {
        result.char = str[j]
        result.times = charTimes
      }

      // 重置字符连续次数
      charTimes = 0;

      // 跳步 将j移动到i的位置
      if (i < length - 1) {
        j = i
        i --
      }
    }
  }

  return result
}

// // 功能测试
// console.info(getCharacterMostTimes("abcd123"))
// console.info(getCharacterMostTimes("abbbbbccddddde"))
// console.info(getCharacterMostTimes("aaabbbbcccccde"))
