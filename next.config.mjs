import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const isPagesBuild = process.env.GITHUB_PAGES === "true";

export default {
  output: isPagesBuild ? "export" : undefined,
  basePath: isPagesBuild ? (process.env.PAGES_BASE_PATH || "") : "",
  trailingSlash: isPagesBuild,
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,
};
