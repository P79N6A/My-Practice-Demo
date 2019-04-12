<<<<<<< HEAD
//
function parseToHouZhui (str) {
  // 存放操作符
  var stack = []
  // 存放输出结果
  var result = []
  var len = str.length
  var i = 0

  while (i < len) {
    if (typeof +str[i] === NaN) {
      var signal = str[i]
      // 判断栈顶元素优先级
      if (signal === ')') {
        // 全部出栈输出，直到遇到左括号
        while (stack[result.length - 1] !== '(') {
          result.push(stack.pop())
        }
        // 左括号出栈
        stack.pop()
      } else if (signal === '(') {
        // 栈顶是左括号的话，直接进栈
        stack.push(signal)
      } else if ()
    } else {
      result.push[str[i]]
=======
// var line = readLine()
var line = '3 1 5 8'

// 输入的数字
var nums = line.split(' ').map(item => +item);
var uesd = [];
for (var i = 0, len = nums; i < len; i++) {
  uesd[i] = false;
}

var max = 0;

getMax(nums, uesd, 1, 0);
console.log(max);

function getMax (nums, used, depth, nowCount) {
  if (nums.length + 1 == depth) return;
  for (var i = 0; i < nums.length; i++) {
    if(!used[i]) {
      used[i] = true;
      var count = getLeft(nums, used, i) * getRight(nums, used, i) * nums[i] + nowCount;
      getMax(nums, used, depth + 1, count);
      if(depth == nums.length) {
        max = count > max ? count : max;
        console.log(max)
      }
      used[i] = false;
>>>>>>> 1e6cc58594acddd50a4d6295ea97b8a855ffdb55
    }
    i++
  }
<<<<<<< HEAD
}
=======
}

function getLeft (nums, used, index) {
  for(var i = index - 1; i >= 0; i--) {
    if (!used[i]) {
      return nums[i];
    }
  }
  return 1;
}

function getRight (nums, used, index) {
  for(var i = index + 1; i < nums.length; i++) {
    if (!used[i]) {
      return nums[i];
    }
  }
  return 1;
}
>>>>>>> 1e6cc58594acddd50a4d6295ea97b8a855ffdb55
