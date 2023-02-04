/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-08 10:22:32
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-08 10:22:32
 * @Description: 二叉搜索树 - 单元测试
 */
import { bst, getKthValue } from "../../../src/chapter2-algorithm-knowledge/binary-search-tree";

describe('获取二叉搜索树中的第k小值', function () {
  it('正常情况', function () {
    expect(getKthValue(bst, 1)).toBe(2)
    expect(getKthValue(bst, 3)).toBe(4)
    expect(getKthValue(bst, 5)).toBe(6)
  });

  it('k超出树节点长度', function () {
    expect(getKthValue(bst, 10)).toBeNull()
  });
});
