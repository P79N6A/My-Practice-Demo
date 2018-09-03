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
  // 中序遍历
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
  // 搜索最小值。递归实现
  min () {
    return this.minNode(this._root).key
  }
  minNode (currentNode) {
    if (currentNode.left) {
      return this.minNode(currentNode.left)
    }
    return currentNode
  }
  // 求最小值的非递归实现
  minNotrecursive () {
    var current = this._root
    while (current.left) {
      current = current.left
    }
    return current.key
  }
  max () {
    return this.maxNode(this._root)
  }
  maxNode (currentNode) {
    if (currentNode.right) {
      return this.maxNode(currentNode.right)
    }
    return currentNode.key
  }
  maxNotrecursive () {
    let currentNode = this._root
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.key
  }
  // 搜索特定值
  search (key) {
    return this.searchNode(this._root, key)
  }
  searchNode (currentNode, key) {
    if (currentNode) {
      if (currentNode.key === key) {
        return true
      } else if (key > currentNode.key) {
        return this.searchNode(currentNode.right, key)
      } else {
        return this.searchNode(currentNode.left, key)
      }
    }
    return false
  }
  // 移除节点
  remove (key) {
    return this.removeNode(this._root, key)
  }
  removeNode (node, key) {
    if (node) {
      if (key > node.key) {
        node.right = this.removeNode(node.right, key)
        return node
      } else if (key < node.key) {
        node.left = this.removeNode(node.left, key)
        return node
      } else {
        // 要删除的节点没有子节点
        if (node.right === null && node.left === null) {
          node = null
          return node
        } else if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        } else {
          // 有两个子节点
          // curr 表示当前节点
          // prev 表示 curr 的父节点
          // node 表示要移除的节点
          var curr = node.right,
              prev = node.right
          // 找到右子节点的最小节点
          while (curr.left) {
            prev = curr
            curr = curr.left
          }
          // 把要移除的节点的值更新
          node.key = curr.key
          // 要移除的节点的右子节点的最小左子节点是它自身
          if (curr === prev) {
            node.right = curr.right
          } else {
            prev.left = curr.right
          }
          return node
        }
      }
    }
    return false
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
// tree.insert(16)
tree.insert(1)
tree.insert(12)
// tree.inOrderTraverse()
// tree.preOrderTraverse()
// tree.postOrderTraverse()
// console.log(tree.min())
// console.log(tree.minNotrecursive())
// console.log(tree.max())
// console.log(tree.maxNotrecursive())
// console.log(tree.search(20))
// console.log(tree.search(15))
// console.log(tree.search(111))
// console.log(tree.remove(20))
// tree.remove(2)
// tree.remove(15)
console.log(tree.remove(100))
tree.preOrderTraverse()
// console.log(tree)