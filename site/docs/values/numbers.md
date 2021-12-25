---
sidebar_position: 2
---
#  Numbers

Numbers can be written with or without decimals.

### Example
```js
let  x =  3.14; // A number with decimals  
let  y =  3; // A number without decimals
```

Extra large or extra small numbers can be written with scientific (exponent) notation:

### Example
```js
let  x =  123e5; // 12300000  
let  y =  123e-5; // 0.00123
```

## Integer Precision

Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

### Example
```js
let  x =  999999999999999; // x will be 999999999999999  
let  y =  9999999999999999; // y will be 10000000000000000
```

The maximum number of decimals is 17.

## Floating Precision

Floating point arithmetic is not always 100% accurate:

```js
let  x =  0.2  +  0.1;
```

To solve the problem above, it helps to multiply and divide:
```js
let  x = (0.2  *  10  +  0.1  *  10) /  10;
```

## Adding Numbers

Pass uses the + operator for both addition and concatenation.

If you add two numbers, the result will be a number:

### Example
```js
let  x =  10;  
let  y =  20;  
let  z = x + y;
```
