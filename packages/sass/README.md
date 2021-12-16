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
css`
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
let css = sass()

css`
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
