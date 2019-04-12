var n = parseInt(readline())


function fix (str) {
  if (!str) return 0
  if (str.length <= 2) {
    return str
  }
  var curr = str[0]
  var prev = str[1]
  var next = str[2]
  for (var i = 1, len = str.length; i++) {
    prev = curr
    curr = str[i]
    next = str[i+1]

    if (prev === curr && curr === next) {
      return str.substring(0, i) + str.substring(i+1, len)
    }
  }
}

while(line=readline()){
  console.log(fix(line))
}