/* globals __DEVELOPMENT__ */

const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');

require('babel-core/register');
require.extensions['.css'] = () => {
  return;
}

const host = 'localhost';
const port = 3030;

const express = require('express');

const app = express();

app.use(express.static(path.join(process.cwd(), 'src', 'client', 'public')));

app.set('views', __dirname);
app.set('view engine', 'ejs');

if (__DEVELOPMENT__) {
  const webpack = require('webpack');
  const config = require('../webpack/development.js').default;
  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');
  const compiler = webpack(config);

  app.use(
    webpackDev(
      compiler,
      {
        hot: true,
        publicPath: config.output.publicPath,
        stats: { colors: true }
      }
    )
  );

  app.use(webpackHot(compiler));
}

app.get('*', require('./render').default);

app.listen(port, function() {
  console.log(`Server listening at ${host}:${port} as ${process.env.NODE_ENV}`);
})
