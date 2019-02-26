// 16. 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/


// 解法一：非递归
// 我的思路是：遍历链表，然后在遍历的时候，重新设置节点的 next
function ReverseList (pHead) {
  if (pHead === null) return

  var pre = null
  var current = pHead
  var next = null

  while (current) {
    next = current.next
    current.next = pre
    pre = current
    current = next
  }

  return pre
}


// 解法二：递归
function ReverseList (pHead) {
  if (pHead === null) return null
  if (pHead.next === null) return pHead

  var reversedHead = ReverseList(pHead.next)

  // pHead 的指向是木有改变的，还是原来那个
  // 原来那个节点的 next 要指回 pHead
  pHead.next.next = pHead
  // 此时 pHead 就是尾节点了
  pHead.next = null

  return reversedHead
}