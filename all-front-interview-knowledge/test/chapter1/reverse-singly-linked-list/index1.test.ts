/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-05 17:03:453
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-05 17:03:453
 * @Description: 反转单向链表 - 单元测试
 */
import { reverseLinkedList } from "../../../src/chapter1/reverse-singly-linked-list/index1";
import { createLinkedList, LinkedListNode } from "../../../src/chapter1/reverse-singly-linked-list";

describe('利用指针反转单向链表并返回反转后的头部节点', function () {
  it('正常情况', function () {
    const list = createLinkedList([100, 200, 300])
    const test = reverseLinkedList(<LinkedListNode>list)
    const res = createLinkedList([300, 200, 100])
    expect(test).toEqual(res)
  });

  it('单个元素', function () {
    const list = createLinkedList([100])
    const res = reverseLinkedList(<LinkedListNode>list)
    expect(res).toEqual(list)
  });
});
