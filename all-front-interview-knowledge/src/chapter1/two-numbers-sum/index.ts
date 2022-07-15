/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-07 14:35:17
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-07 14:35:17
 * @Description: 一个有序数组，找出和为n的两个数
 */

/**
 * 利用二分思想查找和为n的两个数 时间复杂度O(n)
 * @param arr 目标数组
 * @param target 目标数
 * @returns number[] 和为n的两个数
 */
export function twoNumbersSum(arr: number[], target: number): number[] {
  const result: number[] = []

  const length = arr.length
  if (!length) return result

  // 设置两个指针：headIndex从左向右，tailIndex从右向左
  let headIndex = 0
  let tailIndex = length - 1

  while (headIndex < tailIndex) {
    const sum = arr[headIndex] + arr[tailIndex]
    if (target < sum) {
      // 目标数在左侧，尾部指针 - 1
      tailIndex --
    } else if (target > sum) {
      // 目标数在右侧，头部指针 + 1
      headIndex ++
    } else {
      // 目标数等于两数之和
      result.push(arr[headIndex])
      result.push(arr[tailIndex])
      break
    }
  }

  return result
}

// // 功能测试
// const arr = [1, 3, 5, 7, 9, 11, 12, 14, 15]
// console.info(twoNumbersSum(arr, 15))
// console.info(twoNumbersSum(arr, 10))
// console.info(twoNumbersSum(arr, 20))
// console.info(twoNumbersSum(arr, 30))
// console.info(twoNumbersSum([], 10))
