/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 16:34:46
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 16:34:46
 * @Description: 数字千分位格式化
 */

/**
 * 利用数组实现数字千分位格式化
 * @param num 目标数字
 * @returns string 格式化后的字符串
 */
export function digitalMicrometerFormatt(num: number): string {
  const str = String(Math.floor(num)) // 只考虑整数
  const arr = str.split("").reverse()

  // 将字符串反转，每三位加","号
  // 举例：输入1000
  // arr = ['0', '0', '0', '1']
  // 第一趟：
  // '0'
  // 第二趟：
  // '00'
  // 第三趟：
  // '000'
  // 第四趟：index = 3  index % 3 = 0
  // '1,000'
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return val + ',' + prev
      } else {
        return val // 第一趟prev为空时赋值为val
      }
    } else {
      return val + prev
    }
  }, '') // 默认赋值prev为空串
}

// 功能测试
console.info(digitalMicrometerFormatt(1000))
console.info(digitalMicrometerFormatt(100000))
console.info(digitalMicrometerFormatt(100000000))
