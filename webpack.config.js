var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "app_client/dev");
var OUTPUT = path.resolve(__dirname, "public/js");
 
var config = {
  entry: DEV + "/app.jsx",
  output: {
    path: OUTPUT,
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  }
};
 
module.exports = config;