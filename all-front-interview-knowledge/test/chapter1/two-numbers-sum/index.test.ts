/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-07 15:03:27
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-07 15:03:27
 * @Description: 利用二分思想查找和为n的两个数 - 单元测试
 */
import { twoNumbersSum } from "../../../src/chapter1/two-numbers-sum";

describe('利用二分思想查找和为n的两个数', function () {
  it('正常情况', function () {
    const arr = [1, 3, 5, 7, 9, 11, 12, 14, 15]
    expect(twoNumbersSum(arr, 15)).toEqual([1, 14])
    expect(twoNumbersSum(arr, 20)).toEqual([5, 15])
  });

  it('空数组', function () {
    expect(twoNumbersSum([], 10)).toEqual([])
  });

  it('无符合条件的数字', function () {
    const arr = [1, 3, 5, 7, 9, 11, 12, 14, 15]
    expect(twoNumbersSum(arr, 30)).toEqual([])
  });
});
