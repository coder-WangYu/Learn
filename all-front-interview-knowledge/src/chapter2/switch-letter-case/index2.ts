/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 16:05:01
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 16:05:01
 * @Description: 切换大小写字母 - 性能测试
 */

import { switchLetterCase } from "./index";
import { switchLetterCase as switchLetterCase1 } from "./index1";

const str = "123dbegalksn/!@!#%@^ASLDJNKasldk123dbegalksn/!@!NKasldk1"

console.time("利用ASCII码实现字母大小写切换：")
for (let i = 0; i < 10e5; i++) {
  switchLetterCase1(str)
}
console.timeEnd("利用ASCII码实现字母大小写切换：")

console.time("利用正则表达式实现字母大小写切换：")
for (let i = 0; i < 10e5; i++) {
  switchLetterCase(str)
}
console.timeEnd("利用正则表达式实现字母大小写切换：")
