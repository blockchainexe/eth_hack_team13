const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill', 
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.js', '.vue', '.sass', '.scss', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader'
        ]
      },
      {
        test: /\.sass/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              'postcss-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              'postcss-loader'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html', hash: true }),
  ]
}
