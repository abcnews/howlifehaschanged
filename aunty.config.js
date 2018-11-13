const path = require("path");

module.exports = {
  type: "react",
  babel: {
    plugins: ["@babel/plugin-proposal-class-properties"]
  },
  webpack: {
    performance: {
      hints: false
    }
    // output: {
    //   publicPath:
    //     "http://www.abc.net.au/res/sites/news-projects/howlifehaschanged/master/"
    // }
  },
  devServer: {
    publicPath: "/",
    contentBase: path.resolve(__dirname, "dist"),
    https: false
  }
};
