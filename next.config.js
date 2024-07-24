const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@design-system-zeroz"] = path.resolve(
      __dirname,
      "dist/src/app/components",
    );

    return config;
  },
};
