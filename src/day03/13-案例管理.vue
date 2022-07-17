<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time | formatTime }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td class="red"></td>
            <td></td>
            <td><a href="#" @click="list.splice(index, 1)">删除</a></td>
          </tr>
          <!-- 求和 -->
          <tr style="background-color: #eee" v-if="list.length != 0">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allprice }}</td>
            <td colspan="2">平均价: {{ avgPrice }}</td>
          </tr>
        </tbody>
        
        <tfoot v-show="list.length == 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
           
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="add">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment"
// 铺设页面 1. 表格样式正确展示 2.数据渲染到页面
// 1. 下载bootstrap, main.js引入bootstrap.css
//    yarn add bootstrap
// 2. 把list数组 - 铺设表格
// 3. 修改价格颜色 大于100 颜色为红
export default {
  name: "VueDemo",
  data () {
    return {
      list: JSON.parse(localStorage.getItem("PList")) || [],
      name: "",
      price: 0,
    }
  },
  methods: {
    add () {
      if (this.name.length == 0 || this.price == 0) {
        this.name = ""
        this.price = 0
        alert("请输入内容")
        return
      }
      this.list.push({
        name: this.name,
        price: this.price,
        time: new Date(),
        id: this.list[this.list.length - 1]
          ? this.list[this.list.length - 1].id + 1
          : 100,
      })
      this.name = ""
      this.price = 0
    },
  },
  filters: {
    formatTime: (val) => {
      return moment(val).format("YYYY-MM-DD")
    },
  },
  computed: {
    allprice () {
      return this.list.reduce((sum, obj) => (sum += obj.price), 0)
    },
    avgPrice () {
      return (this.allprice / this.list.length).toFixed(2) //toFixed(2)保留两位小数
    },
  },
  watch: {
    list: {
      handler () {
        localStorage.setItem("PList", JSON.stringify(this.list))
      },
      deep: true,
    },
  },
}
</script>

<style>
.red {
  color: red;
}
</style>
