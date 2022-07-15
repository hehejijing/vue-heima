<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }} <button @click="arr.splice(index,1)">删除</button> <span v-show="true">{{index}}</span>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [1, 3, 5],
    }
  },
  methods: {
    add () {
      const num = parseInt(Math.random() * 100)
      this.arr.push(num)
    },

  },
}
</script>

<style></style>
