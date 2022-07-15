/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-05 16:05:56
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-05 16:05:56
 * @Description: 反转单向链表
 */
import { createLinkedList, LinkedListNode } from "./index";

const linkedList = createLinkedList([100, 200, 300])

/**
 * 利用指针反转单向链表并返回反转后的头部节点
 * @param list 目标链表
 * @returns LinkedListNode
 */
export function reverseLinkedList(list: LinkedListNode): LinkedListNode {
  // 定义三个指针
  let prevNode: LinkedListNode | undefined = undefined
  let curNode: LinkedListNode | undefined = undefined
  let nextNode: LinkedListNode | undefined = list

  // 以next为主体遍历链表
  while (nextNode) {
    // 第一个元素反转后作为尾部，没有后继节点
    if (curNode && !prevNode) {
      delete curNode.next
    }

    // 中间元素，反转指针，后继节点指向前驱节点
    if (curNode && prevNode) {
      curNode.next = prevNode
    }

    // 将指针整体后移一位
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode?.next // ?.表示 nextNode.next 有可能为空
  }

  // nextNode首次为空，此时尾部的两个节点并未反转
  curNode!.next = prevNode // !.表示 curNode.next 一定有值

  return curNode
}

// 功能测试
// console.info(reverseLinkedList(<LinkedListNode>linkedList))
