/*
 * @Editor：WYDX
 * @CreateTime: 2022-07-06 10:59:30
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-06 10:59:30
 * @Description: 单向链表实现队列 - 单元测试
 */
import { MyQueue } from "../../../src/chapter1/queue-with-linked-list";

describe('单向链表实现队列', function () {
  it('入队和链表长度', function () {
    const queue = new MyQueue()
    expect(queue.length).toBe(0)

    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.length).toBe(3)
  });

  it('出队和链表长度', function () {
    const queue = new MyQueue()
    expect(queue.delete()).toBeNull()
    expect(queue.length).toBe(0)

    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.delete()).toBe(100)
    expect(queue.length).toBe(2)
    expect(queue.delete()).toBe(200)
    expect(queue.length).toBe(1)
    expect(queue.delete()).toBe(300)
    expect(queue.length).toBe(0)
    expect(queue.delete()).toBeNull()
    expect(queue.length).toBe(0)
  });
});
