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
  // 并集
  union (otherSet) {
    var unionSet = new Set()
    var values = this.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    var otherValues = otherSet.values()
    for (let i = 0; i < otherValues.length; i++) {
      unionSet.add(otherValues[i])
    }

    return unionSet
  }
  // 交集
  intersection (otherSet) {
    var intersectionSet = new Set()
    var values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
  // 差集
  difference (otherSet) {
    var differentSet = new Set()
    var values = this.values()
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differentSet.add(values[i])
      }
    }
    return differentSet
  }
  // 是否是 otherSet 的子集
  subset (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      var values = this.values()
      for (let i = 0; i < values; i++) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
  }
}

var set = new Set()
set.has(1)
set.add(1)
var set2 = new Set()

set2.add(1)
set2.add(2)

console.log('union set', set.union(set2))
console.log('intersection', set.intersection(set2))
console.log('different', set2.difference(set))
console.log('sub', set.subset(set2))
