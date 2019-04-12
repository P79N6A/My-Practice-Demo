<<<<<<< HEAD
function reverse (pHead) {
  var head = reverse(pHead)
  head.next = pHead
}
=======
class Graph {
  constructor(vertices) {
    this.vertices = vertices || [] // 点的集合
    this.adjList = new Map() // 邻接表
    console.log(vertices)
    // 为传入的所有点添加存放相邻顶点的空间
    this.vertices.forEach((v) => this.addVertex(v))
  }
  // 添加点
  addVertex(v) {
    this.vertices.push(v)
    // 分配相邻顶点的空间
    this.adjList.set(v, [])
  }
  // 添加边
  addEdge(v, u) {
    // 判断点是否存在
    if (this.vertices.indexOf(v) === -1 || this.vertices.indexOf(u) === -1) {
      return false
    }
    this.adjList.get(v).push(u)
    this.adjList.get(u).push(v)
  }

  // 初始化所有节点的颜色
  // white：表示没有访问过
  initColor() {
    var colors = {}
    this.vertices.forEach(v => {
      colors[v] = 'white'
    })
    return colors
  }

  // bfs
  bfs(firstVertex) {
    // 要用颜色来记录顶点是否被访问过呀
    // white：未访问 grey：访问过，没访问完它的相邻顶点
    // black：访问完了
    var colors = this.initColor()
    var queue = []
    queue.push(firstVertex)
    while (queue.length > 0) {
      // 出队列
      var vertex = queue.shift()
      colors[firstVertex] = 'grey'
      console.log('访问了：' + vertex)
      // 设置顶点访问状态为 grey
      // 将顶点的所有未访问的相邻节点入队
      // 同时要设置为 grey，避免其他顶点又重复将某个该顶点入队
      this.adjList.get(vertex).forEach(v => {
        if (colors[v] === 'white') {
          colors[v] = 'grey'
          queue.push(v)
        }
      })
      // 当前顶点访问完了，就可以设置为 black
      colors[vertex] = 'black'
    }
  }
  // 改进的 BFS，可以用来求顶点到其他顶点的最短路径
  // 需要每个顶点都知道它的前溯点，用来推算它的路径
  // 还需要保存距离
  BFS(firstVertex) {
    // 初始化
    var colors = this.initColor()
    var preVertex = {}
    var distance = {}
    for (var i = 0, len = this.vertices.length; i < len; i++) {
      var v = this.vertices[i]
      preVertex[v] = null
      distance[v] = 0
    }
    var queue = []
    queue.push(firstVertex)
    while (queue.length > 0) {
      // 当前要访问的顶点，出队
      var vertex = queue.shift()
      colors[vertex] = 'grey'
      var neighbors = this.adjList.get(vertex)
      neighbors.forEach(v => {
        if (colors[v] === 'white') {
          colors[v] = 'grey'
          // 在当前顶点的基础上加1
          distance[v] = distance[vertex] + 1
          preVertex[v] = vertex
          queue.push(v)
        }
      })
      // 访问完了
      colors[vertex] = 'black'
    }
    return {
      distance,
      preVertex
    }
  }

  // 深度优先遍历
  // 非递归实现，但是感觉好像不太对呀 emmm
  dfs(firstVertex) {
    var colors = this.initColor()
    // 栈，用来存放待访问的顶点的
    var stack = []
    stack.push(firstVertex)
    colors[firstVertex] = 'grey'
    while (stack.length > 0) {
      // 栈顶出栈
      var vertex = stack.pop()
      // 访问该顶点
      colors[vertex] = 'grey'
      console.log('访问了：', vertex)
      // 获得该顶点的邻接顶点
      var neighbours = this.adjList.get(vertex)
      // 从右往左压栈
      var i = neighbours.length - 1
      while (i >= 0) {
        var v = neighbours[i]
        // 只有顶点还未被访问才要入栈呀
        if (colors[v] === 'white') {
          colors[v] = 'grey'
          stack.push(v)
        }
        i--
      }
    }
  }
  // dfs 递归实现
  dfs_recursion(firstVertex) {
    var colors = this.initColor()
    var ctx = this
    // 发现时间
    var discovery = {}
    // 完成时间
    var finish = {}
    // 时间
    var time = 0
    // 记录顶点的前溯点
    var preVertex = {}
    dfs(firstVertex)

    function dfs(vertex) {
      discovery[vertex] = ++time
      colors[vertex] = 'grey'
      console.log('访问了：', vertex)

      var neighbors = ctx.adjList.get(vertex)
      neighbors.forEach(v => {
        if (colors[v] === 'white') {
          preVertex[v] = vertex
          dfs(v, colors, ctx)
        }
      })
      // 顶点已经访问完辣
      colors[vertex] = 'black'
      finish[vertex] = ++time
    }

    return {
      discovery,
      finish,
      preVertex
    }
  }
}

// var graph = new Graph()
// // 添加点
// var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// vertices.forEach((v) => {
//   // 为了避免 this 丢失，我这里这样写
//   // 而不是直接传入 graph.addVertext 导致默认绑定
//   graph.addVertex(v)
// })
// // 添加边
// graph.addEdge('A', 'B')
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');
// console.log(graph)

// bfx
// graph.bfs(graph.vertices[0])
// var shortest = graph.BFS(graph.vertices[0])
// function getShortestPath (shortest) {

// }


// // dfs
// graph.dfs(graph.vertices[0])
// graph.dfs_recursion(graph.vertices[0])
>>>>>>> 1e6cc58594acddd50a4d6295ea97b8a855ffdb55
