/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-18 18:22:03
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-18 18:22:03
 * @Description: 利用slice实现快速排序 - 单元测试
 */

import { quickSort } from "../../../src/chapter2-algorithm-knowledge/quick-sort/index1";

describe('利用slice实现快速排序', function () {
  it('正常情况', function () {
    const arr = [3, 6, 1, 9, 2, 4, 8, 7, 5]
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });

  it('存在负数', function () {
    const arr = [-3, -5, -1, 1, 9, 8, 7]
    expect(quickSort(arr)).toEqual([-5, -3, -1, 1, 7, 8, 9])
  });

  it('空数组', function () {
    expect(quickSort([])).toEqual([])
  });
});
