'use strict';

let path = require('path');

module.exports = {
  devtool: "inline-source-map",
  //devtool: "cheap-eval-source-map",
  context: path.resolve(__dirname, "./src"), //__dirname + '/frontend',
  entry:   {
    async: './async',
    generator: './generator',
    'regenerator-runtime': 'regenerator-runtime/runtime' // модуль для работы генераторов и асинхронных функций
  },
  output:  {
    path:  path.resolve(__dirname, "./dist"), //    __dirname + '/public',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test:   /\.js$/,
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test:   /\.css$/,
      loader: "style!css"
    }]
  }
};
