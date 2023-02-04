/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-06 14:15:36
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-06 14:15:36
 * @Description: 二分查找
 */

/**
 * 利用循环实现二分查找（非递归）时间复杂度O(logn)
 * @param arr 目标数组
 * @param target 目标数
 * @returns number 目标数索引
 */
export function binarySearch(arr: number[], target: number): number {
  const length = arr.length
  if (!length) return -1

  // 设置第一趟的开始索引及结束索引
  let startIndex = 0
  let endIndex = length - 1

  // 在数组范围内则一直循环
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (midValue < target) {
      // 目标数在中间数右侧
      startIndex = midIndex + 1 // +1 排除当前中间数
    } else if (midValue > target) {
      // 目标数在中间数左侧
      endIndex = midIndex - 1 // -1 排除当前中间数
    } else {
      // 目标数等于中间数，返回目标数索引
      return midIndex
    }
  }

  return -1
}

// // 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.info(binarySearch(arr, 9))
// console.info(binarySearch(arr, 10))
// console.info(binarySearch(arr, 1))
// console.info(binarySearch(arr, 0))
