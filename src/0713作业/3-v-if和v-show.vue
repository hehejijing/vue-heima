<template>
  <div>

    <p v-show="isShow">我是v-show指令</p>
    <button @click="isShow = !isShow">click me show</button>
    <br />

    <p v-if="isIf">我是v-if指令</p>
    <button @click="isIf = !isIf">click me if</button>
  </div>
</template>

<script>
//v-show 是通过改变元素的display属性 来隐藏和显示元素的 适用于经常切换的场景 占用资源较少
//v-if 是通过生成和删除dom 元素来实现效果的 适用于只显示一次或少次的场景

export default {
  data () {
    return {
      isShow: false,
      isIf: false,
      age: 18,
    }
  },

  mounted () {},

  methods: {},
}
</script>
