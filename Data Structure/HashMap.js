const LinkedList = require('./LinkedList')

class ValuePair {
  constructor (key, value) {
    this._key = key
    this._value = value
  }
  toString () {
    return `[${this._key} - ${this._value}]`
  }
}

const _table = new WeakMap()
const _loseloseHashCode = (key) => {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37 // 求余一个任意数来获得一个比较小的 hash
}
class table {
  constructor () {
    _table.set(this, [])
  }
  put (key, value) {
    const position = _loseloseHashCode(key)
    let table = _table.get(this)
    if (table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
    return true
  }
  remove (key) {
    const position = _loseloseHashCode(key)
    let table = _table.get(this)

    if (table[position]) {
      // 遍历链表来找到对应的值
      let current = table[position].getHead()
      let index = 0
      while (current.next) {
        if (current.element._key === key) {
          return table[position].removeAt(index)
        }
        current = current.next
        index++
      }
      // 对最后一个节点进行判断
      if (current.element._key === key) {
        return table[position].removeAt(index)
      }
    }
    return undefined
  }
  get (key) {
    const position = _loseloseHashCode(key)
    let table = _table.get(this)
    
    if (table[position] !== undefined) {
      // 遍历链表来找到对应的值
      let current = table[position].getHead()
      // 如果链表为空，重置
      if (!current) {
        table[position] = undefined
        return undefined
      }
      while (current.next) {
        if (current.element._key === key) {
          return current.element._value
        }
        current = current.next
      }
      // 对最后一个节点进行判断
      if (current.element._key === key) {
        return current.element._value
      }
    }
    return false
  }
}

const ht = new table()
ht.put('name', 'Lin')
ht.put('eman', 'xlc')
// console.log('get', ht.get('name'))
// console.log('get', ht.get('eman'))

ht.remove('name')
console.log('get', ht.get('name'))
// console.log('get', ht.get('eman'))

ht.remove('eman')
console.log('get', ht.get('eman'))

// 一个比较推荐的散列函数
let djb2HashCode = (key) => {
  let hash = 5381
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i)
  }
  return hash % 1013
}

