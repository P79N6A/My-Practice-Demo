// 19. 操作给定的二叉树，将其变换为源二叉树的镜像。

// 个人思路：每棵树的左右节点交换就可以了，然后递归访问左右子节点

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror (root) {
  if (!root) return

  var temp = root.left
  root.left = root.right
  root.right = temp

  if (root.left) {
    Mirror(root.left)
  }
  if (root.right) {
    Mirror(root.right)
  }
}