/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-04 17:42:54
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-04 17:42:54
 * @Description: 旋转数组
 */

/**
 * 使用concat旋转数组 时间复杂度O(n)
 * @param array 目标数组
 * @param k 旋转步数
 * @returns Array
 */
export function rotateArray(array: number[], k: number): number[] {
  if (!array.length) {
    return []
  }

  if (typeof k !== 'number') {
    return array
  }

  const step = Math.abs(k % array.length)
  const tail = array.slice(0, array.length - step)
  const head = array.slice(array.length - step, array.length)

  return head.concat(tail)
}

// 功能测试
// console.info(rotateArray([1, 2, 3, 4, 5, 6], 8))
