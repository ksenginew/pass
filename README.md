# PASS
Next generation CSS preprocessor. It's programmatically awesome.

```js
import base from "base"; // imports

let font_stack: "Helvetica, sans-serif"; // variables

// mixins / functions
let theme = (theme = "DarkGray") => ({
  box_shadow: `0 0 1px rgba(${theme}, .25)`,
});

// style objects
let equal_heights = {
  display: "flex",
  flex_wrap: "wrap",
};

export default css`
  ${base} /* including imported CSS*/

nav {
    width: ${10 + 10}px; /* operators */

    ul {
      font: 100% ${font_stack}; /* using variables */
    }

    li {
      ${theme()}
    } /* using functions / mixins */

    a {
      ${equal_heights}/* extending styles */
    }
  }
`;

```