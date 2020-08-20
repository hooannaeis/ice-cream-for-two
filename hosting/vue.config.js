module.exports = {
  devServer: {
    port: 8080
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
};
