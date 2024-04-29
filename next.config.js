const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@design-system-zeroz'] = path.resolve(
      __dirname,
      'src/app/components'
    );

    return config;
  },
};
