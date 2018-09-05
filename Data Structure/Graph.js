const Dictionary = require('./Dictionary')
const Queue = require('./Queue')
const Stack = require('./Stack')

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
  // 改进的广度优先
  BFS (v) {
    var color = this.initializeColor(),
        queue = new Queue(),
        d = [], // 存储 v 到某个顶点 w 的最短距离
        pred = [] // 存储每个顶点的前溯顶点
    queue.enqueue(v)
    // 初始化
    for (var i = 0; i < this.vertices.length; i++) {
      d[this.vertices[i]] = 0
      pred[this.vertices[i]] = null
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue()
      var neighbors = this.adjList.get(u)
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          // u 是当前出队的顶点
          // w 是 u 的相邻顶点
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distance: d,
      predecessors: pred
    }
  }
  // 获取顶点到其他顶点的路径
  getPath (fromVertex) {
    var vertices = this.vertices
    for (var i = 0; i < vertices.length; i++) {
      var toVertex = vertices[i]
      // 如果当前的点和源顶点相同，则进入下一个循环
      if (fromVertex === toVertex) {
        continue
      }
      var path = new Stack()
      var shorttestPath = this.BFS(fromVertex)
      for (var v = toVertex; v !== fromVertex; v = shorttestPath.predecessors[v]) {
        path.push(v)
      }
      var str = fromVertex
      while (!path.isEmpty()) {
        str += ' - ' + path.pop()
      }
      console.log(str)
    }
  }
  // 深度优先
  dfs () {
    var color = this.initializeColor()
    // for (var i = 0; i < this.vertices.length; i++) {
      this.dfsVisit(this.vertices[0], color)
    // }
  }
  dfsVisit (u, color) {
    color[u] = 'grey'
    console.log(u)
    var neighbors = this.adjList.get(u)
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i]
      if (color[w] === 'white') {
        this.dfsVisit(w, color)
      }
    }
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
// console.log(graph.toString())
// graph.bfs('A')

// var o = graph.BFS('A')
// console.log(o.predecessors)

// graph.getPath('B')
graph.dfs()
