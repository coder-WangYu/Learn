/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-15 14:18:35
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-15 14:18:35
 * @Description: 移动数组的0到末尾 - 性能测试
 */

import { mobileZeroToEnd } from "./index";
import { mobileZeroToEnd as mobileZeroToEnd1 } from "./index1"

console.time("利用双指针实现移动数组中的0到数组末尾：")
const arr1 = []
for (let i = 0; i < 10e4; i++) {
  i % 5 === 0
    ? arr1.push(0)
    : arr1.push(i)
}
mobileZeroToEnd1(arr1)
console.timeEnd("利用双指针实现移动数组中的0到数组末尾：")

console.time("利用splice实现移动数组中的0到数组末尾：")
const arr = []
for (let i = 0; i < 10e4; i++) {
  i % 5 === 0
    ? arr.push(0)
    : arr.push(i)
}
mobileZeroToEnd(arr)
console.timeEnd("利用splice实现移动数组中的0到数组末尾：")
