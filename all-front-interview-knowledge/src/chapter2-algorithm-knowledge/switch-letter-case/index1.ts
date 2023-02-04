/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 15:51:52
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 15:51:52
 * @Description: 切换字母大小写
 */

/**
 * 利用ASCII码实现字母大小写切换
 * @param str 目标字符串
 * @returns string 切换后的字符串
 */
export function switchLetterCase(str: string): string {
  let result = ""

  const length = str.length
  if (!length) return result

  for (let i = 0; i < length; i++) {
    const char = str[i]
    const charCode = char.charCodeAt(0)

    if (charCode >= 65 && charCode <= 90) {
      // 字符编码落在大写字母区间
      result += char.toLowerCase()
    } else if (charCode >= 97 && charCode <= 122) {
      // 字符编码落在小写字母区间
      result += char.toUpperCase()
    } else {
      // 非字母
      result += char
    }
  }

  return result
}

// // 功能测试
// console.info(switchLetterCase("123abcdEFTG^%$"))
