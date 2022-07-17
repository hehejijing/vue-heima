<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <!--  让item.c 关联选中状态 -->
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    }
  },
  computed: {
    isAll: {
      set (val) {
        this.arr.forEach((item) => {
          item.c = val
        })
      },
      get () {
        return this.arr.every((item) => item.c === true)
        //every 查找到数组中不符合条件的元素 直接返回false  查找不到 返回true
      },
    },
  },
  methods: {
    btn () {
      this.arr.forEach(item => item.c = !item.c)
    },
  },
}
</script>
