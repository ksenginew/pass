# pass lang
Next generation CSS preprocessor. It's programmatically awesome.
> ```diff
> - currently in development
> ```

```js
import base from './css' // import modules

css`
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

### Extensions
- [Sass and SCSS support](https://github.com/ksenginew/pass-lang/tree/main/packages/sass)
