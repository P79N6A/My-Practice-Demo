class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this._length = 0
    this._head = null
  }
  // 获取头节点
  getHead () {
    return this._head
  }
  // 添加节点
  append (element) {
    let node = new Node(element)
    let current

    if (this._head == null) {
      // 第一个节点
      this._head = node
    } else {
      current = this._head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this._length++
  }
  // 插入
  insert (element, position) {
    if (position < 0 || position > this.size() - 1) return false
    if (element === null) return false
    let node = new Node(element),
        current = this._head,
        previous
    // 插入到头节点
    if (position === 0) {
      node.next = current
      this._head = node
    } else {
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.next = current
    }
    this._length++
    return true
  }
  // 删除某个位置的节点（从 0 开始）
  removeAt (position) {
    if (this.isEmpty()) return false
    if (position < 0 || position > this.size() - 1) return false
    let current = this._head,
        previous,
        index = 0
    // 移除的是第一个节点
    if (position === 0) {
      this._head = this._head.next
    } else {
      for (; index < position; index++) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this._length--

    return current.element
  }
  remove (element) {
    let position = this.indexOf(element)
    return this.removeAt(position)
  }
  size () {
    return this._length
  }
  isEmpty () {
    return this._length === 0
  }
  indexOf (element) {
    let index = 0,
        current = this._head
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
}

// var list = new LinkedList()
// list.append(15)
// list.append(16)
// list.insert(100, 0)
// console.log(list.indexOf(100))
// console.log(list.indexOf('16'))
// console.log(list.remove(100))
// console.log(list.size())
// console.log(list.removeAt(0))

module.exports = LinkedList
