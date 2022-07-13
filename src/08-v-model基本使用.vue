<template>
  <div>
    <!-- v-model:是实现vuejs 变量和表单标签value属性, 双向绑定的指令-->
    <div>
      <span>用户名:</span>
      <input type="text" :value="username" @input="btn" />
    </div>
    <div>
      <span>密码: </span>
      <input type="password" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: "我爱一条柴",
    }
  },
  methods: {
    btn (e) {
      this.username = e.target.value
    },
  },
}
</script>
