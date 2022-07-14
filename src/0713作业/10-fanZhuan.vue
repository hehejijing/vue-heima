<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="btn">爱的魔力转圈圈</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "Hello, world",
    }
  },
  methods: {
    btn () {
      // let arr = this.msg.split("") //将字符串转化为数组
      // arr.reverse() //反转数组 （改变原数组）
      // let str = arr.join("") //将数组转化为字符串
      // this.msg = str
      // console.log(str)
      this.msg = this.msg.split("").reverse().join("")
    },
  },
}
</script>

<style></style>
