/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-05 16:00:03
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-05 16:00:03
 * @Description: 创建单向链表 - 单元测试
 */
import { createLinkedList } from "../../../src/chapter1/reverse-singly-linked-list";

describe('创建单向链表', function () {
  it('正常情况', function () {
    const res = createLinkedList([10, 20, 30])
    expect(res).toEqual({
      value: 10,
      next: {
        value: 20,
        next: {
          value: 30
        }
      }
    })
  });

  it('空数组', function () {
    const res = createLinkedList([])
    expect(res).toEqual([])
  });
});
