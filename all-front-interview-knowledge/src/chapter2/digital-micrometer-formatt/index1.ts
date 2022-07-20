/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 15:02:08
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 15:02:08
 * @Description: 数字千分位格式化
 */

/**
 * 利用字符串实现数字千分位格式化
 * @param num 目标数字
 * @returns string 格式化后的字符串
 */
export function digitalMicrometerFormatt(num: number): string {
  const str = String(Math.floor(num)) // 只考虑整数

  let result = ""
  const length = str.length

  // 从字符串末尾开始拼接
  // 1000
  // 第一趟：i = 3, j = 1, result = "0"
  // 第二趟：i = 2, j = 2, result = "00"
  // 第三趟：i = 1, j = 3, result = ",000"
  // 第四趟：i = 0, j = 4, result = "1,000"
  for (let i = length - 1; i >= 0; i--) {
    const j = length - i

    if (j % 3 === 0) {
      i === 0
        ? result = str[i] + result
        : result = "," + str[i] + result
    } else {
      result = str[i] + result
    }
  }

  return result
}

// 功能测试
console.info(digitalMicrometerFormatt(100))
console.info(digitalMicrometerFormatt(100000))
console.info(digitalMicrometerFormatt(10000000))
