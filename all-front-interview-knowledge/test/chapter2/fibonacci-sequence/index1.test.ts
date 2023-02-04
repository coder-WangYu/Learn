/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-11 11:16:13
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-11 11:16:16
 * @Description: 利用循环（非递归）实现斐波那契数列
 */

import {getFibonacciValue} from "../../../src/chapter2-algorithm-knowledge/fibonacci-sequence/index1";

describe('利用循环（非递归）实现斐波那契数列', function () {
  it('正常情况', function () {
    expect(getFibonacciValue(9)).toBe(34)
    expect(getFibonacciValue(10)).toBe(55)
  });

  it('输入0', function () {
    expect(getFibonacciValue(0)).toBe(0)
  });

  it('输入1', function () {
    expect(getFibonacciValue(1)).toBe(1)
  });

  it('输入负值', function () {
    expect(getFibonacciValue(-10)).toBe(0)
  });
});
