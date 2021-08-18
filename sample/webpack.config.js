const path = require('path');

module.exports = {
  mode : 'development',
  entry : {
    main : './src/app.js'
  },
  output: {
    path : path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
          // path.resolve('./my-webpack-loader.js')
        ]
      },
      {
        test: /\.(jpeg|png|gif|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist',
          name: '[name]/[ext]?[hash]',
          limit: 20000,
        }
      }
    ]  
  }
}