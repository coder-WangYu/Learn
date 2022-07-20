/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 16:03:15
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 16:03:15
 * @Description: 利用ASCII码切换字母大小写 - 单元测试
 */

import { switchLetterCase } from "../../../src/chapter2/switch-letter-case/index1";

describe('利用ASCII码切换字母大小写', function () {
  it('正常情况', function () {
    expect(switchLetterCase("12abcDEF")).toBe("12ABCdef")
  });

  it('全小写', function () {
    expect(switchLetterCase("abcde")).toBe("ABCDE")
  });

  it('全大写', function () {
    expect(switchLetterCase("ABCDE")).toBe("abcde")
  });

  it('无字母', function () {
    expect(switchLetterCase("123")).toBe("123")
  });

  it('空字符串', function () {
    expect(switchLetterCase("")).toBe("")
  });
});
