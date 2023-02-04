/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-08 17:08:38
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-08 17:08:38
 * @Description: 二叉树遍历 - 单元测试
 */
import {
  formerSequenceTraversal,
  inSequenceTraversal,
  afterSequenceTraversal,
  tree,
  TreeNode
} from "../../../src/chapter2-algorithm-knowledge/binary-tree-traversal";

//          5
//        /   \
//      /       \
//     3         7
//   /   \     /   \
// 2       4 6       8

describe('二叉树遍历：前序、中序、后序', function () {
  it('正常情况', function () {
    const f_arr = []
    const i_arr = []
    const a_arr = []
    formerSequenceTraversal(tree, f_arr)
    inSequenceTraversal(tree, i_arr)
    afterSequenceTraversal(tree, a_arr)
    console.log(a_arr)
    expect(f_arr).toEqual([5, 3, 2, 4, 7, 6, 8])
    expect(i_arr).toEqual([2, 3, 4, 5, 6, 7, 8])
    expect(a_arr).toEqual([2, 3, 4, 6, 7, 8, 5])
  });

  it('空树', function () {
    expect(formerSequenceTraversal(<TreeNode>{}, [])).toBeUndefined()
    expect(inSequenceTraversal(<TreeNode>{}, [])).toBeUndefined()
    expect(afterSequenceTraversal(<TreeNode>{}, [])).toBeUndefined()
  });
});
