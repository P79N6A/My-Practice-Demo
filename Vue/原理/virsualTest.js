const Element = require('./Element')
const diff = require('./virsualDom')
const patch = require('./patch')

let test4 = new Element('div', { class: 'my-div', key:'t4' }, ['test4'])
let test5 = new Element('ul', { class: 'my-div', key: 't5' }, ['test5'])

let test1 = new Element('div', { class: 'my-div', key: 'kkk' }, [test4, test5])
let root = test1.render()

let test2 = new Element('div', { id: '11' }, [test5, test4])

// 同一个节点 删除
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