/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-04 13:47:18
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-04 13:47:18
 * @Description: 字符串括号匹配
 */

/**
 * 判断括号是否匹配
 * @param left 左括号
 * @param right 右括号
 * @returns boolean
 */
function isMatch(left: string, right: string): boolean {
  if (left === "{" && right === "}") return true
  if (left === "[" && right === "]") return true
  if (left === "(" && right === ")") return true
  return false
}

/**
 * 利用栈的概念判断一个字符串是否括号匹配 时间复杂度0(n)
 * @param str 目标字符串
 * @returns boolean
 */
export function judgeBracketMatch(str: string): boolean {
  if (!str.length) return true

  // 定义左右括号和栈
  const leftBrackets = "{[("
  const rightBrackets = ")]}"
  const stack = []

  // 循环判断当前字符
  for (let i = 0, len = str.length; i < len; i++) {
    const char = str[i]

    // 左括号入栈
    if (leftBrackets.includes(char)) {
      stack.push(char)
    } else {
      // 右括号判断是否匹配栈顶
      if (rightBrackets.includes(char)) {
        if (isMatch(stack[stack.length - 1], char)) {
          stack.pop()
        } else {
          // 一个不匹配则返回false
          return false
        }
      }
    }
  }

  // 空栈则匹配
  return stack.length === 0
}

// 功能测试
// console.log(judgeBracketMatch("a{b[c(d)e]f}g"))
// console.log(judgeBracketMatch("{a[[[(d(}]{})e)]]b]}"))
