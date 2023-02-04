/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-07 11:14:35
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-07 11:14:35
 * @Description: 二分查找 - 性能测试
 */
import { binarySearch } from "./index";
import { binarySearch as binarySearch1 } from "./index1";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.time("二分查找循环")
for (let i = 0; i < 10e7; i++) {
  binarySearch(arr, 5e3)
}
console.timeEnd("二分查找循环")

console.time("二分查找递归")
for (let i = 0; i < 10e7; i++) {
  binarySearch1(arr, 5e3)
}
console.timeEnd("二分查找递归")
