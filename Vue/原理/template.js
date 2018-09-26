var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';

// complie 编译过程
const ncname = '[a-zA-Z_][\\w\\-\\.]*'; // [a-zA-Z_][\w\-\.]  第一位不能是数字；再匹配字母数字、匹配 -
const singleAttrIdentifier = /([^\s"'<>/=]+)/
const singleAttrAssign = /(?:=)/
const singleAttrValues = [
  /"([^"]*)"+/.source,
  /'([^']*)'+/.source,
  /([^\s"'=<>`]+)/.source
]
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)

const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
const startTagOpen = new RegExp('^<' + qnameCapture)
const startTagClose = /^\s*(\/?)>/

const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>') // </ name ，不匹配 >

const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g

const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/

// 解析起始标签
function parseStarTag () {
  console.log(startTagOpen)
  while (html) {
    // 提取左尖括号
    let textEnd = html.indexOf('<')
    // 如果是在语句头
    if (textEnd === 0) {
      if (html.match(endTag)) {}
    }
  }
}
// parseStarTag()

var str = /^<((?:[a-zA-Z_][\w\-\.]*\:)?[a-zA-Z_][\w\-\.]*)/

var index = 0
function advance (n) {
  index += n
  html = html.substring(n)
}

function parseStartTag () {
  const start = html.match(startTagOpen)
  console.log(startTagOpen)
  if (start) {
    const match = {
      tagName: start[1],
      attrs: [],
      start: index
    }
    advance(start[0].length)
  }
}
