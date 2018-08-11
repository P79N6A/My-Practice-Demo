// 模拟实现 ES6 的 Set
class Set {
  constructor () {
    this._items = {}
    this._length = 0
  }
  has (value) {
    return value in this._items
  }
  add (value) {
    if (this.has(value)) return false
    this._items[value] = value
    this._length++
    return true
  }
  remove (value) {
    if (!this.has(value)) return false
    delete this._items[value]
    this._length--
    return true
  }
  clear () {
    this._items = {}
    this._length = 0
    return true
  }
  size () {
    return this._length
  }
  values () {
    return Object.keys(this._items)
  }
}

var set = new Set()
set.has(1)
set.add(1)
