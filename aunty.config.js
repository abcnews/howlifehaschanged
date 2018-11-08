const path = require('path');

module.exports = {
  type: "react",
  babel: {
    plugins: ["@babel/plugin-proposal-class-properties"]
  },
  webpack: {
    performance: {
      hints: false
    },
    output: {
      publicPath:
        "/"
    }
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
  }
};
