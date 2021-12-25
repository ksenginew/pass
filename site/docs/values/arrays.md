---
sidebar_position: 3
---

#  Arrays

An array is a special variable, which can hold more than one value:
```js
const  colors = [`red`,  `green`,  `blue`];
```

## Why Using an Array?

If you have a list of items (a list of color names, for example), storing the colors in single variables could look like this:
```js
let  color1 =  `red`;  
let  color2 =  `green`;  
let  color3 =  `blue`;
```
However, what if you want to loop through the colors and find a specific one? And what if you had not 3 colors, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

## Creating an Array

Using an array literal is the easiest way to create a JavaScript Array.

Syntax:
```js
const  array_name  = [item1,  item2, ...];  
```
It is a common practice to declare arrays with the  `const`  keyword. It meanst that the array is a constant.

### Example
```js
const  colors = [`red`,  `green`,  `blue`];
```

Spaces and line breaks are not important. A declaration can span multiple lines:

### Example
```js
const  colors = [
  `red`,
  `green`,
  `blue`
];
```

You can also create an array, and then provide the elements:

### Example
```js
const  colors = []
colors[0] = `red`
colors[1] = `green`
colors[2] = `blue`
```

## Accessing Array Elements

You access an array element by referring to the  **index number**:l

```js
let color = colors[0];
```

**Note:**  Array indexes start with 0.

[0] is the first element. [1] is the second element.

## Changing an Array Element

This statement changes the value of the first element in  `cars`:
```js
colors[0] =  `yellow`
```

## Accessing the First Array Element

### Example
```js
const  fruits = [`Banana`,  `Orange`,  `Apple`,  `Mango`];  
let  fruit = fruits[0];
```

## Accessing the Last Array Element

### Example
```js
const  fruits = [`Banana`,  `Orange`,  `Apple`,  `Mango`];  
let  fruit = fruits[fruits.length  -  1];
```

## Looping Array Elements

One way to loop through an array, is using a  `for`  loop:

### Example
```js
const  fruits = [`Banana`,  `Orange`,  `Apple`,  `Mango`];  
let string = ``;  

for (let fruit of fruits) {
  string += fruit // or do something
}
```

## Adding Array Elements

The easiest way to add a new element to an array is using the  `push()`  method:

### Example
```js
const  fruits = [`Banana`,  `Orange`,  `Apple`,  `Mango`];  
fruits.push(`Lemon`); // Adds a new element (Lemon) to fruits
```

## How to Recognize an Array

A common question is: How do I know if a variable is an array?

### Solution

```js
Array.isArray(fruits);
```

