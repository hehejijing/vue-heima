<template>
  <div>
    <h1>国内网站粉丝数量：{{ num | out(4) }}</h1>
    <h1>国外网站粉丝数量：{{ num | out(3) }}</h1>
    <h1>{{ time | ttm("-") }}</h1>
    <h1>{{ time | ttm("/") }}</h1>
    <h1></h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: "1876986",
      time: 1636450540055,
    }
  },
  filters: {
    out: (val, n) => {
      const arr = val.split("")
      arr.splice(arr.length - n, 0, ",")
      let arr1 = arr.join("")
      return arr1 + (n == 3 ? "千" : "万")
    },
    ttm: (timestamp,x) => {
      var date = new Date(timestamp)
      console.log(date)
      const Y = date.getFullYear() + x

      const M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + x

      const D = date.getDate() + " "

      return Y + M + D
    },
  },
}
</script>

<style></style>
