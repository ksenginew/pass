import css, { sass, scss } from "./index.js";

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
      "nav ul {
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
      }"
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
      "nav ul {
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
      }"
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
      "nav ul {
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
      }"
    `);
  });
});
