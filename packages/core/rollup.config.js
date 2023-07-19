import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const banner = `/*!
 * ${pkg.name}
 * ${pkg.description}
 *
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository?.url}
 * @license ${pkg.license}
 */`;

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

export default {
  external: external,
  input: pkg.source,
  output: [
    { banner, file: pkg.main, format: "cjs", exports: "auto" },
    { banner, file: pkg.module, format: "es", exports: "auto" },
    {
      banner,
      file: pkg["umd:main"],
      format: "umd",
      name: pkg.name.replace(/-./g, (match) => match[1].toUpperCase()),
      exports: "auto",
      globals: Object.fromEntries(
        external.map((dep) => [
          dep,
          dep.slice(1).replace(/-./g, (m) => m[1].toUpperCase()),
        ])
      ),
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
};
