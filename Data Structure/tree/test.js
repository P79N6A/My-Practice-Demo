// 二叉树的节点
class TreeNode {
  constructor (value, left, right) {
    this.value = value
    this.left = left || null
    this.right = right || null
    // 表示同一个值的节点的个数，这里注销掉，不用着先
    // this.count = 1
  }
}

class BinarySearchTree {
  constructor (arr) {
    var _this = this
    if (Array.isArray(arr)) {
      arr.forEach(value => {
        _this.insert(value)
      })
    }
  }
  // 插入
  insert (value) {
    if (!this.root) {
      this.root = new TreeNode(value)
    } else {
      // 从根开始遍历，看看要插在哪里
      var current = this.root
      var parent = null
      while (current) {
        parent = current
        if (value < current.value) {
          current = current.left
        } else if (value > current.value) {
          current = current.right
        } else {
          console.log('重复插入辣')
          return false
        }
      }
      // 当退出循环后，说明已经找到了插入的位置
      var newNode = new TreeNode(value)
      value < parent.value ? parent.left = newNode : parent.right = newNode
      return true
    }
  }
  // 删除
  // 删除要考虑三种情况：叶子节点，有一个子节点，有两个子节点
  delete (value) {
    // 找到那个点
    // 之所以不用那个 search，而是要直接再重写
    // 是因为木有它的父节点鸭，除非 node 上再加个父节点咯
    var node = this.root
    var parent = null
    while (node) {
      if (value < node.value) {
        parent = node
        node = node.left
      } else if (value > node.value) {
        parent = node
        node = node.right
      } else {
        break
      }
    }
    // 如果 node 存在，说明找到了
    if (node) {
      // 分三种情况考虑
      if (node.left && node.right) {
        
      } else if (node.left) {
        parent.left === node ? parent.left = node.left : parent.right = node.left
      } else if (node.right) {
        parent.right === node ? parent.left = node.right : parent.right = node.right
      } else {
        // 叶子节点，直接删除
        parent.left === node ? parent.left = null : parent.right = null
      }
      return true
    } else {
      return false
    }
  }
  search (value) {
    var node = this.root
    while (node) {
      if (value < node.value) {
        node = node.left
      } else if (value > node.value) {
        node = node.right
      } else {
        console.log('找到了')
        return node
      }
    }
    console.log('没找到')
    return false
  }

  // 前序遍历
  preOrderTraverse (node, visit) {
    if (node) {
      visit(node)
      this.preOrderTraverse(node.left, visit)
      this.preOrderTraverse(node.right, visit)
    }
  }
  // 中序遍历
  inOrderTraverse (node, visit) {
    if (node) {
      // 访问左子树
      this.inOrderTraverse(node.left, visit)
      // 访问根
      visit(node)
      // 访问右子树
      this.inOrderTraverse(node.right, visit)
    }
  }
  // 后序遍历
  postOrderTraverse (node, visit) {
    if (node) {
      this.postOrderTraverse(node.left, visit)
      this.postOrderTraverse(node.right, visit)
      visit(node)
    }
  }
}

var tree = new BinarySearchTree([3,2,1,7,4,10,5])
console.log(tree)

// tree.search(5)
// tree.search(5)
// tree.delete(1)
// tree.search(1)
function visit (node) {
  console.log(node.value + ' ')
}
// tree.inOrderTraverse(tree.root, visit)
// tree.preOrderTraverse(tree.root, visit)
tree.postOrderTraverse(tree.root, visit)