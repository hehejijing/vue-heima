<template>
  <div>
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法: v-bind:原生属性名="vue变量"
			语法: :原生属性名="vue变量"-->
    <a v-bind:href="url">点击去百度</a>
    <img :src="imgUrl" />
    <img :src="localImg" />
    <a>点击去百度</a>
  </div>
</template>

<script>
import imgObj from "./assets/01.jpg" // 唯独js需要导入图片文件(css/标签里可以直接使用图片地址)
// http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg
export default {
  data () {
    return {
      url: "http://www.baidu.com",

      imgUrl:
        "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
      localImg: imgObj,
    }
  },
}
</script>
