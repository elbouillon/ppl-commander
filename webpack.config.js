var path = require('path');
var webpack = require('webpack');

var config = {
  entry: "./frontend/js/entry.js",
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" },
      { test: /\.s(a|c)ss$/, loaders: ["style", "css", "sass"] },
      { test: /\.css$/, loaders: ["style", "css"] },
      // { test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: 'url' }
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
    ]
  }
};

module.exports = config;
