let arr = [{ a: 100 }, { a: 20 }, { a: -10 }]
//reduce 会为数组中的每一项都实行一次回调函数
//total 为必选，是回调函数结束后的返回值
//currentValue 必选 为当前操作的元素
//currentIndex 非必选 为当前操作元素的索引
//arr 非必选 为当前操作的数组
//reduce  必须有return
const sum = arr.reduce((total, currentValue, currentIndex,arr) => {
  console.log(total, currentValue, currentIndex,arr)
  return total + currentValue.a
},0) //0 可选 为传递给函数的初始值 不写默认为0
console.log(sum)
