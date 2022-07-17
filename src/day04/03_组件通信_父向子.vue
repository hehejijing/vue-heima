<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去

        实现子组件里的内容 可以自定义
     -->
    <MyProduct title="我的标题" :price="50" :info="info"></MyProduct>
    <MyProduct title="我的标题1" :price="500" :info="info"></MyProduct>
    <MyProduct title="我的标题2" :price="50000" :info="info"></MyProduct>
  </div>
</template>

<script>
// 引入
import MyProduct from "./components/MyProduct.vue"
export default {
  data () {
    return {
      msg: "超级好吃的口水鸡",
      info: "超级好吃的口水鸡",
    }
  },
  components: {
    // MyProduct: MyProduct
    MyProduct,
  },
}
</script>
