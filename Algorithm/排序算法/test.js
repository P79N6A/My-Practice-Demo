var arr = [3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6]

/**
 * 堆排序
 * 时间复杂度：O(nlogn)
 */
const heapSort = function (arr) {
  const swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  // 调整为大顶堆
  const maxHeapify = function (arr, index, end) {
    // 获得父、子节点对应的下标
    var maxPos = index
    var left = 2 * index + 1
    var right = 2 * index + 2

    // 比较两个子节点，选择大的那个，再去和父节点比较
    if (left <= end && arr[index] < arr[left]) {
      maxPos = left
    }
    if (right <= end && arr[maxPos] < arr[right]) {
      maxPos = right
    }

    // 判断是否需要交换
    if (maxPos !== index) {
      swap(arr, index, maxPos)
      // 递归调整
      maxHeapify(arr, maxPos, end)
    }
  }

  const buildMaxHeap = function (arr) {
    // 从最后一个非叶子节点开始
    // 也就是 元素个数/2 的下取整
    // 由于数组是从 0 开始的，所以要-1
    for (var len = arr.length, i = Math.floor(len/2)-1; i >= 0; i--) {
      maxHeapify(arr, i, len)
    }
  }

  var result = []
  buildMaxHeap(arr)
  console.log(arr)
  while (arr.length > 0) {
    // 交换第一个和最后一个
    swap(arr, 0, arr.length - 1)
    // 把交换后的最后一个拿出（最大值）
    result.unshift(arr.pop())
    // 调整为大顶堆
    maxHeapify(arr, 0, arr.length - 1)
  }
  return result
}

console.log(heapSort(arr))