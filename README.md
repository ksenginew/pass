# PASS
Next generation CSS preprocessor. It's programmatically awesome.
> ```diff
> - currently in development
> ```

```js
css`
${base} /* including imported CSS*/

nav {
  width: ${10 + 10}px; /* operators */

  ul {
    font: 100% ${font_stack}; /* using variables */
  }

  li {
    ${theme()} /* using functions / mixins */
  }

  a {
    ${equal_heights}/* extending styles */
  }
}
`
```
