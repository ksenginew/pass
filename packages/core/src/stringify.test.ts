import { stringify } from "./stringify";

describe("stringify", () => {
  test("empty object", () => {
    expect(stringify({})).toMatchInlineSnapshot(`""`);
  });

  test("simple object", () => {
    expect(stringify({ color: 'red' })).toMatchInlineSnapshot(`""`);
  });

  test("nested object", () => {
    expect(stringify({
      color: 'red',
      ':hover': {
        color: 'blue'
      }
    })).toMatchInlineSnapshot(`""`);
  });

  test("undefined value", () => {
    expect(stringify({ color: undefined })).toMatchInlineSnapshot(`""`);
  });

  test("null value", () => {
    expect(stringify({ color: null })).toMatchInlineSnapshot(`""`);
  });

  test("array value", () => {
    expect(stringify({ color: ['red', 'blue'] })).toMatchInlineSnapshot(`""`);
  });
});
