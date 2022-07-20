/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 14:44:33
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 14:44:33
 * @Description: 对称数 - 性能测试
 */

import { findNumberSymmetry } from "./index";
import { findNumberSymmetry as findNumberSymmetry1 } from "./index1";
import { findNumberSymmetry as findNumberSymmetry2 } from "./index2";

console.time("利用reverse反转字符串求[1, max]之间的所有对称数：")
findNumberSymmetry(10e6)
console.timeEnd("利用reverse反转字符串求[1, max]之间的所有对称数：")

console.time("利用字符串头尾匹配求[1, max]之间的对称数：")
findNumberSymmetry1(10e6)
console.timeEnd("利用字符串头尾匹配求[1, max]之间的对称数：")

console.time("利用翻转数求[1, max]之间的对称数：")
findNumberSymmetry2(10e6)
console.timeEnd("利用翻转数求[1, max]之间的对称数：")
