// 15. 输入一个链表，输出该链表中倒数第k个结点。

// 节点
function ListNode (x) {
  this.val = x;
  this.next = null;
}

// 解法一：遍历一遍链表，把节点存到数组中，再计算倒数第k个节点的位置，再去遍历一次
function FindKthToTail (head, k) {
  if (head === null || k <= 0) {
    return false
  }

  var arr = []
  var current = head

  while (current) {
    arr.push(current)
    current = current.next
  }

  return arr[arr.length - k]
}