import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { globSync } from "glob";
import path from "path";
import { fileURLToPath } from "url";
import postcss from "postcss";
import * as sass from "sass";
import fs from "fs";

const componentEntries = Object.fromEntries(
  globSync("src/components/*/index.ts", {
    ignore: [
      "**/*.stories.*",
      "**/stories/**",
      "**/*.test.*",
      "**/*.spec.*",
      "**/__tests__/**",
      "src/stories/**",
    ],
  }).map((file) => {
    const name = path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length),
    );
    return [name, fileURLToPath(new URL(file, import.meta.url))];
  }),
);

const entries = {
  index: fileURLToPath(new URL("src/index.ts", import.meta.url)),
  ...componentEntries,
};

const external = ["react", "react-dom", "recharts"];

const basePlugins = [
  peerDepsExternal(),
  nodeResolve({
    extensions: [".js", ".ts", ".tsx"],
  }),
  commonjs(),
];

function cssPlugin(shouldExtract = false) {
  const styles = new Map();

  return {
    name: "css-plugin",
    buildStart() {
      const mainScss = fileURLToPath(
        new URL("src/styles.scss", import.meta.url),
      );
      if (fs.existsSync(mainScss)) {
        try {
          const result = sass.compile(mainScss, { style: "compressed" });
          styles.set(mainScss, result.css);
        } catch (e) {
          this.warn(`Erro ao compilar styles.scss: ${e.message}`);
        }
      }
    },
    resolveId(id, importer) {
      if (!/\.(css|scss)$/.test(id)) return null;
      if (id.startsWith(".") && importer) {
        return path.resolve(path.dirname(importer), id);
      }
      return id;
    },
    load(id) {
      if (!/\.(css|scss)$/.test(id)) return null;
      return "export default ''";
    },
    transform(code, id) {
      if (!/\.(css|scss)$/.test(id)) return null;

      let css = "";
      try {
        if (id.endsWith(".scss")) {
          const result = sass.compile(id, { style: "compressed" });
          css = result.css;
        } else {
          css = code;
        }
      } catch (e) {
        this.warn(`Erro ao compilar ${id}: ${e.message}`);
      }

      styles.set(id, css);
      return { code: "export default ''", map: { mappings: "" } };
    },
    async generateBundle() {
      if (!shouldExtract) return;
      const allCss = [...styles.values()].join("\n");
      if (allCss.trim()) {
        const result = await postcss([]).process(allCss, { from: undefined });
        fs.mkdirSync("dist", { recursive: true });
        fs.writeFileSync("dist/styles.css", result.css);
      }
    },
  };
}

export default [
  {
    input: entries,
    external,
    treeshake: true,
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: false,
      entryFileNames: "[name].js",
      exports: "named",
    },
    plugins: [
      cssPlugin(true),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
        rootDir: "src",
      }),
      ...basePlugins,
    ],
  },

  {
    input: entries,
    external,
    treeshake: true,
    output: {
      dir: "dist",
      format: "cjs",
      preserveModules: false,
      entryFileNames: "[name].cjs",
      exports: "named",
    },
    plugins: [
      cssPlugin(false),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
      ...basePlugins,
    ],
  },
];
