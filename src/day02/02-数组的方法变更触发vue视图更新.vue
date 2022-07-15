<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="Fn1">数组翻转</button>
    <button @click="Fn2">截取前3个</button>
    <button @click="Fn3">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: "Demo02Test",
  data () {
    return {
      arr: [5, 3, 9, 2, 1],
    }
  },
  methods: {
    Fn1 () {
      this.arr.reverse()
    },
    Fn2 () {
      this.arr.splice(0,3)//splice(开始的位置，删除的长度，替换的元素)
    },
    Fn3 () {
      // this.arr[0] = 1000;
      // console.log(this.arr);
      // vm.$set(target, propertyName/index, value)
      // target 目标对象
      // propertyName/index 属性/索引号
      // value
      this.$set(this.arr,0,1000)
    }
  },
}
</script>
