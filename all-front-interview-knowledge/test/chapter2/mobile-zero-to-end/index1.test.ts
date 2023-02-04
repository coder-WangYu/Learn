/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-15 14:14:27
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-15 14:14:27
 * @Description: 利用双指针实现移动数组中的0到数组末尾 - 单元测试
 */

import { mobileZeroToEnd } from "../../../src/chapter2-algorithm-knowledge/mobile-zero-to-end/index1";

describe('利用双指针实现移动数组中的0到数组末尾', function () {
  it('正常情况', function () {
    const arr = [1, 0, 2, 0, 3, 0, 0, 4, 0, 5]
    mobileZeroToEnd(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5, 0, 0, 0, 0, 0])
  });

  it('没有0', function () {
    const arr = [1, 2, 3, 4]
    mobileZeroToEnd(arr)
    expect(arr).toEqual([1, 2, 3, 4])
  });

  it('全是0', function () {
    const arr = [0, 0, 0, 0]
    mobileZeroToEnd(arr)
    expect(arr).toEqual([0, 0, 0, 0])
  });

  it('空数组', function () {
    const arr = []
    mobileZeroToEnd(arr)
    expect(arr).toEqual([])
  });
});
