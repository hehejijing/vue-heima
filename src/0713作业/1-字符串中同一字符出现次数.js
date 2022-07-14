let str = "esdfsfqweaszfwefsdfqwefsd"
const arr = str.split("")
let obj = {}
arr.reduce((total, currentValue) => {
  if (!obj[currentValue]) {
    obj[currentValue] = 1
  } else {
    obj[currentValue] = obj[currentValue] + 1
  }
  return obj
}, 0)

console.log(obj)