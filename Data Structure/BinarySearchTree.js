class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this._root = null
  }
  /**
   * 插入节点
   * @param {any} key 
   */
  insert (key) {
    let node = new Node(key)
    if (this._root === null) {
      // 空树
      this._root = node
    } else {
      let current = this._root,
          previous,
          direction
      while (current !== null) {
        previous = current
        if (key < current.key) {
          // 往左边插入
          current = current.left
          direction = 'left'
        } else {
          // 往右边插入
          current = current.right
          direction = 'right'
        }
      }
      // 当 current 为空的时候，说明可以插入啦
      previous[direction] = node
    }
  }
  
  inOrderTraverse () {
    this.inOrderTraverseNode(this._root)
  }
  inOrderTraverseNode (currentNode) {
    if (currentNode) {
      // 打印左边的节点
      this.inOrderTraverseNode(currentNode.left)
      // 打印中间的节点
      this.print(currentNode)
      // 打印右边的节点
      this.inOrderTraverseNode(currentNode.right)
    }
  }
  // 先序遍历
  preOrderTraverse () {
    this.preOrderTraverseNode(this._root)
  }
  preOrderTraverseNode (currentNode) {
    if (currentNode) {
      // 打印中间的节点
      this.print(currentNode)
      // 打印左边的节点
      this.preOrderTraverseNode(currentNode.left)
      // 打印右边的节点
      this.preOrderTraverseNode(currentNode.right)
    }
  }
  // 后序遍历
  postOrderTraverse () {
    this.postOrderTraverseNode(this._root)
  }
  // 搜索最小值
  min () {
    return this.minNode(this._root).key
  }
  minNode (currentNode) {
    if (currentNode.left) {
      return this.minNode(currentNode.left)
    }
    return currentNode
  }
  max () {
    let currentNode = this._root
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.key
  }
  postOrderTraverseNode (currentNode) {
    if (currentNode) {
      // 打印左边的节点
      this.postOrderTraverseNode(currentNode.left)
      // 打印右边的节点
      this.postOrderTraverseNode(currentNode.right)
      // 打印中间的节点
      this.print(currentNode)
    }
  }
  // 打印当前节点值
  print (node) {
    console.log(node.key)
  }
}

const tree = new BinarySearchTree()
tree.insert(17)
tree.insert(2)
tree.insert(20)
tree.insert(15)
tree.insert(1)
tree.insert(12)
// tree.inOrderTraverse()
// tree.preOrderTraverse()
tree.postOrderTraverse()
tree.min()
tree.max()