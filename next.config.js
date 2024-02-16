const path = require('path');

module.exports = {
  // Outras configurações...
  resolve: {
    alias: {
      '@design-system-zeroz': path.resolve(__dirname, 'src/app/components')
    }
  }
};