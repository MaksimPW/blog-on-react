var path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));

global.__DEVELOPMENT__ = false;
global.__STAGING__ = false;
global.__PRODUCTION__ = false;
global.__TEST__ = true;

switch(process.env.NODE_ENV) {
  case 'staging':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__ = true;
    global.__PRODUCTION__ = false;
    global.__TEST__ = false;
    break;
  case 'production':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__ = false;
    global.__PRODUCTION__ = true;
    global.__TEST__ = false;
    break;
  case 'development':
    global.__DEVELOPMENT__ = true;
    global.__STAGING__ = false;
    global.__PRODUCTION__ = false;
    global.__TEST__ = false;
    break;
}

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-15');

enzyme.configure({ adapter: new Adapter() });
