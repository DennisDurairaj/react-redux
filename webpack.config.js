const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  inject: "body",
  template: "./app/index.html"
})

module.exports = {
  entry: './app/index.js',
  output : {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  module : {
    rules : [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "stage-0"]
        }
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ]
  },
  devtool: "source-map",
  context: __dirname,
  plugins: [ HtmlWebpackPluginConfig ]
}
