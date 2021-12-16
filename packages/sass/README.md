# @pass-lang/sass
Sass support for next generation CSS preprocessor.",

<table>
<thead>
<tr>
<th>
SCSS
</th>
<th>
SASS
</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
scss().css`
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
`
```
</td>
<td>

```js
sass().css`
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
`
```

</td>
</tr>
</tbody>
</table>

## API
This is a wrapper around Sass JS api.
### css(default)

```js
(strings: TemplateStringsArray, ...args: any[]) => string;
```

**Example**

```js
import css from '@pass/sass';

css`
Your SCSS here...
`
```

### scss

```js
(options?: StringOptions<"sync"> | undefined) => (strings: TemplateStringsArray, ...args: any[]) => string;
```

**Example**

```js
import { scss } from '@pass/sass';

scss().css`
Your SCSS here...
`
```

### sass

```js
(options?: StringOptions<"sync">) => (strings: TemplateStringsArray, ...args: any[]) => string;
```

**Example**

```js
import { sass } from '@pass/sass';

sass().css`
Your SASS here...
`
```

You can pass options to `sass` and `scss` functions.

```js
options = { style: "compressed" } // options
sass(options).css`
Your SASS here...
`
```

Read [Here](https://sass-lang.com/documentation/js-api/interfaces/StringOptionsWithoutImporter) for more information about options.

**Read [Sass docs](https://sass-lang.com/documentation/js-api) for complete documentation.**



