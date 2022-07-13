<template>
  <div>
   <!-- 语法： v-on:事件名='少量代码'
   语法： v-on:事件名='methods里函数名'
   语法： v-on:事件名='methods里函数名（值）'
   语法： @事件名='methods里函数名' -->

   <p>商品总数{{count}} </p>
   <button v-on:click="count++">+1</button>
   <button v-on:click="btn">+1</button>
   <button v-on:click="btn1(5)">+5</button>
   <button @click="btn2">-1</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count : 0
    }
  },
  methods:{
    btn() {
      console.log(this);
      this.count++
    },
    btn1(val) {
      this.count +=val
    },
    btn2() {
      this.count--
    }
  }
}
</script>
