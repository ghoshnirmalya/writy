import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    typescript(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      extract: false,
    }),
  ],
};
