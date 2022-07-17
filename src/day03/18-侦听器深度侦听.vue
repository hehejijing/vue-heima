<template>
  <div>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: "",
        age: 0,
      },
    }
  },
  watch: {
    user: {
      handler (newVal, oldVal) {
        //user里的对象
        console.log(newVal, oldVal)
      },
      deep: true, //深度侦听(对象里面层的值改变)
      immediate: true,//立即侦听 (网页打开handler执行一次)
    },
  },
}
</script>

<style></style>
