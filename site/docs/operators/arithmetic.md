---
sidebar_position: 2
---
## Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).

## Arithmetic Operations

A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

```js
let  x =  100  +  50;
```
or variables:

```js
let  x = a + b;
```

or expressions:

```js
let  x = (100  +  50) * a;
```

## Adding

The  **addition**  operator (`+`) adds numbers:

```js
let  x =  5;  
let  y =  2;  
let  z = x + y;
```

## Subtracting

The  **subtraction**  operator (`-`) subtracts numbers.

```js
let  x =  5;  
let  y =  2;  
let  z = x - y;
```

## Multiplying

The  **multiplication**  operator (`*`) multiplies numbers.

```js
let  x =  5;  
let  y =  2;  
let  z = x * y;
```

----------

## Dividing

The  **division**  operator (`/`) divides numbers.

### Example

let  x =  5;  
let  y =  2;  
let  z = x / y;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_div)

----------

## Remainder

The  **modulus**  operator (`%`) returns the division remainder.

### Example

let  x =  5;  
let  y =  2;  
let  z = x % y;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_mod)

In arithmetic, the division of two integers produces a  **quotient**  and a  **remainder**.

In mathematics, the result of a  **modulo operation**  is the  **remainder**  of an arithmetic division.

----------

## Incrementing

The  **increment**  operator (`++`) increments numbers.

### Example

let  x =  5;  
x++;  
let  z = x;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_increment)

----------

## Decrementing

The  **decrement**  operator (`--`) decrements numbers.

### Example

let  x =  5;  
x--;  
let  z = x;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_decrement)

----------

## Exponentiation

The  **exponentiation**  operator (`**`) raises the first operand to the power of the second operand.

### Example

let  x =  5;  
let  z =  x **  2; // result is 25

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetric_exponent1)

x ** y produces the same result as  `Math.pow(x,y)`:

### Example

let  x =  5;  
let  z =  Math.pow(x,2); // result is 25

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetric_exponent2)

----------

## Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

### Example

let  x =  100  +  50  *  3;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_precedence1)

Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

Is the addition or the multiplication done first?

As in traditional school mathematics, the multiplication is done first.

Multiplication (`*`) and division (`/`) have higher  **precedence**  than addition (`+`) and subtraction (`-`).

And (as in school mathematics) the precedence can be changed by using parentheses:

### Example

let  x = (100  +  50) *  3;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_precedence2)

When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction), they are computed from left to right:

### Example

let  x =  100  +  50  -  3;

[Try it Yourself »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_arithmetic_precedence3)

----------

## JavaScript



