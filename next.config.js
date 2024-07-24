const path = require("path");
const withTM = require('next-transpile-modules')(['design-system-zeroz']); // Adicione o nome do seu pacote aqui

const nextConfig = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: /design-system-zeroz/,
      use: [
        {
          loader: "ts-loader",
          options: {
            allowTsInNodeModules: true,
            transpileOnly: true, 
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

    config.resolve.alias["@design-system-zeroz"] = path.resolve(
      __dirname,
      "node_modules/design-system-zeroz/src/app/components"
    );

    return config;
  },
});

module.exports = nextConfig;
