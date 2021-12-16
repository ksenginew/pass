import css, { sass, scss } from "./index";

describe("sass", () => {
  test("default scss support", () => {
    expect(css`
      nav {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          display: inline-block;
        }

        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
        }
      }
    `).toMatchInlineSnapshot(`
      Object {
        "css": "nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav li {
        display: inline-block;
      }
      nav a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }",
        "loadedUrls": Array [],
      }
    `);
  });

  test("scss support", () => {
    let css = scss();
    expect(css`
      nav {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li {
          display: inline-block;
        }

        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
        }
      }
    `).toMatchInlineSnapshot(`
      Object {
        "css": "nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav li {
        display: inline-block;
      }
      nav a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }",
        "loadedUrls": Array [],
      }
    `);
  });

  test("sass support", () => {
    let css = sass();
    expect(css`
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none


`).toMatchInlineSnapshot(`
      Object {
        "css": "nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav li {
        display: inline-block;
      }
      nav a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }",
        "loadedUrls": Array [],
      }
    `);
  });
});
