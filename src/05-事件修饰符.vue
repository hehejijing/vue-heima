<template>
  <div @click="fatherFn">
    <!-- vue对事件进行了修饰符设置, 在事件后面.修饰符名即可使用更多的功能 
				 .stop - 阻止事件冒泡
				 .prevent - 阻止默认行为
         .once - 程序运行期间, 只触发一次事件处理函数-->
    <button @click="btn2">.stop阻止事件冒泡</button>
    <a href="http://www.baidu.com" @click.prevent>.prevent阻止默认行为</a>
    <button @click.once.stop.prevent="btn3">once程序运行期间, 只触发一次事件处理函数</button>
  </div>
</template>

<script>
export default {
  methods: {
    fatherFn() {
      console.log(1);
    },
    btn2() {
      console.log(2);
    },
    btn3 () {
      console.log(3);
    },
    btn4() {
      console.log(4);
    }
  }
}
</script>