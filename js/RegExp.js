/**
 * regexObj.test(string)
 * 在指定字符串执行搜索匹配
 * string: 字符串
 * return: true（匹配） 或者 false（不匹配）
 */
var patt = /123/
console.log(patt.test('123123'))


/**
 * RegExp.prototype.exec(string)
 * 在指定字符串执行搜索匹配
 * string: 字符串
 * 返回一个结果数组或者 null
 */
var patt = /123/g
console.log(patt.exec('123123'))
console.log(patt.exec('123123'))

// 元字符
var patt = /ffff /
console.log(patt.test(123))

// 分组
/**
 * 在程序中获取第 n 个分组的内容
 */
var patt = /(123)/g
patt.exec('123123')
console.log(RegExp.$1) // 123

var patt = /((1(2)3)(45(6)))/g
console.log(patt.exec(123456)) // ["123456", "123456", "123", "2", "456", "6", index: 0, input: "123456", groups: undefined]

// 前瞻
var patt = /h(?=i)/g
var str = 'hello,hi,happy'
console.log(patt.exec(str))

// 后瞻
var patt = /h(?!i)/
var str = 'hello,hi,happy'
console.log(patt.exec(str))
console.log(patt.exec(str))