module.exports = {
  devServer: {
    proxy: {
      "/graphql": {
        target: "http://18.218.15.90:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
