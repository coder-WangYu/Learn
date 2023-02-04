/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-20 15:24:00
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-20 15:24:00
 * @Description: 数字千分位格式化 - 单元测试
 */

import { digitalMicrometerFormatt } from "../../../src/chapter2-algorithm-knowledge/digital-micrometer-formatt/index1";

describe('利用字符串实现数字千分位格式化', function () {
  it('正常情况', function () {
    expect(digitalMicrometerFormatt(1002003000)).toBe("1,002,003,000")
    expect(digitalMicrometerFormatt(100000)).toBe("100,000")
  });

  it('小于1000', function () {
    expect(digitalMicrometerFormatt(100)).toBe("100")
  });
});
