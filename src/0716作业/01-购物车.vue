<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="(item, index) in goodList" :key="index">
          <th><input type="checkbox" v-model="item.checked"/> <span></span></th>
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th>
            <button @click="subtract(index)">-</button> {{ item.num }}
            <button @click="add(index)">+</button>
          </th>
          <th>{{ item.price * item.num }}</th>
          <th><button @click="goodList.splice(index, 1)">删除</button></th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    }
  },
  computed: {
    isAll: {
      set (val) {
        this.goodList.forEach((item) => {
          item.checked = val
        })
      },
      get () {
        return this.goodList.every((item) => item.checked == true)
      },
    },
  },
  methods: {
    add (val) {
      this.goodList[val].num += 1
    },
    subtract (val) {
      if (this.goodList[val].num == 1) {
        return this.goodList.splice(val, 1)
      }
      this.goodList[val].num -= 1
    },
  },
}
</script>

<style></style>
