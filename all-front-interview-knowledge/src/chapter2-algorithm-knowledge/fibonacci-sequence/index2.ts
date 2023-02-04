/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-11 11:18:49
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-11 11:18:49
 * @Description: 性能测试
 */

import { getFibonacciValue } from "./index";
import { getFibonacciValue as getFibonacciValue1 } from "./index1";

console.time("利用循环（非递归）实现斐波那契数列：")
getFibonacciValue1(100)
console.timeEnd("利用循环（非递归）实现斐波那契数列：")

console.time("利用递归实现斐波那契数列：")
getFibonacciValue(40)
console.timeEnd("利用递归实现斐波那契数列：")
