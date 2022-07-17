<template>
  <div>
    <dog
      v-for="(obj, index) in arr"
      :key="index"
      :ImgUrl="obj.dogImgUrl"
      :dogName="obj.dogName"
    ></dog>
  </div>
</template>

<script>
import dog from "./components/07-16作业临时.vue"
export default {
  data () {
    return {
      arr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129955.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129957.jpg",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129956.jpg",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129962.jpg",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129954.jpg",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129959.jpg",
          dogName: "萨摩耶",
        },
      ],
    }
  },
  components: {
    dog
  }
}
</script>

<style></style>
