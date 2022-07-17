<template>
  <div class="dog">
    <img
      src="https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg"
      alt=""
    />
    <p>这是一只狗</p>
  </div>
</template>

<script>
export default {
  props: ["Src"],
}
</script>

<style>
.dog {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  display: inline-block;
}
div img {
  width: 100%;
  height: 100%;
}
</style>
