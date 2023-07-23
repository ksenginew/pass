import { css } from "./css";

describe("css", () => {
  test("empty string", () => {
    expect(css``).toMatchInlineSnapshot(`
      {
        "children": [],
        "loc": null,
        "type": "Value",
      }
    `);
  });

  test("normal string", () => {
    expect(css`
      color: red;
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "color",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "name": "red",
                  "type": "Identifier",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });

  test("with string as argument", () => {
    expect(css`
      color: ${"red"};
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "color",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "name": "red",
                  "type": "Identifier",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });

  test("with number", () => {
    expect(css`
      order: ${1};
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "order",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "type": "Number",
                  "value": "1",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });

  test("with bigint", () => {
    expect(css`
      order: ${1n};
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "order",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "type": "Number",
                  "value": "1",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });

  test("with boolean", () => {
    expect(css`
      order: ${true};
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "order",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "name": "true",
                  "type": "Identifier",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
    expect(css`
      order: ${false};
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "order",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "name": "false",
                  "type": "Identifier",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });

  test("with undefined", () => {
    expect(css`
      order: ${undefined};
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "order",
            "type": "Declaration",
            "value": {
              "children": [],
              "loc": null,
              "type": "Value",
            },
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });

  test("with null", () => {
    expect(css`
      order: ${null};
    `).toMatchInlineSnapshot(`
      "
            order: ;
          "
    `);
  });
  test("complex", () => {
    expect(css`
      color: red;
      @hihi (min-width: 100%){}
    `).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "important": false,
            "loc": null,
            "property": "color",
            "type": "Declaration",
            "value": {
              "children": [
                {
                  "loc": null,
                  "name": "red",
                  "type": "Identifier",
                },
              ],
              "loc": null,
              "type": "Value",
            },
          },
          {
            "block": {
              "children": [],
              "loc": null,
              "type": "Block",
            },
            "loc": null,
            "name": "hihi",
            "prelude": {
              "loc": null,
              "type": "Raw",
              "value": "(min-width: 100%)",
            },
            "type": "Atrule",
          },
        ],
        "loc": null,
        "type": "DeclarationList",
      }
    `);
  });
});
