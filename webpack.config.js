import { resolve } from "path";
// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebpackPlugin from "html-webpack-plugin";

export const devtool = "inline-source-map";
export const mode = "development";
export const entry = "./src/index.js";
export const output = {
  path: resolve(__dirname, "./dist"),
  filename: "index_bundle.js",
};
export const plugins = [new HtmlWebpackPlugin()];
