/**
 * @Editor：WYDX
 * @CreateTime: 2022-07-13 14:46:23
 * @LastEditor: WYDX
 * @LastEditTime: 2022-07-13 14:46:23
 * @Description: 移动数组中的0到数组末尾
 */

/**
 * 利用splice实现移动数组中的0到数组末尾 时间复杂度O(n²)
 * @param arr 目标数组
 * @returns void 修改原数组 无返回值
 */
export function mobileZeroToEnd(arr: number[]): void {
  const length = arr.length
  if (!length) return

  // 保存数组中 0 的个数
  let zeroLength = 0

  // length - zeroLength 优化：数组末尾为0的部分无需遍历
  // [ 1, 0, 0, 1, 2, 3, 0 ]
  //                  ↑
  // [ 1, 0, 1, 2, 3, 0, 0 ]
  //               ↑
  // [ 1, 1, 2, 3, 0, 0, 0 ]
  //            ↑
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1) // 本身的时间复杂度为O(n)
      i -- // 截取一位后，索引向前退一位
      zeroLength ++ // 累加数组末尾 0 元素的个数
    }
  }
}

// // 功能测试
// const arr = [1, 0, 2, 0, 3, 0, 4, 6, 0, 0, 0, 11]
// mobileZeroToEnd(arr)
// console.info(arr)
