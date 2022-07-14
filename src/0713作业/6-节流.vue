<template>
  <div>
    <div class="box" @click="print"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: true,
      timer: "",
    }
  },
  methods: {
    time () {
      setTimeout(() => {
        this.flag = true
      }, 1000)
    },
    print () {
      if (this.flag) {
        console.log(111)
        this.flag = false

        this.time()
      }
    },
  },
}
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: lime;
}
</style>
