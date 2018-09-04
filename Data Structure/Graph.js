const Dictionary = require('./Dictionary')
const Queue = require('./Queue')

class Graph {
  constructor() {
    this.vertices = [] // 顶点集合
    this.adjList = new Dictionary() // 存储领接表
  }
  // 添加顶点
  addVertex(v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }
  // 添加边
  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v) // 两个顶点都要添加（如果是无向图的话）
  }
  // 打印图
  toString () {
    var str = ''
    for (var i = 0; i < this.vertices.length; i++) {
      str += this.vertices[i] + ' -> '
      var neighbors = this.adjList.get(this.vertices[i])
      str += neighbors.join(' ')
      str += '\n'
    }
    return str
  }
  // 广度优先
  bfs (v) {
    // 三种颜色状态
    // white 没访问过
    // grey 访问中（入队了），避免重复入队
    // black 访问完了（包括相邻节点）
    var color = this.initializeColor()
    var queue = new Queue()
    var str = ''
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      var u = queue.dequeue()
      color[u] = 'grey'
      str += u + ' '
      var neighbors = this.adjList.get(u)
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(neighbors[i])
        }
      }
    }
    console.log('bfs ', str)
  }
  // 重新封装顶点，使之有颜色
  initializeColor () {
    var color = []
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = 'white'
    }
    return color
  }
}

var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString())
graph.bfs('A')