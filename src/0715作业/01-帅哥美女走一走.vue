<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="go">走一走</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: ["帅哥", "美女", "狗"],
    }
  },
  methods: {
    go () {
      const ele = this.arr[0]
      this.arr.splice(0, 1)
      this.arr.push(ele)
    },
  },
}
</script>

<style></style>
