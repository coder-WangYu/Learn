/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-06 15:57:17
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-06 15:57:17
 * @Description: 利用递归实现二分查找- 单元测试
 */
import { binarySearch } from "../../../src/chapter1-algorithm-knowledge/binary-search/index1";

describe('利用递归实现二分查找', function () {
  it('正常情况', function () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(binarySearch(arr, 5)).toBe(4)
    expect(binarySearch(arr, 1)).toBe(0)
    expect(binarySearch(arr, 10)).toBe(9)
  });

  it('空数组', function () {
    expect(binarySearch([], 10)).toBe(-1)
  });

  it('数组中不存在目标数', function () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(binarySearch(arr, 100)).toBe(-1)
  });
});
