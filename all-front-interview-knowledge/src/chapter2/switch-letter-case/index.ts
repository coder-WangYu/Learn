/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 15:35:23
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 15:35:23
 * @Description: 切换字母大小写
 */

/**
 * 利用正则表达式实现字母大小写切换
 * @param str 目标字符串
 * @returns str 切换后的字符串
 */
export function switchLetterCase(str: string): string {
  let result = ""

  const length = str.length
  if (!length) return result

  let lowerReg = /[a-z]/
  let upperReg = /[A-Z]/

  for (let i = 0; i < length; i++) {
    const char = str[i]

    if (lowerReg.test(char)) {
      // 字符落在小写字母区间
      result += char.toUpperCase()
    } else if (upperReg.test(char)) {
      // 字符落在大写字母区间
      result += char.toLowerCase()
    } else {
      // 非字母
      result += char
    }
  }

  return result
}

// // 功能测试
// console.info(switchLetterCase("12aBc34De#$"))
