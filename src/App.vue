<template>
  <div>
    <!-- watch侦听器: 作用可以侦听data/computed属性值改变, 当侦听的属性发生变化的时候，会触发对应的处理函数 
    语法：
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
      }
    }-->
    <input type="text" v-model="name" />
    <button @click="msg.count++">click me</button>
  </div>
</template>

<script>
export default {
  name: "VueTest",
  data () {
    return {
      name: "",
      msg: {
        count: 1,
      },
    }
  },
  // watch: {
  //   name (newVal, oldVal) {
  //     console.log(newVal, oldVal);
  //   },
  // },

  computed: {
    cloneMsg () {
      //深拷贝问题
      return JSON.parse(JSON.stringify(this.msg))
    },
  },
  watch: {
    cloneMsg: {
      deep: true,
      // immediate: true,
      handler (val, oldVal) {
        console.log("val", val)
        console.log("oldVal", oldVal)
      },
    },
  },

  /*   watch: {
    msg: {
      deep: true,

      handler (val, oldVal) {
        console.log(val.count);
        console.log(oldVal.count);
      },

  }, */

  //通过属性的方法
  /* 
  watch: {
    "msg.count" (val, oldVal) {
      console.log("val", val);
      console.log("oldVal", oldVal);
    },
  }, */
}
</script>
