var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules'),
      resolve('semantic')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        exclude: [resolve('src/assets')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /.svg$/,
        loader: 'url-loader',
        query: {
          mimetype: 'image/svg+xml',
          name: './src/assets/semantic/dist/themes/default/assets/fonts/icons.svg'
        }
      },
      {
        test: /.woff$/,
        loader: 'url-loader',
        query: {
          mimetype: 'application/font-woff',
          name: './src/assets/semantic/dist/themes/default/assets/fonts/icons.woff'
        }
      },
      {
        test: /.woff2$/,
        loader: 'url-loader',
        query: {
          mimetype: 'application/font-woff2',
          name: './src/assets/semantic/dist/themes/default/assets/fonts/icons.woff2'
        }
      },
      {
        test: /.[ot]tf$/,
        loader: 'url-loader',
        query: {
          mimetype: 'application/octet-stream',
          name: './src/assets/semantic/dist/themes/default/assets/fonts/icons.ttf'
        }
      },
      {
        test: /.eot$/,
        loader: 'url-loader',
        query: {
          mimetype: 'application/vnd.ms-fontobject',
          name: './src/assets/semantic/dist/themes/default/assets/fonts/icons.eot'
        }
      }
    ]
  },
}
