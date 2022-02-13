---
sidebar_position: 6
---
# Functions

Functions allow you to define complex operations\that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

## Functions syntax

Functions are defined using the  `function`  keyword. 

```js
function pow(base, exponent) {
  return base ** exponent
}

export default css`
.sidebar {
  float: left;
  margin-left: ${pow(4, 3) * 1 + 'px'};
}
`
```

:::warning
While it’s technically possible for functions to have side-effects like setting  global variables, this is strongly discouraged. Use  mixins  for side-effects, and use functions just to compute values.
:::

## Arguments

Arguments allow functions’ behavior to be customized each time they’re called. The arguments are specified in the  `function`  rule after the function’s name, as a list of variable names surrounded by parentheses. The values of these expression are available within the function’s body as the corresponding variables.

### Optional Arguments

Normally, every argument a function declares must be passed when that function is included. However, you can make an argument optional by defining a  _default value_  which will be used if that arguments isn’t passed. Default values use the same syntax as  variable declarations. This makes it easy to define flexible function APIs that can be used in simple or complex ways.

```js
function invert(color, amount = 100) {
  const inverse = change_color(color, hue(color) + 180);
  return mix(inverse, color, amount);
}

export default css`
.header {
  background-color: ${invert('#036', 80)};
}
`
```
### Taking Arbitrary Arguments

Sometimes it’s useful for a function to be able to take any number of arguments. If the last argument in a  `function`  declaration starts in  `...`, then all extra arguments to that function are passed to that argument as a  array.

```js
function sum(...values) {
  let sum: 0;
  for (let value of values) {
    sum = sum + value;
  }
  return sum;
}

export default css`
.micro {
  width: ${sum(50, 30, 100)}px;
}
`
```

## return

The  `return`  statement indicates the value to use as the result of calling a function. It’s only allowed within a  `function`  body, and each  `function` can omit using `return`.

When a  `return`  is encountered, it immediately ends the function and returns its result. Returning early can be useful for handling edge-cases or cases where a more efficient algorithm is available without wrapping the entire function in an  `else`  block

```js
function str_insert(string, insert, index) {
  // Avoid making new strings if we don't need to.
  if (string.length == 0) {
    return insert;
  }

  const before = string.slice(0, index);
  const after = string.slice(index);
  return before + insert + after;
}
```
