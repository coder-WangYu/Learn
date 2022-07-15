/**
 * @Editor：WYDX
 * @CreateTime: 2022-05-13 13:54:06
 * @LastEditor: WYDX
 * @LastEditTime: 2022-05-13 13:54:06
 * @Description: 旋转数组
 */

/**
 * 使用pop和unshift旋转数组 时间复杂度O(n²)
 * @param array 目标数组
 * @param k 目标步数
 * @returns Array
 */
export function rotateArray(array: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    const num = array.pop()
    array.unshift(num)
  }

  return array
}

// 功能测试
// console.info(rotateArray([1, 2, 3, 4, 5, 6], 3))
