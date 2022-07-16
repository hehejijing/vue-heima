<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <PannelL1></PannelL1>
    <PannelL1></PannelL1>
    <!-- 使用的时候  -->
    <!-- <组件名></组件名> -->
    <PanelG></PanelG>
    <panel-g></panel-g>
  </div>
</template>

<script>
// 1.创建组件
// .vue文件 components文件 复用类型组件  component 组件
// 把可以重复使用的html/css/js 抽取出来，放在一个单独的文件里， 一般放在 components

// 2. 引入注册组件
// import 组件对象 from 'vue文件路径'

// 2.1 局部注册
// components: {
//  "组件名": 组件对象
// }

// 2.2 全局注册
// Vue.component("组件名", 组件对象)

// 3.组件使用 当成普通标签来用即可
// <组件名></组件名>
// <PannelG></PannelG>
// <PannelG/>
// <pannel-g></pannel-g>
import PannelL from "./components/Panel.vue";
console.log(PannelL);
export default {
  data() {
    // 必须是函数 函数里边在返回一个对象
    return {};
  },
  // data: {
  // },
  components: {
    PannelL1: PannelL,
  },
};
</script>

<style lang="less" scoped>
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
