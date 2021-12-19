import { css } from "./css";

describe("css", () => {
  test("empty string", () => {
    expect(css``).toMatchInlineSnapshot(`""`);
  });

  test("normal string", () => {
    expect(
      css`
        color: red;
      `
    ).toMatchInlineSnapshot(`"color: red;"`);
  });

  test("with string as argument", () => {
    expect(
      css`
        color: ${"red"};
      `
    ).toMatchInlineSnapshot(`"color: red;"`);
  });

  test("with number", () => {
    expect(
      css`
        order: ${1};
      `
    ).toMatchInlineSnapshot(`"order: 1;"`);
  });

  test("with bigint", () => {
    expect(
      css`
        order: ${1n};
      `
    ).toMatchInlineSnapshot(`"order: 1;"`);
  });

  test("with boolean", () => {
    expect(
      css`
        order: ${true};
      `
    ).toMatchInlineSnapshot(`"order: true;"`);
    expect(
      css`
        order: ${false};
      `
    ).toMatchInlineSnapshot(`"order: false;"`);
  });

  test("with undefined", () => {
    expect(
      css`
        order: ${undefined};
      `
    ).toMatchInlineSnapshot(`"order: ;"`);
  });

  test("with null", () => {
    expect(
      css`
        order: ${null};
      `
    ).toMatchInlineSnapshot(`"order: ;"`);
  });
});
