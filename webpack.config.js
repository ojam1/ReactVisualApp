const path = require('path');

module.exports = env => {
  return {
    mode: env,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
    devtool: env === 'production' ? 'source-map' : 'inline-source-map'
  };
};
