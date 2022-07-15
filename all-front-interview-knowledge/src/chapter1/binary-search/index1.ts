/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-07 10:30:34
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-07 10:30:34
 * @Description: 二分查找
 */

/**
 * 利用递归实现二分查找，时间复杂度O(logn)
 * @param arr 目标数组
 * @param target 目标数
 * @returns number 目标数索引
 */
export function binarySearch(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
  const length = arr.length
  if (!length) return -1

  // ts: startIndex? 表示 startIndex = x | undefined
  if (startIndex === undefined) startIndex = 0
  if (endIndex === undefined) endIndex = length - 1

  // 超出数组范围
  if (startIndex > endIndex) return -1

  // 确定中间值
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]

  if (midValue < target) {
    // 目标数在中间数右侧
    return binarySearch(arr, target, midIndex + 1, endIndex)
  } else if (midValue > target) {
    // 目标数在中间数左侧
    return binarySearch(arr, target, startIndex, midIndex - 1)
  } else {
    // 目标数等于中间数，返回中间数索引
    return midIndex
  }
}

// // 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.info(binarySearch(arr, 9))
// console.info(binarySearch(arr, 10))
// console.info(binarySearch(arr, 1))
// console.info(binarySearch(arr, 0))
