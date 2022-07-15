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





// let str = 'asdasdasdasdasdasd'
//     // {a:6,s:6,d:6}
//     // obj = {} obj.a undefined

//     // 第一步 转换成数组
//     let arr = str.split(''); // [a,b,c,d]
//     arr.reduce((pre, next) => {
//       // pre 上一次回调函数返回的结果 {}
//       // next 当前循环到的值 'a'
//       pre[next] ? pre[next]++ : pre[next] = 1
//       return pre
//     }, {})