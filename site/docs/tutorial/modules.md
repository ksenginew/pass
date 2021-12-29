---
sidebar_position: 4
---
# Modules

Pass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files.

You can create small files with CSS snippets to include in other source files. Examples of such files can be: reset file, variables, colors, fonts, font-sizes, etc.

## Pass Importing Files

Just like CSS, Pass also supports the  `@import`  directive.

The CSS  `@import`  directive has a major drawback due to performance issues; it creates an extra HTTP request each time you call it. 

So, the Pass introduced  `import`  syntax. It includes the file in the CSS; so no extra HTTP call is required at runtime!

Pass Import Syntax:
```js
import  any_name from 'file_path'
```
**Tip:**  You do not need to specify a file extension, Pass automatically assumes that you mean a .js or .ts file. 

You can import as many files as you need in the main file:

```js
import variables from "./variables";  
import colors from "./colors";  
import reset from "./reset";  
```
  
Let's look at an example: Let's assume we have a reset file called "reset.js", that looks like this:

Pass Syntax (reset.js):
```js
import { css } from '@passlang/core'

export default css`
html,  
body,  
ul,  
ol  {  
  margin:  0;  
  padding:  0;  
}
`
```
  
and now we want to import the "reset.js" file into another file called "standard.js".

Here is how we do it

Pass Syntax (standard.js):
```
import { css } from '@passlang/core'
import reset from "./reset"

export default css`
${reset /* include CSS */}  
body  {  
  font-family:  Helvetica, sans-serif;  
  font-size:  18px;  
  color:  red;  
}
`
```

So, when the "standard.css" file is imported, the CSS will look like this:

CSS output:
```css
html, body, ul, ol  {  
  margin:  0;  
  padding:  0;  
}  
  
body  {  
  font-family:  Helvetica, sans-serif;  
  font-size:  18px;  
  color:  red;  
}
```

## Pass import data

You can export and import any data between modules.


"colors.js":
```js
export let my_pink = '#EE82EE'  
export let my_blue = '#4169E1'  
export let my_green = '#8FBC8F'
```

```js
import { my_blue, my_pink } from "./colors"; 

export default css`  
body  {  
  font-family:  Helvetica, sans-serif;  
  font-size:  18px;  
  color:  ${my_blue};  
}
`
```
