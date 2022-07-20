/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-15 16:38:55
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-15 16:38:55
 * @Description: 利用双指针获取字符串中连续次数最多的字符 - 单元测试
 */

import { getCharacterMostTimes } from "../../../src/chapter2/character-for-most-times/index1";

describe('利用双指针获取字符串中连续次数最多的字符', function () {
  it('正常情况', function () {
    expect(getCharacterMostTimes("abbcccdddd")).toEqual({
      char: "d",
      times: 4
    })
    expect(getCharacterMostTimes("aaaaabcde")).toEqual({
      char: "a",
      times: 5
    })
  });

  it('多个字符连续次数最大且相同', function () {
    expect(getCharacterMostTimes("aaabbbcccde")).toEqual({
      char: "a",
      times: 3
    })
    expect(getCharacterMostTimes("abbbbcdeffff")).toEqual({
      char: "b",
      times: 4
    })
  });

  it('全是连续字符', function () {
    expect(getCharacterMostTimes("aaaaaaaaaaa")).toEqual({
      char: "a",
      times: 11
    })
  });

  it('无连续字符', function () {
    expect(getCharacterMostTimes("abcd123")).toEqual({
      char: "a",
      times: 1
    })
  });

  it('空字符串', function () {
    expect(getCharacterMostTimes("")).toEqual({
      char: "",
      times: 0
    })
  });
});
