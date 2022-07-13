<template>
  <div>
    <!-- 1. 变量准备-静态页面铺设 -->
    <h1>{{ msg }}</h1>
    <!-- 2. 绑定点击事件 -->
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "Hello, World",
    }
  },
  methods: {
    btn () {
      let arr = this.msg.split("") //将字符串转为数组
      arr.reverse() //反转数组  会改变原数组
      const str = arr.join("") //将数组拼接成字符串
      this.msg = str

      // this.msg = this.msg.split("").reverse().join("");
    },
  },
}
</script>
