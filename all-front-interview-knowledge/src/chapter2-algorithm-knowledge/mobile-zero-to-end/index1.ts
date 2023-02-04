/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-13 15:21:09
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-13 15:21:09
 * @Description: 移动数组中的0到数组末尾
 */

/**
 * 利用双指针实现移动数组中的0到数组末尾 时间复杂度O(n)
 * @param arr 目标数组
 * @returns number[] 移动后的数组
 */
export function mobileZeroToEnd(arr: number[]): void {
  const length = arr.length
  if (!length) return

  // 双指针：j 指向第一个0，i 指向j后面的第一个非0，交换 i & j
  // [1, 0, 2, 0, 3, 0, 4]
  //     ↑  ↑
  //     j  i
  // [1, 2, 0, 0, 3, 0, 4]
  //        ↑     ↑
  //        j     i
  // [1, 2, 3, 0, 0, 0, 4]
  //           ↑        ↑
  //           j        i
  // [1, 2, 3, 4, 0, 0, 0]
  let i, j = -1

  for (i = 0; i < length; i++) {
    if (arr[i] === 0) {
      // i 指向 0 j 指向 -1
      if (j < 0) {
        // j 指向第一个 0
        j = i
      }
    }

    if (arr[i] !== 0 && j >= 0) {
      // j 指向第一个 0 i 指向j后面的第一个非0
      const val = arr[i]
      arr[i] = arr[j]
      arr[j] = val

      j ++
    }
  }
}

// // 功能测试
// const arr = [1, 0, 2, 0, 3, 0, 4, 6, 0, 0, 0, 11]
// mobileZeroToEnd(arr)
// console.info(arr)
