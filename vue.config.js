module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Vue";
        return args;
      })
  },
  
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Learning/'
    : '/'
}
