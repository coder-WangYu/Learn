/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-15 15:13:18
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-15 15:13:18
 * @Description: 获取字符串中连续次数最多的字符
 */

interface CharInfo {
  char: string[]
  times: number
}

/**
 * 利用嵌套循环获取字符串中连续次数最多的字符 时间复杂度O(n)
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

  // 每一趟i和j的初始位置都相同 charTimes记录当前字符连续次数
  // 第一趟i指向第一个字符 j从第一个字符持续向后找
  // 第二趟i指向新的字符 j从新的位置持续向后找
  // i 和 j 都存在"跳步"的情况
  // a  a  a  b  b  c  c  c  c  d  d  e
  // i  j  |  |  |  |  |  |  |  |  |  |
  // i ——— j  |  |  |  |  |  |  |  |  |
  // ———————— i  j  |  |  |  |  |  |  |
  // —————————————— i  j  |  |  |  |  |
  //                i ——— j  |  |  |  |
  //                i —————— j  |  |  |
  //                            i  j  |
  //                                  i
  let i = 0, j = i, charTimes = 0

  for (i; i < length; i++) {
    // 重置当前字符连续次数
    charTimes = 0

    for (j; j < length; j++) {
      if (str[i] === str[j]) {
        charTimes ++
      }

      // i和j指向的字符不相等或j等于字符串长度时处理结果并跳出
      if (str[i] !== str[j] || j === length - 1) {
        // 次数相等的都推到char数组里
        if (charTimes === result.times) {
          result.char.push(str[i])
        }

        // 次数大于当前次数的清空数组并将当前字符推入char数组
        if (charTimes > result.times) {
          result.char = []
          result.char.push(str[i])
          result.times = charTimes
        }

        // 跳步 将i移动到下一个字符的位置
        if (i < length - 1) {
          i = j - 1
        }

        break
      }
    }
  }

  return result
}

// // 功能测试
// console.info(getCharacterMostTimes("abbbbbccddddde"))
// console.info(getCharacterMostTimes("aaabbbbcccccde"))
