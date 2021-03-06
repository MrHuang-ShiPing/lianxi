module.exports = {
    //lintOnSave:false 关闭ESLint的检查规则
    lintOnSave:'warning',//输出错误继续运行项目
    devServer: { // 只用于开发环境
        proxy: {
          '/api':    { // 只对请求路由以/api开头的请求进行代理转发
            target: 'http://39.98.123.211', // 转发的目标url
            changeOrigin: true, // 支持跨域
            // pathRewrite: {'^/api': ''}  // 后台接口都有/api
          },
        }
      },
        }
   