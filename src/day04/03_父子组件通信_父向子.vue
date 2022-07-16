<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去


      需求： 实现面板组件标题自定义
     -->
    <PannelL title="test"></PannelL>
    <PannelL :title="test"></PannelL>
  </div>
</template>

<script>
// 引入
import PannelL from "./components/Panel.vue";
export default {
  data() {
    return {
      test: "撒打算大",
    };
  },
  components: {
    // PannelL: PannelL,
    PannelL,
  },
};
</script>
