/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-07 15:31:01
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-07 15:31:01
 * @Description: 二叉树遍历
 */

export interface TreeNode {
  value: number
  left?: TreeNode
  right?: TreeNode
}

// 创建一棵树
//          5
//        /   \
//      /       \
//     3         7
//   /   \     /   \
// 2       4 6       8
// 前序遍历：5324768
// 中序遍历：2345678
// 后序遍历：2346785
export const tree: TreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 7,
    left: {
      value: 6
    },
    right: {
      value: 8
    }
  }
}

/**
 * 二叉树前序遍历：root -> left -> right
 * @param node 目标树的根节点
 * @param arr 目标数组
 */
// @ts-ignore
export function formerSequenceTraversal(node: TreeNode, arr: number[]) {
  if (node === undefined) return

  arr.push(node.value)
  formerSequenceTraversal(node.left, arr)
  formerSequenceTraversal(node.right, arr)
}

/**
 * 二叉树中序遍历：left -> root -> right
 * @param node 目标树的根节点
 */
export function inSequenceTraversal(node: TreeNode, arr: number[]) {
  if (node === undefined) return

  inSequenceTraversal(node.left, arr)
  arr.push(node.value)
  inSequenceTraversal(node.right, arr)
}

/**
 * 二叉树后序遍历：left -> right -> root
 * @param node 目标树的根节点
 */
export function afterSequenceTraversal(node: TreeNode, arr: number[]) {
  if (node === undefined) return

  inSequenceTraversal(node.left, arr)
  inSequenceTraversal(node.right, arr)
  arr.push(node.value)
}

// 功能测试
// formerSequenceTraversal(tree) // 5324768
// inSequenceTraversal(tree) // 2345678
// afterSequenceTraversal(tree) // 2346785
