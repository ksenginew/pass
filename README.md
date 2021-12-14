# PASS
Next generation CSS preprocessor. It's programmatically awesome.

```js
var font_stack: 'Helvetica, sans-serif'

css`
nav {
  ul {
    font: 100% ${font_stack};
  }

  li { display: inline-block; }

  a {
    display: block;
  }
}
`
```