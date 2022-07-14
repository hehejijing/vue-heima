<template>
  <div>
    {{ str }}
    <h1 v-html="str"></h1>
    <h1 v-text="str"></h1>
  </div>
</template>

<script>
// 需求：str 变量渲染到页面上
//v-text 输出的是纯文本 不解析html标签
//v-html 会先解析html标签 然后输出内容
export default {
  data () {
    return {
      str: "<span>我是一个span</span>",
    }
  },
}
</script>
