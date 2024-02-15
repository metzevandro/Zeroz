const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@zeroz'] = path.join(__dirname, 'src/components');
    return config;
  },
};
