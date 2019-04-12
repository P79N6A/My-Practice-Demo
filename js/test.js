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
    }
  }
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
