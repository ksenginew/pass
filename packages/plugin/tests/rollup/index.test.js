import { rollup } from "rollup";
import plugin from "../../src/index.js";

describe("rollup plugin", () => {
  test("should work", async () => {
    let bundle = await rollup({
      input: "packages/plugin/tests/rollup/main.js",
      plugins: [plugin.rollup({ emit: "bundle.css" })],
    });
    let { output } = await bundle.generate({ format: "es" });
    expect(
      output
        .map(
          (file) =>
            `${file.fileName}\n\n${
              file.type === "chunk" ? file.code : file.source
            }`,
        )
        .join("\n-------------------------------------------------\n"),
    ).toMatchSnapshot();
  });
});
