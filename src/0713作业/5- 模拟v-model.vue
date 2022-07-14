<template>
  <div>
 
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
// v-model 是通过v-bind给元素 绑定 数据 ，然后修改了页面上数据 通过某些事件获取到值 并将获取到的值赋给变量 从而达到双向绑定的效果
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
