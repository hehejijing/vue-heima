<template>
  <tr>
    <th><input type="checkbox" /> <span></span></th>
    <th>{{ name }}</th>
    <th>{{ price }}</th>
    <th><button @click="subtract(index)">-</button> {{ num }}  <button @click="add(index)">+</button></th>
    <th>{{ num * price }}</th>
    <th><button @click="del">删除</button></th>
  </tr>
</template>

<script>
export default {
  props: ["name", "num", "price", "index","goodList"],
  methods: {
    del () {
      // eslint-disable-next-line vue/no-mutating-props
      this.goodList.splice(this.index,1)
    },
    add (val) {
      // eslint-disable-next-line vue/no-mutating-props
      this.goodList[val].num += 1
    },
    subtract (val) {
      if (this.goodList[val].num == 1) {
        // eslint-disable-next-line vue/no-mutating-props
        return this.goodList.splice(val, 1)
      }
      // eslint-disable-next-line vue/no-mutating-props
      this.goodList[val].num -= 1
    },
  },
}
</script>

<style></style>
