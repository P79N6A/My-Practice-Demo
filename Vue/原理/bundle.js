(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Element {
  /**
   * @param {String} tag 'div'
   * @param {Object} props { class: 'item' }
   * @param {Array} children [ Element1, 'text']
   * @param {String} key option
   */
  constructor(tag, props, children, key) {
    this.tag = tag
    this.props = props
    if (Array.isArray(children)) {
      this.children = children
    } else if (isString(children)) {
      this.key = children
      this.children = null
    }
    if (key) this.key = key
  }
  // 娓叉煋
  render() {
    let root = this._createElement(
      this.tag,
      this.props,
      this.children,
      this.key
    )
    document.body.appendChild(root)
    return root
  }
  create() {
    return this._createElement(this.tag, this.props, this.children, this.key)
  }
  // 鍒涘缓鑺傜偣
  _createElement(tag, props, child, key) {
    // 閫氳繃 tag 鍒涘缓鑺傜偣
    let el = document.createElement(tag)
    // 璁剧疆鑺傜偣灞炴€?
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        const value = props[key]
        el.setAttribute(key, value)
      }
    }
    if (key) {
      el.setAttribute('key', key)
    }
    // 閫掑綊娣诲姞瀛愯妭鐐?
    if (child) {
      child.forEach(element => {
        let child
        if (element instanceof Element) {
          child = this._createElement(
            element.tag,
            element.props,
            element.children,
            element.key
          )
        } else {
          child = document.createTextNode(element)
        }
        el.appendChild(child)
      })
    }
    return el
  }
}

// var e = new Element('div', {
//   class: 'test'
// }, [], 't').create()
// console.log(e)

// export default Element

module.exports = Element
},{}],2:[function(require,module,exports){
const { StateEnums, isString, move } = require('./util')
const Element = require('./Element')

let index = 0
module.exports = function patch(node, patchs) {
  let changes = patchs[index]
  let childNodes = node && node.childNodes
  // 杩欓噷鐨勬繁搴﹂亶鍘嗗拰 diff 涓槸涓€鏍风殑
  if (!childNodes) index += 1
  if (changes && changes.length && patchs[index]) {
    changeDom(node, changes)
  }
  let last = null
  if (childNodes && childNodes.length) {
    childNodes.forEach((item, i) => {
      index =
        last && last.children ? index + last.children.length + 1 : index + 1
      patch(item, patchs)
      last = item
    })
  }
}

function changeDom(node, changes, noChild) {
  changes &&
    changes.forEach(change => {
      let { type } = change
      switch (type) {
        case StateEnums.ChangeProps:
          let { props } = change
          props.forEach(item => {
            if (item.value) {
              node.setAttribute(item.prop, item.value)
            } else {
              node.removeAttribute(item.prop)
            }
          })
          console.log('change prop')
          break
        case StateEnums.Remove:
          node.childNodes[change.index].remove()
          console.log('remove now')
          break
        case StateEnums.Insert:
          let dom
          if (isString(change.node)) {
            dom = document.createTextNode(change.node)
          } else if (change.node instanceof Element) {
            dom = change.node.create()
          }
          node.insertBefore(dom, node.childNodes[change.index])
          console.log('insert now')
          break
        case StateEnums.Replace:
          node.parentNode.replaceChild(change.node.create(), node)
          console.log('replace now')
          break
        case StateEnums.Move:
          let fromNode = node.childNodes[change.from]
          let toNode = node.childNodes[change.to]
          let cloneFromNode = fromNode.cloneNode(true)
          let cloenToNode = toNode.cloneNode(true)
          node.replaceChild(cloneFromNode, toNode)
          node.replaceChild(cloenToNode, fromNode)
          console.log('move now')
          break
        default:
          console.log('nothing')
          break
      }
    })
}
},{"./Element":1,"./util":3}],3:[function(require,module,exports){
const StateEnums = {
  ChangeProps: 'changeProps',
  Remove: 'remove',
  Insert: 'insert',
  Replace: 'replace',
  Move: 'move'
}

const isString = function (str) {
  if (typeof str === 'string') {
    return true
  } else {
    return false
  }
}

module.exports = {
  StateEnums,
  isString
}
},{}],4:[function(require,module,exports){
// import { StateEnums, isString, move } from './util'
// import Element from './element'

const { StateEnums, isString, move } = require('./util')
const Element = require('./Element')

module.exports = function diff(oldDomTree, newDomTree) {
  // 鐢ㄤ簬璁板綍宸紓
  let pathchs = {}
  // 涓€寮€濮嬬殑绱㈠紩涓?0
  dfs(oldDomTree, newDomTree, 0, pathchs)
  return pathchs
}

function dfs(oldNode, newNode, index, patches) {
  // 鐢ㄤ簬淇濆瓨瀛愭爲鐨勬洿鏀?
  let curPatches = []
  // 闇€瑕佸垽鏂笁绉嶆儏鍐?
  // 1.娌℃湁鏂扮殑鑺傜偣锛岄偅涔堜粈涔堥兘涓嶇敤鍋?
  // 2.鏂扮殑鑺傜偣鐨?tagName 鍜?`key` 鍜屾棫鐨勪笉鍚岋紝灏辨浛鎹?
  // 3.鏂扮殑鑺傜偣鐨?tagName 鍜?key锛堝彲鑳介兘娌℃湁锛?鍜屾棫鐨勭浉鍚岋紝寮€濮嬮亶鍘嗗瓙鏍?
  if (!newNode) {
  } else if (newNode.tag === oldNode.tag && newNode.key === oldNode.key) {
    // 鍒ゆ柇灞炴€ф槸鍚﹀彉鏇?
    let props = diffProps(oldNode.props, newNode.props)
    if (props.length) curPatches.push({ type: StateEnums.ChangeProps, props })
    // 閬嶅巻瀛愭爲
    diffChildren(oldNode.children, newNode.children, index, patches)
  } else {
    // 鑺傜偣涓嶅悓锛岄渶瑕佹浛鎹?
    curPatches.push({ type: StateEnums.Replace, node: newNode })
  }

  if (curPatches.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(curPatches)
    } else {
      patches[index] = curPatches
    }
  }
}

function diffProps(oldProps, newProps) {
  // 鍒ゆ柇 Props 鍒嗕互涓嬩笁姝ラ
  // 鍏堥亶鍘?oldProps 鏌ョ湅鏄惁瀛樺湪鍒犻櫎鐨勫睘鎬?
  // 鐒跺悗閬嶅巻 newProps 鏌ョ湅鏄惁鏈夊睘鎬у€艰淇敼
  // 鏈€鍚庢煡鐪嬫槸鍚︽湁灞炴€ф柊澧?
  let change = []
  for (const key in oldProps) {
    if (oldProps.hasOwnProperty(key) && !newProps[key]) {
      change.push({
        prop: key
      })
    }
  }
  for (const key in newProps) {
    if (newProps.hasOwnProperty(key)) {
      const prop = newProps[key]
      if (oldProps[key] && oldProps[key] !== newProps[key]) {
        change.push({
          prop: key,
          value: newProps[key]
        })
      } else if (!oldProps[key]) {
        change.push({
          prop: key,
          value: newProps[key]
        })
      }
    }
  }
  return change
}

function listDiff(oldList, newList, index, patches) {
  // 涓轰簡閬嶅巻鏂逛究锛屽厛鍙栧嚭涓や釜 list 鐨勬墍鏈?keys
  let oldKeys = getKeys(oldList)
  let newKeys = getKeys(newList)
  let changes = []

  // 鐢ㄤ簬淇濆瓨鍙樻洿鍚庣殑鑺傜偣鏁版嵁
  // 浣跨敤璇ユ暟缁勪繚瀛樻湁浠ヤ笅濂藉
  // 1.鍙互姝ｇ‘鑾峰緱琚垹闄よ妭鐐圭储寮?
  // 2.浜ゆ崲鑺傜偣浣嶇疆鍙渶瑕佹搷浣滀竴閬?DOM
  // 3.鐢ㄤ簬 `diffChildren` 鍑芥暟涓殑鍒ゆ柇锛屽彧闇€瑕侀亶鍘?
  // 涓や釜鏍戜腑閮藉瓨鍦ㄧ殑鑺傜偣锛岃€屽浜庢柊澧炴垨鑰呭垹闄ょ殑鑺傜偣鏉ヨ锛屽畬鍏ㄦ病蹇呰
  // 鍐嶅幓鍒ゆ柇涓€閬?
  let list = []
  oldList &&
    oldList.forEach(item => {
      let key = item.key
      if (isString(item)) {
        key = item
      }
      // 瀵绘壘鏂扮殑 children 涓槸鍚﹀惈鏈夊綋鍓嶈妭鐐?
      // 娌℃湁鐨勮瘽闇€瑕佸垹闄?
      let index = newKeys.indexOf(key)
      if (index === -1) {
        list.push(null)
      } else list.push(key)
    })
    console.log('list', list)
  
  // 閬嶅巻鍙樻洿鍚庣殑鏁扮粍
  let length = list.length
  // 鍥犱负鍒犻櫎鏁扮粍鍏冪礌鏄細鏇存敼绱㈠紩鐨?
  // 鎵€鏈変粠鍚庡線鍓嶅垹鍙互淇濊瘉绱㈠紩涓嶅彉
  for (let i = length - 1; i >= 0; i--) {
    // 鍒ゆ柇褰撳墠鍏冪礌鏄惁涓虹┖锛屼负绌鸿〃绀洪渶瑕佸垹闄?
    if (!list[i]) {
      list.splice(i, 1)
      changes.push({
        type: StateEnums.Remove,
        index: i
      })
    }
  }
  // 閬嶅巻鏂扮殑 list锛屽垽鏂槸鍚︽湁鑺傜偣鏂板鎴栫Щ鍔?
  // 鍚屾椂涔熷 `list` 鍋氳妭鐐规柊澧炲拰绉诲姩鑺傜偣鐨勬搷浣?
  newList &&
    newList.forEach((item, i) => {
      let key = item.key
      if (isString(item)) {
        key = item
      }
      // 瀵绘壘鏃х殑 children 涓槸鍚﹀惈鏈夊綋鍓嶈妭鐐?
      let index = list.indexOf(key)
      // 娌℃壘鍒颁唬琛ㄦ柊鑺傜偣锛岄渶瑕佹彃鍏?
      if (index === -1 || key == null) {
        changes.push({
          type: StateEnums.Insert,
          node: item,
          index: i
        })
        list.splice(i, 0, key)
      } else {
        // 鎵惧埌浜嗭紝闇€瑕佸垽鏂槸鍚﹂渶瑕佺Щ鍔?
        if (index !== i) {
          changes.push({
            type: StateEnums.Move,
            from: index,
            to: i
          })
          move(list, index, i)
        }
      }
    })
  return { changes, list }
}

function getKeys(list) {
  let keys = []
  let text
  list &&
    list.forEach(item => {
      let key
      if (isString(item)) {
        key = [item]
      } else if (item instanceof Element) {
        key = item.key
      }
      keys.push(key)
    })
  return keys
}

function diffChildren(oldChild, newChild, index, patches) {
  let { changes, list } = listDiff(oldChild, newChild, index, patches)
  if (changes.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(changes)
    } else {
      patches[index] = changes
    }
    console.log('index', index)
  }
  // 璁板綍涓婁竴涓亶鍘嗚繃鐨勮妭鐐?
  let last = null
  oldChild &&
    oldChild.forEach((item, i) => {
      let child = item && item.children
      if (child) {
        index =
          last && last.children ? index + last.children.length + 1 : index + 1
        let keyIndex = list.indexOf(item.key)
        let node = newChild[keyIndex]
        // 鍙亶鍘嗘柊鏃т腑閮藉瓨鍦ㄧ殑鑺傜偣锛屽叾浠栨柊澧炴垨鑰呭垹闄ょ殑娌″繀瑕侀亶鍘?
        if (node) {
          dfs(item, node, index, patches)
        }
      } else index += 1
      last = item
    })
}
},{"./Element":1,"./util":3}],5:[function(require,module,exports){
const Element = require('./Element')
const diff = require('./virsualDom')
const patch = require('./patch')

let test4 = new Element('div', { class: 'my-div', key:'t4' }, ['test4'])
let test5 = new Element('ul', { class: 'my-div', key: 't5' }, ['test5'])

let test1 = new Element('div', { class: 'my-div', key: 'kkk' }, [test4, test5])
let root = test1.render()

let test2 = new Element('div', { id: '11' }, [test5, test4])

// 鍚屼竴涓妭鐐?鍒犻櫎
// let test100 = new Element('div', { class: 'my-div' }, [test5])
// let pathchs = diff(test1, test100)

// move
let test101 = new Element('div', { class: 'my-div', key: 'kkk' }, [test5, test4])
let pathchs = diff(test1, test101)

// let pathchs = diff(test1, test2)

console.log(pathchs)

setTimeout(() => {
  console.log('begin change')
  patch(root, pathchs)
  console.log('end')
}, 1000)
},{"./Element":1,"./patch":2,"./virsualDom":4}]},{},[5]);
