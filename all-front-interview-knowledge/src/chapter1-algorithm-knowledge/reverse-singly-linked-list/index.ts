/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-05 11:07:26
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-05 11:07:26
 * @Description: 创建单向链表
 */

export interface LinkedListNode {
  value: number
  next?: LinkedListNode // ? 表示 next 可有可无
}

/**
 * 根据数组创建单向链表
 * @param arr 目标数组
 * @returns LinkedListNode
 */
export function createLinkedList(arr: number[]): LinkedListNode | [] {
  let len: number = arr.length

  if (!len) return []

  let curNode: LinkedListNode = {
    value: arr[len - 1]
  }

  if (len === 1) return curNode

  for (let i = len - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode
}

// 功能测试
// console.log(createLinkedList([100, 200, 300]))
