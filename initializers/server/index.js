const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');
const host = 'localhost';
const port = 3030;

const server = new webpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

server.listen(port, host, (err) => {
  if (err)
    console.log(err);

  console.log(`Server listening at ${host}:${port}`);
});
