<template>
  <div id="app">
    {{msg}}
    <h2>{{obj.name}}</h2>
    <h1>{{obj.name == '我爱一条柴' ? "传说有个魔仙堡" : "有个女王不洗脚"}} </h1>
  </div>
</template>

<script>

export default {
  name : "app",
  data()  {
    return {
    msg : '桃花浪子刘三少',
    obj : {
      name : '我爱一条柴'
    }
    }
  }
}
</script>


