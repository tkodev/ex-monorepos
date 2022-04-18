const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {getIfUtils, removeEmpty} = require('webpack-config-utils');


// -- Configuration Setting -- //
const title = 'react boilerplate';
const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = '9090';
const absPathToSrc = pathResolve(__dirname, 'src');
const absPathToDist = pathResolve(__dirname, 'dist');
const absPathToFont = pathResolve(__dirname, 'src/common/fonts');


const webpackConfig_fn = (env = {}) => {
  const _mode = env.mode || 'production';
  const {ifProduction} = getIfUtils(_mode);

  const devServer = ifProduction( {}, {
    devServer: {
      host: webpackDevServer_host,
      port: webpackDevServer_port,
      historyApiFallback: true,
      stats: 'minimal'
    }
  });

  const configOut = {
    ...devServer,
    mode: _mode,
    devtool: 'source-map',
    context: absPathToSrc,
    entry: {
      main: [

        './main.js'
      ]
    },
    output: ifProduction(
      {
        filename: '[name]-[chunkhash].js',
        path: absPathToDist
      },
      {
        publicPath: '/'
      }
    ),
    resolve: {
      modules: [ absPathToSrc, 'node_modules']
    },
    module: {
      rules: removeEmpty([
        {
          test: /\.js/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,
          loader: 'file-loader?name=./imgs/[name].[hash].[ext]',
          exclude: absPathToFont
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        ifProduction(
          {
            test: /\.(css|less)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            exclude: [/node_modules/, /\.module\.(css|less)$/]
          },
          {
            test: /\.(css|less)$/,
            loader: 'style-loader!css-loader!less-loader',
            exclude: [/node_modules/, /\.module\.(css|less)$/]
          }
        ),
        ifProduction(
          {
            test: /\.module\.(css|less)$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader?modules=true&localsConvention=camelCase',
              'less-loader'
            ],
            exclude: /node_modules/
          },
          {
            test: /\.module\.(css|less)$/,
            loader: 'style-loader!css-loader?modules=true&localsConvention=camelCase!less-loader',
            exclude: /node_modules/
          }
        )
      ])
    },
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: 'index.html',
        title: title,
        favicon: './common/images/favicon.ico'
      }),
      ifProduction(
        new MiniCssExtractPlugin({
          filename: "[name]-[chunkhash].css",
        })
      )
    ])
  };

  return configOut;
};

module.exports = webpackConfig_fn;
