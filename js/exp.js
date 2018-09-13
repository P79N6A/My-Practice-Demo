// var patt = new RegExp("[0-9]")
var patt = /[a-zA-Z]/

var str = '333-555-1212'
str.match(/^\$/)

!!(str.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}&/))
var arr = str.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/g)
var target = arr[arr.length-1]
return target.slice(target.length-3, target.length)
console.log(a)

var regx = /\$\d{1,3}(,\d{1,3})*(\.\d{2})?/
return regx.test(str)

var patt = /[0-9]/
return str.search(/[a-zA-Z]{2,}/) != -1