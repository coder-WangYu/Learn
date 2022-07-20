/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-18 18:08:12
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-18 18:08:12
 * @Description: 快速排序
 */

/**
 * 利用slice实现快速排序 时间复杂度O(nlogn)
 * @param arr 目标数组
 * @returns number[] 排序后的数组
 */
export function quickSort(arr: number[]): number[] {
  const length = arr.length
  if (!length) return arr

  const midIndex = Math.floor(length / 2) // 数组中间元素的索引
  const midValue = arr.slice(midIndex, midIndex + 1)[0] // 数组中间元素的值

  // left收集小于midValue的元素，right收集大于等于midValue的元素
  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < length; i++) {
    if (i !== midIndex) { // 排除midValue，防止重复
      const currentValue = arr[i]

      currentValue < midValue
        ? left.push(currentValue)
        : right.push(currentValue)
    }
  }

  return quickSort(left).concat([midValue], quickSort(right))
}

// // 功能测试
// console.info(quickSort([3, 6, 1, 9, 2, 4, 8, 7, 5]))
