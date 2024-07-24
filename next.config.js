const path = require("path");
const withTM = require('next-transpile-modules')(['design-system-zeroz']); 

const nextConfig = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: [
        path.resolve(__dirname, "node_modules/design-system-zeroz"),
        path.resolve(__dirname, "src"),
      ],
      use: [
        {
          loader: "ts-loader",
          options: {
            allowTsInNodeModules: true,
            transpileOnly: true, 
          },
        },
      ],
      exclude: /node_modules\/(?!design-system-zeroz)/,
    });

    config.resolve.alias["@design-system-zeroz"] = path.resolve(
      __dirname,
      "node_modules/design-system-zeroz/src/app/components"
    );

    return config;
  },
});

module.exports = nextConfig;
