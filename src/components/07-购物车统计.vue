<template>
  <tr>
    <td>合计:{{sum1}}</td>
    <td colspan="5"></td>
  </tr>
</template>

<script>
export default {
  props: ["num", "price", "goodList"],
  computed: {
    sum () {
      let sum1 = 0
      this.goodList.foreach((item) => {
        sum1 = sum1 + item.num * item.price
      })
      return sum1
    },
  },
}
</script>

<style></style>
