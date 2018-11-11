var fs = require('fs')


// 要返回 [ [date] [value] ]
function createDate (initDate, addTime, count) {
  let returnDate = {
    dates: [],
    values: []
  }
  for (let i = 0; i < count; i++) {
    // 获得日期
    var randomValue = Math.floor(Math.random() * 800)
    returnDate.dates.push(initDate + addTime * i)
    returnDate.values.push(randomValue)
  }
  return returnDate
}

var data = JSON.stringify(createDate(1199145600000, 1000000, 1000))

fs.writeFile('1.js', data, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('ok')
  }
})