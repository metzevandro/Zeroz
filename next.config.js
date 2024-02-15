const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@scss'] = path.join(__dirname, 'src/app/scss'); // Adicionando o alias para a pasta scss
    return config;
  },
};
