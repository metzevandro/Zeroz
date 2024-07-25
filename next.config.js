const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@design-system-zeroz"] = path.resolve(
      __dirname,
      "dist/src/app/components",
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
