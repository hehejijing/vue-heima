<template>
  <div class="dog">
    <img
      :src='ImgUrl'
      alt=""
    />
    <p>{{dogName}}</p>
  </div>
</template>

<script>
export default {


  props: ["ImgUrl",'dogName'],
}
</script>

<style>
.dog {
  width: 33.33%;
  border: 1px solid black;
  text-align: center;
  display: inline-block;
}
div img {
  width: 100%;
  height: 100%;
}
</style>
