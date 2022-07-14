const url = "http://www.baidu.com?name=zhangsan&age=18&sex=nan#"

const arr = url.split("?")//将需要的信息部分 分隔开 

const arr1 = arr[1].slice(0, arr[1].length - 1) //去掉末尾的#
const arr2 = arr1.split("&") //分割字符串 用数组接收
let obj = {}

arr2.forEach(item => { // 遍历数组 并将值添加到对象当中
  const arr3 = item.split("=")
  let str1 = arr3[0]
  let str2 = arr3[1]
  obj[str1] = str2
})
console.log(obj)
