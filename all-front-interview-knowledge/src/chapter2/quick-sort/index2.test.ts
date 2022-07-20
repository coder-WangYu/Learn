/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 10:14:22
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 10:14:22
 * @Description: 快速排序 - 性能测试
 */

import { quickSort } from "./index";
import { quickSort as quickSort1 } from "./index1";

const arr = []
const arr1 = []
for (let i = 0; i < 10e4; i++) {
  arr.push(Math.floor(Math.random() * 1000))
  arr1.push(Math.floor(Math.random() * 1000))
}

console.time("利用splice实现快速排序：")
quickSort(arr)
console.timeEnd("利用splice实现快速排序：")

console.time("利用slice实现快速排序：")
quickSort1(arr1)
console.timeEnd("利用slice实现快速排序：")
