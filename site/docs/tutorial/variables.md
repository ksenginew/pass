---
sidebar_position: 2
---
#  Variables

## Pass Variables

Variables are a way to store information that you can re-use later.

With Pass, you can store information in variables, like:

-   strings
-   numbers
-   colors
-   booleans
-   lists
-   nulls

With JavaScript or Typescript Pass uses the `let` and `const` keywords, followed by a name, to declare variables:
Pass Variable Syntax:

let _variablename_:  _value_;

The following example declares 4 variables named my_font, my_color, my_font_size, and my_width. After the variables are declared, you can use the variables wherever you want:

Pass Syntax:
```js
let my_font: 'Helvetica, sans-serif'  
const my_color: 'red'
let my_font_size: '18px'
const my_width: '680px'

export default css`
body  {  
  font-family:  ${my_font};  
  font-size:  ${my_font_size};  
  color:  ${my_color};  
}  
  
#container  {  
width:  ${my_width};  
}
`
```

So, when the Pass takes the variables (my_font, my_color, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:

CSS Output:
```css
body  {  
  font-family:  Helvetica, sans-serif;  
  font-size:  18px;  
  color:  red;  
}  
  
#container  {  
  width:  680px;  
}
```

## Pass Variable Scope

Pass variables are only available at the level of nesting where they are defined.

Look at the following example:

Pass Syntax:
```js
let my_color = 'red';  

const my_green = () => {
  let my_color = 'green'
  return css`color:  ${my_color};`
}

export default css` 
h1  {  
  ${my_green()}
}  
  
p  {  
  color:  ${my_color};  
}
`
```

Will the color of the text inside a  `<p>`  tag be red or green? It will be red!

The other definition, `let my_color = 'green'` is inside the block of code, and will only be available there!

So, the CSS output will be:

CSS Output:
```css
h1  {  
  color:  green;  
}  
  
p  {  
  color:  red;  
}
```

Ok, that is the default behavior for variable scope.
