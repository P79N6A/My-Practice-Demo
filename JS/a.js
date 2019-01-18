function flatMap (arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => {
      return Array.isArray(b) ? [...a, ...b] : [...a, b]
    }, [])
  }
}
var arr = [1, [2, [3, 4]], 5, 6, [7, 8], 9]
flatMap(arr)


function flattenDeep (arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
  } else {
    return [arr]
  }
}
var arr = [1, [2, [3, 4]], 5, 6, [7, 8], 9]
flattenDeep(arr)