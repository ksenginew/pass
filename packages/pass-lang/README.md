# pass-compile

## Usage

1. Write your CSS(eg:- `example.pass.ts`)
    ```js
    import { css } from 'pass-lang'
    export default css`
    nav {
      width: ${10 + 10}px; /* operators */
    }

    ul {
      font: 100% ${font_stack}; /* using variables */
    }

    li {
      ${theme()} /* using functions / mixins */
    }

    a {
      ${equal_heights}/* extending styles */
    }
    `
    ```
2. Convert it to css
    ```bash
    npx pass-compile example.pass.ts
    ```
    **Take a look at the newly created `example.pass.css` file.**

> Contact me via [discussions](https://github.com/ksenginew/pass-lang/discussions) for help.

