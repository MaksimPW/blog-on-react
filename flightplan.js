var plan = require('flightplan');
var tmpDir = 'blog-on-react-' + new Date().getTime();
var user = 'maksimpw-react';

plan.target('production', {
  host: '46.101.145.134',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
  
  local.log('Run Tests');
  local.exec('npm run test');
});

plan.remote(function(remote) {
  remote.exec('nvm use default');
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Build');
  remote.exec('(cd ~/' + tmpDir + '/semantic && gulp build)');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Finish');
});
