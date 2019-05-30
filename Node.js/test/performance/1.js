var nativeMap = function (arr, cb) {
  return arr.map(cb);
};

var customMap = function (arr, cb) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    ret.push(cb(arr[i], i, arr));
  }
  return ret;
};

var run = function (name, times, fn, arr, cb) {
  var start = (new Date()).getTime();
  for (var i = 0; i < times; i++) {
    fn(arr, cb);
  }
  var end = (new Date()).getTime();
  console.log('Running %s %d times cost %d ms', name, times, end - start);
}

var callback = function (item) {
  return item;
}

run('nativeMap', 1000000, nativeMap, [0, 1, 2, 3, 5, 6], callback);
run('customMap', 1000000, customMap, [0, 1, 2, 3, 5, 6], callback);