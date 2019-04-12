function fix (str) {
  var patt1 = /(\w)\1{1,}/g
  var matchUrl = str.match(patt1)
  if (matchUrl) {
    str = str.replace(matchUrl[0], matchUrl[0].substring(0, 2))
  }

  var patt2 = /(\w)\1(\w)\2/g
  var matchUrl = str.match(patt2)
  console.log(matchUrl)
  if (matchUrl) {
    for (var i = 0; i < matchUrl.length; i++) {
      str = str.replace(matchUrl[i], matchUrl[i].substring(i, i+3))
    }
  }
  console.log(str)
}

fix('helloo')
fix('woooooooow')
fix('aabbccddeeff')