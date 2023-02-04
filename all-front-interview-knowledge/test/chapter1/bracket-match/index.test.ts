/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-04 15:30:39
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-04 15:30:39
 * @Description: 括号匹配 - 单元测试
 */

import { judgeBracketMatch } from "../../../src/chapter1-algorithm-knowledge/bracket-match";

describe('判断一个字符串是否括号匹配', function () {
  it('正常情况', function () {
    const str = "a{b[c()]}"
    const res = judgeBracketMatch(str)
    expect(res).toBe(true)
  });

  it('括号顺序不对应', function () {
    const str = "a[{d()e)[}d]}c]"
    const res = judgeBracketMatch(str)
    expect(res).toBe(false)
  });

  it('空字符串', function () {
    const res = judgeBracketMatch("")
    expect(res).toBe(true)
  });
});
