// 18. 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree (pRoot1, pRoot2) {
  // 参数为空
  if (!pRoot1 || !pRoot2) return false
  // 空树
  if (!pRoot1.val || !pRoot2.val) return false

  // 两树都不为空
  // 个人思路：两树按照同一遍历顺序遍历后，用空格隔开拼成字符串
  // 两个字符串是否有包含关系，有就是子结构
  // 这里采用先序遍历
  var p1Arr = []
  var p2Arr = []
  var current1 = pRoot1
  var current2 = pRoot2
  
  DLR(current1, p1Arr)
  DLR(current2, p2Arr)

  var p1String = p1Arr.join(' ')
  var p2String = p2Arr.join(' ')
  
  if (p1String.indexOf(p2String) >= 0) {
    return true
  } else {
    return false
  }
}

// 先序遍历
function DLR (root, arr) {
  if (!root) return 
  var current = root

  if (current) {
    // 根节点访问
    arr.push(current.val)
    // 左子树
    if (current.left) {
      DLR(current.left, arr)
    }
    // 再右子树
    if (current.right) {
      DLR(current.right, arr)
    }
  }
}