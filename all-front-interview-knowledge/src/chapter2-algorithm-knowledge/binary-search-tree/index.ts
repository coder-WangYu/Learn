/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-07 17:10:37
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-07 17:10:37
 * @Description: 二叉搜索树
 */
import { inSequenceTraversal, tree as bst } from "../binary-tree-traversal";

interface TreeNode {
  value: number
  left?: TreeNode
  right?: TreeNode
}

/**
 * 获取二叉搜索树中的第k小值
 * @param node 二叉搜索树根节点
 * @param k 第几个
 * @returns number 第k个对应的值
 */
export function getKthValue(node: TreeNode, k: number): number | null {
  const arr = []
  inSequenceTraversal(node, arr) // 中序遍历，生成递增数组

  return arr[k - 1] || null
}

// 功能测试
// console.info(getKthValue(bst, 3))
