<template>
  <div>
    <div>
      选择所在地区:

      <input type="radio" name="area" value="中国大陆" v-model="area" />中国大陆
      <input
        type="radio"
        name="area"
        value="中国香港"
        v-model="area"
      />中国香港<br />
    </div>

    <div>手机号码： <input type="text" v-model.number="phone" /><br /></div>

    <div>年龄：<input type="text" v-model.number="age" /><br /></div>

    <div>密码：<input type="password" v-model="pwd" /><br /></div>

    <div>
      爱好：<input type="checkbox" value="看书" name="hobby"  v-model="hobby" />看书
      <input type="checkbox" value="学习" name="hobby"  v-model="hobby">学习
      <input type="checkbox" value="写代码" name="hobby"  v-model="hobby">写代码
      <input type="checkbox" value="游戏" name="hobby"  v-model="hobby">游戏<br />
    </div>

    <div><input type="checkbox" value="记住密码" v-model="remember">记住密码<br /></div>
    ===================================================================================
    <div>我来自：{{ area }}</div>
    <div>手机号码是：{{ phone }}</div>
    <div>年龄是：{{ age }}</div>
    <div>密码是：{{ pwd }}</div>
    <div>爱好：{{ hobby.join(",") }}</div>
    <div>是否记住密码：{{remember?'是':'否'}} </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      area: "中国大陆",
      phone: "",
      age: "",
      pwd:'',
      hobby:['学习','写代码'],
      remember:''
    }
  },
}
</script>

<style></style>
