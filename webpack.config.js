const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
            "style-loader", 
            "css-loader", 
            "sass-loader" 
        ]
    }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      // filename: "./index.html"
    })
  ]
};