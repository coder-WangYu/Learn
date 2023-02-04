/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-05 10:29:44
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-05 10:29:44
 * @Description: 用两个栈实现一个队列 - 单元测试
 */
import { CustomQueue } from "../../../src/chapter1-algorithm-knowledge/two-stacks-one-queue";

describe('用两个栈实现一个队列', function () {
  it('入队', function () {
    const queue = new CustomQueue()
    const res = queue.add(100)
    expect(res).toEqual([100])
  });

  it('队列长度', function () {
    const queue = new CustomQueue()
    queue.add(1)
    queue.add(2)
    queue.add(3)
    const res = queue.length
    expect(res).toBe(3)
  });

  it('出队', function () {
    const queue = new CustomQueue()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    const res = queue.delete()
    expect(res).toBe(100)
    expect(queue.length).toBe(2)
  });

  it('出队超出队列长度', function () {
    const queue = new CustomQueue()
    const res = queue.delete()
    expect(res).toBeNull()
  });
});
