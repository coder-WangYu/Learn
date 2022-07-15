/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-11 10:26:05
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-11 10:26:05
 * @Description: 利用递归实现斐波那契数列 - 单元测试
 */

import { getFibonacciValue } from "../../../src/chapter2/fibonacci-sequence";

describe('利用递归实现斐波那契数列', function () {
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
