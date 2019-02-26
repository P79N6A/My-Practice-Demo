// 17. 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

// 思路：
// 类似两个有序列表的排序那样，给两个列表设置两个指针，指向当前待排序的节点
// 比较大小后，修改 next 指针
// 最后如果某一个链表已经排序完，就把另一个链表的指针标记的节点，作为 next

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge (pHead1, pHead2) {
  // 都为空，就返回空
  if (!pHead1 || !pHead2) return pHead1

  var p1 = pHead1
  var p2 = pHead2
  var head = null

  // 获取头指针
  if (p1.val && !p2.val) { // p1 存在，p2 不存在
    head = p1
  } else if (!p1.val && p2.val) { // p2 存在，p1 不存在
    head = p2
  } else { // p1 p2 都存在
    if (p1.val < p2.val) {
      head = p1
      p1 = p1.next
    } else {
      head = p2
      p2 = p2.next
    }
  }

  // 用来标记新链表的当前尾节点的
  var current = head

  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      current.next = p1
      current = current.next
      p1 = p1.next
    } else {
      current.next = p2
      current = current.next
      p2 = p2.next
    }
  }

  // 是否还有链表没排序完
  if (p1) {
    current.next = p1
  } else {
    current.next = p2
  }

  return head
}