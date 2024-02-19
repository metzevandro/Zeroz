const path = require('path');
const withTM = require('next-transpile-modules')(['@design-system-zeroz']);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    // Adicionar alias para o seu pacote de design system
    config.resolve.alias['@design-system-zeroz'] = path.resolve(__dirname, 'src/app/components');

    return config;
  },
});
