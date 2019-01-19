// 入口
module.exports = {
  entry: './path/to/my/entry/file.js'
}

module.exports = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
}

// 多页面
module.exports = {
  entry: {
    pageOne: '1.js',
    pageTwo: '2.js',
    pageThree: '3.js'
  }
}


// 输出
module.exports = {
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
}


// 模式
var config = {
  // ...
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // ...
  }

  return config
}