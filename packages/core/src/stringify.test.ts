import { stringify } from "./stringify";

describe("stringify", () => {
  test("empty object", () => {
    expect(stringify({})).toMatchInlineSnapshot(`""`);
  });

  test("simple object", () => {
    expect(stringify({ color: "red" })).toMatchInlineSnapshot(`"color:red;"`);
  });

  test("nested object", () => {
    expect(
      stringify({
        color: "red",
        ":hover": {
          color: "blue",
        },
      })
    ).toMatchInlineSnapshot(`"color:red;:hover{color:blue;}"`);
  });

  test("undefined value", () => {
    expect(stringify({ color: undefined })).toMatchInlineSnapshot(`""`);
  });

  test("null value", () => {
    expect(stringify({ color: null })).toMatchInlineSnapshot(`"color{}"`);
  });

  test("array value", () => {
    expect(stringify({ color: ["red", "blue"] })).toMatchInlineSnapshot(
      `"color{0:red;1:blue;}"`
    );
  });
});
