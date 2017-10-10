/* eslint-disable */

module.exports = {
  apps: [
    {
      name: 'blog-on-react',
      script: 'initializers/server/index.js',
      env: {
        'NODE_ENV': 'development'
      },
      env_production: {
        'NODE_ENV': 'production'
      }
    }
  ]
};
