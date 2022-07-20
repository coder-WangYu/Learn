/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-19 14:36:08
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-19 14:36:08
 * @Description: 利用字符串头尾匹配求[1, 10000]之间的对称数 - 单元测试
 */

import { findNumberSymmetry } from "../../../src/chapter2/number-symmetry/index1";

describe('利用字符串头尾匹配求[1, 10000]之间的对称数', function () {
  it('正常情况', function () {
    expect(findNumberSymmetry(50)).toEqual([
      1, 2, 3, 4, 5, 6, 7,
      8, 9, 11, 22, 33, 44
    ])
    expect(findNumberSymmetry(200)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22,
      33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191
    ])
  });

  it('小于1', function () {
    expect(findNumberSymmetry(0)).toEqual([])
    expect(findNumberSymmetry(-1000)).toEqual([])
  });
});
