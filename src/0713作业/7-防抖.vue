<template>
  <div>
    <button @click="clickFn">弹窗</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: "",
    }
  },
  methods: {
    get () {
      alert("我爱一条柴")
    },
    time () {
      this.timer = setTimeout(this.get, 3000)
    },
    clickFn () {
      clearTimeout(this.timer)
       this.timer = setTimeout(this.get, 3000)
    },
  },
}
</script>

<style></style>
