/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-18 16:55:49
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-18 16:55:49
 * @Description: 快速排序
 */

/**
 * 利用splice实现快速排序 时间复杂度O(nlogn)
 * @param arr 目标数组
 * @returns number[] 排序后的数组
 */
export function quickSort(arr: number[]): number[] {
  const length = arr.length
  if (!length) return arr

  const midIndex = Math.floor(length / 2) // 数组中间元素的索引
  const midValue = arr.splice(midIndex, 1)[0] // 数组中间元素的值

  // left收集小于midValue的元素，right收集大于等于midValue的元素
  const left: number[] = []
  const right: number[] = []

  // splice会修改原数组 所以取splice后的arr.length
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i]

    currentValue < midValue
      ? left.push(currentValue)
      : right.push(currentValue)
  }

  return quickSort(left).concat([midValue], quickSort(right))
}

// // 功能测试
// console.info(quickSort([3, 6, 1, 9, 2, 4, 8, 7, 5]))
