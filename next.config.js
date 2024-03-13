const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@design-system-zeroz': path.resolve(__dirname, 'src/app/components')
    }
  }
};