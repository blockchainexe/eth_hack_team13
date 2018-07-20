const path = require('path');
const rootDir = path.resolve(__dirname, 'src');
const modulesDir = path.resolve(__dirname, 'node_modules');
module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {
      root: rootDir,
      path: [rootDir, modulesDir]
    },
    'autoprefixer': true
  }
};
