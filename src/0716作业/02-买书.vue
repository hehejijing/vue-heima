<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul v-for="(item, index) in arr" :key="index">
      <li>
        {{ item.name }}
        <button @click="add(index)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tbody v-for="(item, index) in arr1" :key="index">
        <tr>
          <th>{{ index + 1 }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th>{{ item.count + 1 }}</th>
          <th>{{ (item.count + 1) * item.price }}</th>
        </tr>
      </tbody>
    </table>
    <p>总价格为:{{ allPrice }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
      arr1: [],
      allPrice: 0,
    }
  },
  methods: {
    add (index) {
       this.allPrice = 0
      this.arr1.indexOf(this.arr[index]) == -1
        ? this.arr1.push(this.arr[index])
        : this.arr1[this.arr1.indexOf(this.arr[index])]["count"]++
        this.arr1.forEach((item) => {
         this.allPrice += (item.count+1) * item.price
      })
    },
  },
}
</script>
