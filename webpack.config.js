const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    app: './src/scripts/main.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devServer: {
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
  }
  if (argv.mode === 'production') {
  }

  return config;
};
