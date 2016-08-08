const path = require('path');
const webpack = require('webpack');
const build = path.join(__dirname, 'build');
const src = path.join(__dirname, 'src');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: build,
    filename: '[name].js'
  },
  plugins: [
    // remove duplicate modules to reduce bundle size
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        },
        include: src
      }
    ]
  }
};