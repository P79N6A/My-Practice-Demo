// var buf = new ArrayBuffer(32)
// var dataView = new DataView(buf)
// console.log(dataView.getUint8(0))

// var buf = new ArrayBuffer(12000)
// console.log(buf.byteLength)

// var x1 = new Uint8Array(buf)
// x1[0] = 1
// console.log(x1)

var buffer = new ArrayBuffer(32)
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}