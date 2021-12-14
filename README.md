# PASS
Next generation CSS preprocessor. It's programmatically awesome.

```js
import base from 'base';

let font_stack: 'Helvetica, sans-serif'

let theme = (theme ='DarkGray')  => ({
  box_shadow: `0 0 1px rgba(${theme}, .25)`
})

let equal_heights = {
  display: 'flex',
  flex_wrap: 'wrap',
};

css`
${base}
nav {
  ul {
    font: 100% ${font_stack};
  }

  li { ${theme()} }

  a {
    ${equal_heights}
  }
}
`
```