module.exports = {
  entry: './app/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // config in .babelrc
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devServer: {
    contentBase: './public'
  }
};
