const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // devServer: {   //服务器设置
  //   open: true,
  //   host:"localhost",
  // },
  lintOnSave: false, //关闭代码检查工具 eslint
})
