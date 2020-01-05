module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
//   ,
//   proxyTable: {
//     '/api': { // 使用"/api"来代替"http://localhost:3000"
//       target: 'http://localhost:3000', // 源地址
//       // changeOrigin: true, // 改变源
//       pathRewrite: {
//         '^/api': 'http://localhost:3000' // 路径重写
//       }
//     }
//   }
}
