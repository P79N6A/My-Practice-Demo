
const EH = 0 // 一样高
const LH = 1 // 左高
const RH = -1 // 右高

class TreeNode {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
    this.BF = 0
  }
}

class AVLTree {
  constructor () {
    this.root = null
  }

  inOrderTraverse (visit) {
    _inOrderTraverse(this.root)

    function _inOrderTraverse (node) {
      if (node) {
        _inOrderTraverse(node.left)
        visit(node.value)
        _inOrderTraverse(node.right)
      }
    }
  }

  insert (value) {
    var taller = false
    var _this = this

    if (!this.root) {
      this.root = new TreeNode(value)
      return true
    } else {
      _insert(this.root)
    }

    function _insert (node, parent, direction) {
      if (!node) {
        var newNode = new TreeNode(value)
        parent[direction] = newNode
        newNode.parent = parent
        taller = true
        return true
      } else {
        if (value === node.value) {
          taller = false
          return false
        } else if (value < node.value) {
          if (!_insert(node.left, node, 'left')) {
            // 如果未插入就返回
            return false
          }
          // 已经插到左子树，并且左子树已经长高了
          if (taller) {
            // 检查它的 BF
            switch (node.BF) {
              case LH: {
                // 如果本来已经是左子树高了，就要开始左平衡了
                leftBalance(node)
                // 平衡完后就可以修改它的平衡因子了
                node.BF = EH
                break
              }
              case EH: {
                // 本来是一样高的话，就只用修改它的平衡因子就可以了
                node.BF = LH
                break
              }
              case RH: {
                // 本来是右子树高的话，也是修改平衡因子就可以了
                node.BF = EH
                break
              }
            }
            return true
          }
        }
      }
    }

    // 左平衡
    function leftBalance (node) {
      var L = node.left
      if (node.left.BF >= 0) {
        // 左子树的BF和根的BF符号相同
        // 说明是 LL型的
        // 做一次右旋
        // 还要修改 BF
        // 因为当 L.BF 为0的时候，说明右旋后， L.right 会挂到 node.left 的
        node.BF = L.BF === EH ? LH : EH
        L.BF = EH
        R_Rotate(node)
      } else {
        // 左子树的BF和根的FB符号不同，说明是 LR 型
        // 要先左旋再右旋
        var Lr = node.right
        
        Lr.BF = EH
        L_Rotate(L)
        R_Rotate(node)
      }
    }

    // 右旋
    function R_Rotate (node) {
      // 暂存左子树（旋转后的根）
      var newRoot = node.left
      node.left = newRoot.right
      newRoot.right = node
      // 修改 parent
      newRoot.parent = node.parent
      node.parent = newRoot

      // 如果木有 parent，说明是根节点
      if (newRoot.parent === null) {
        _this.root = newRoot
      }
    }
    // 左旋
    function L_Rotate (node) {
      var newRoot = node.right
      node.right = newRoot.left
      newRoot.left = node
      // 修改 parent
      newRoot.parent = node.parent
      node.parent = node
      if (newRoot.parent === null) {
        _this.root = newRoot
      }
    }
  }
}

var tree = new AVLTree()
tree.insert(3)
tree.insert(2)
tree.insert(1)
// tree.inOrderTraverse(function (data) {
//   console.log(data)
// })

// tree.R_Rotate(tree.root)
tree.inOrderTraverse(function (data) {
  console.log(data)
})

console.log(tree)