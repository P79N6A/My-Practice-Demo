class Dictionary {
  constructor () {
    this._items = {}
    this._length = 0
  }
  has (key) {
    return key in this._items
  }
  set (key, value) {
    this._items[key] = value
    this._length++
    return true
  }
  remove (key) {
    if (!this.has(key)) return false
    delete this._items[key]
    this._length--
    return true
  }
  get (key) {
    return this.has(key) ? this._items[key] : undefined
  }
  values () {
    var arr = []
    for (let key in this._items) {
      if (this._items.hasOwnProperty(key)) {
        arr.push(this._items[key])
      }
    }
    return arr
  }
  keys () {
    return Object.keys(this._items)
  }
  clear () {
    this._items = {}
    this._length = 0
    return true
  }
  size () {
    return this._length
  }
  // 获得对象
  getItems () {
    return this._items
  }
}

// Dictionary.prototype.x = 11111

// var d = new Dictionary()
// d.has('name')
// d.set('name', 'Lin')
// // d.remove('name')
// d.values()
// d.size()
// d.getItems()

module.exports = Dictionary
