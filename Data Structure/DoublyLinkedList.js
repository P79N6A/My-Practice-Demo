class Node {
  constructor (element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    // 私有变量
    this._length = 0
    this._head = null // 头指针
    this._tail = null // 尾指针
  }
  // 插入
  insert (postion, element) {
    // 范围内。可以到 length，因为此时代表添加到最后的位置
    let len = this.size()
    if (postion < 0 || postion > len) return false
    if (element === null) return false
    let node = new Node(element),
        current = this._head,
        previous = null
    // 当链表为空
    if (len === 0) {
      this._head = node
      this._tail = node
    } else if (postion === 0) {
      // 插入头节点
      node.next = current
      current.prev = node
      this._head = node
    } else if (postion === len) {
      // 插入尾节点
      current.next = node
      node.prev = current
      this._tail = node
    } else {
      // 在其他位置插入
      for (let i = 0; i < postion; i++) {
        previous = current
        current = current.next
      }
      node.next = current
      current.prev = node
      previous.next = node
      node.prev = previous
    }
    this._length++
    return true
  }
  removeAt (position) {
    let len = this._length
    if (position < -1 || position > len) return false
    let current = this._head,
        previous
    if (len === 1) {
      // 只剩一个节点
      this._head = null
      this._tail = null
    } else if (position === 0) {
      // 移除头节点
      this._head = current.next
      this._head.prev = null
    } else if (position === len - 1) {
      // 移除尾节点
      current = this._tail
      this._tail = current.prev
      this._tail.next = null
    } else {
      // 移除中间的某个节点
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      current.next.prev = previous
    }
    this._length--
    return current.element
  }
  // 获取节点个数
  size () {
    return this._length
  }
}

var dl = new DoublyLinkedList()
dl.insert(0, 'haha')
dl.insert(0, 'xixixixix')
dl.removeAt(0)
