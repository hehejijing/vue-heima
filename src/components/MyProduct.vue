<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ info }}</p>
    <button @click="kanjia">click me</button>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "info", "index"],
  methods: {
    kanjia() {
      // props 属性现在是只读的，不允许你做修改
      // this.price--;
      // 子组件.$emit('自定义事件名称'， 参数)
      this.$emit("del", this.index);
      // 砍价 1
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
