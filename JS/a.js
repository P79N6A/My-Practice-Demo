var nums = '101 102 103 104 105 106 107 108 109'

function main (nums) {
  nums = nums.split(' ').map(item => +item)
  var count = 0
  var len = nums.length
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      for (var k = j + 1; k < len; k++) {
        if (gcd(nums[i], nums[j]) == 1 && gcd(nums[i], nums[k]) == 1 && gcd(nums[j], nums[k]) == 1) {
          count++
        }
      }
    }
  }
  console.log(count)
}

function gcd (num1, num2) {
  if (num1 >= num2) {
    [num1, num2] = [num2, num1]
  }
  var yushu = -1
  // console.log(num1)
  while (yushu !== 0) {
    // console.log(yushu)
    yushu = num2 % num1
    num2 = num1
    num1 = yushu
  }
  return num2
}

// console.log(gcd(99, 88))
main(nums)