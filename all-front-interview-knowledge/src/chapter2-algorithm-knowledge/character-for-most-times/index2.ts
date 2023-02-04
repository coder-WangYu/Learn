/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-18 16:27:28
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-18 16:27:28
 * @Description: 获取字符串中连续次数最多的字符 - 性能测试
 */

import { getCharacterMostTimes } from "./index";
import { getCharacterMostTimes as getCharacterMostTimes1 } from "./index1"

let str = ""

for (let i = 0; i < 10e6; i++) {
  str += String(i)
}

console.time("利用双指针获取字符串中连续次数最多的字符：")
getCharacterMostTimes1(str)
console.timeEnd("利用双指针获取字符串中连续次数最多的字符：")

console.time("利用嵌套循环获取字符串中连续次数最多的字符：")
getCharacterMostTimes(str)
console.timeEnd("利用嵌套循环获取字符串中连续次数最多的字符：")
