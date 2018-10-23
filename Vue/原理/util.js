const StateEnums = {
  ChangeProps: 'changeProps',
  Remove: 'remove',
  Insert: 'insert',
  Replace: 'replace',
  Move: 'move'
}

const isString = function (str) {
  if (typeof str === 'string') {
    return true
  } else {
    return false
  }
}

module.exports = {
  StateEnums,
  isString
}