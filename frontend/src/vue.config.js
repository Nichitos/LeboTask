module.exports = {
  //...
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  chainWebpack: config => {
    config.resolve
        .symlinks(true)
    return config
  }
};