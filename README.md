# PASS
Next generation CSS preprocessor. It's programmatically awesome.

```js
import base from 'base';

var font_stack: 'Helvetica, sans-serif'

var theme = (theme ='DarkGray')  => ({
  box-shadow: `0 0 1px rgba(${theme}, .25)`;
})

css`
${base}
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