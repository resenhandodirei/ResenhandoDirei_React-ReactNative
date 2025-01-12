module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ['file-loader'],
      },
    ],
  }
}
  