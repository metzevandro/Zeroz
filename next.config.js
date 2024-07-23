const path = require("path");

const nextConfig = {
  webpack: (config) => {

    // Add TypeScript loader for files in 'design-system-zeroz' package
    config.module.rules.push({
      test: /\.tsx?$/,
      include: /design-system-zeroz/,
      use: [
        {
          loader: "ts-loader",
          options: {
            allowTsInNodeModules: true,
            transpileOnly: true, // Apenas transpila, não verifica tipos
            compilerOptions: {
              target: "es5",
              lib: ["dom", "dom.iterable", "esnext"],
              allowJs: true,
              skipLibCheck: true,
              strict: true,
              esModuleInterop: true,
              module: "esnext",
              moduleResolution: "node",
              resolveJsonModule: true,
              jsx: "react",
            },
          },
        },
      ],
    });

    // Add alias for @design-system-zeroz
    config.resolve.alias["@design-system-zeroz"] = path.resolve(
      __dirname,
      "src/app/components"
    );

    return config;
  },
};

module.exports = nextConfig;
