function TreeNode (x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

var pre = [1, 2, 4, 7, 3, 5, 6, 8]
var vin = [4, 7, 2, 1, 5, 3, 8, 6]

function reConstructBinaryTree (pre, vin) {
    if (pre.length === 0) {
        return null
    }

    // 当只有一个节点的时候就要返回
    if (pre.length === 1) {
        var treeNode = new TreeNode(pre[0])
        treeNode.left = null
        treeNode.right = null
        return treeNode
    }

    // 先序遍历的第一个节点就是树的根节点
    var rootValue = pre[0]

    for (var i = 0, len = vin.length; i < len; i++) {
        // 中序遍历中，根节点的左边就是左子树，右边就是右子树
        // 利用中序的这个特性，就可以划分左右子树了
        // 然后不断递归调用，就可以构建出这个二叉树了
        if (vin[i] === rootValue) {
            var treeNode = new TreeNode(rootValue)
            treeNode.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i))
            treeNode.right = reConstructBinaryTree(pre.slice(i + 1, len), vin.slice(i + 1, len))
            return treeNode
        }
    }
}


reConstructBinaryTree(pre, vin)