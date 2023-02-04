/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 15:45:20
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 15:45:20
 * @Description: 利用正则表达式切换字母大小写 - 单元测试
 */

import { switchLetterCase } from "../../../src/chapter2-algorithm-knowledge/switch-letter-case";

describe('利用正则表达式切换字母大小写', function () {
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
