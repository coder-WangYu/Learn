/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-04 16:33:47
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-04 16:33:47
 * @Description: 使用pop和unshift旋转数组 - 单元测试
 */
import { rotateArray } from "../../../src/chapter1/array-rotate";

describe('使用pop和unshift旋转数组', function () {
  it('正常情况', function () {
    const arr = [1, 2, 3, 4, 5, 6]
    const k = 3
    const res = rotateArray(arr, k)
    expect(res).toEqual([4, 5, 6, 1, 2, 3])
  });

  it('步数大于数组长度', function () {
    const arr = [1, 2, 3, 4, 5, 6]
    const k = 8
    const res = rotateArray(arr, k)
    expect(res).toEqual([5, 6, 1, 2, 3, 4])
  });

  it('异常步数', function () {
    const arr = [1, 2, 3, 4, 5, 6]
    const k = null
    const res = rotateArray(arr, k)
    expect(res).toEqual(arr)
  });

  it('空数组', function () {
    const k = 3
    const res = rotateArray([], k)
    expect(res).toEqual([])
  });
});
