---
sidebar_position: 3
---
#  Strings

Strings are for storing and manipulating text.

A  string is zero or more characters written inside backticks.

### Example
```js
let  text =  `John Doe`
```

## String Length

To find the length of a string, use the built-in  `length`  property:

### Example
```js
let  text =  `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;  
let  length = text.length;
```
## Escape Backtick

The backslash (`\`) escape character turns special characters into string characters:


### Example
```js
let  text =  `\`code\``; // equals to (`code`)
```

The sequence  `\\` inserts a backslash in a string:

### Example
```js
let  text =  `\\test`; // equals to (\test)
```
