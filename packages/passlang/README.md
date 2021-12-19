# passlang

## Usage

1. Write your CSS(eg:- `example.pass.ts`)
    ```ts
    import { css } from '@passlang/core'
    
    let font_stack: string = 'monospace'

    export default css`
    nav {
      width: ${10 + 10}px; /* operators */
    }

    ul {
      font: 100% ${font_stack}; /* using variables */
    }
    `
    ```
2. Convert it to css
    ```sh
    npm install passlang
    npx passlang example.pass.ts
    ```
    **Take a look at the newly created `example.pass.css` file.**

> Contact me via [discussions](https://github.com/ksenginew/pass/discussions) for help.

