<template>
  <div>
    <!-- 需求： age 大于等于18，页面显示 成年人
         age 小于18 并且 大于等于12 ，页面显示 青少年
         age 小于12 ，页面显示 儿童 -->

    <!-- v-if v-else-if v-else 配合使用 -->
    <h1 v-if="age >= 18">我爱一条柴</h1>
    <h1 v-else-if="age >= 12">我爱两条柴</h1>
    <h1 v-else>我爱三条柴</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      age: 1,
    }
  },
}
</script>
<style></style>
