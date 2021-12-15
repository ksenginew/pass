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
### Sass support
```js
import { css as pass } from 'pass-lang'
import * as sass from 'sass'

// for scss
let css = (...args) => sass.compileString(pass(...args))
// or for sass
// let css = (...args) => sass.compileString(pass(...args), { style: 'indented' })

// You can choose sass or scss
export default css`
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
`
```


