const path = require('path');
const appRoot = require('app-root-path');

module.exports = {
  src: path.resolve(appRoot.path, 'src'), 
  public: path.resolve(appRoot.path, 'public'),
  build: path.resolve(appRoot.path, 'public/js')
}
