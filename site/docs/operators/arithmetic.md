---
sidebar_position: 2
---
# Arithmetic

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

## Dividing

The  **division**  operator (`/`) divides numbers.

```js
let  x =  5;  
let  y =  2;  
let  z = x / y;
```

## Remainder

The  **modulus**  operator (`%`) returns the division remainder.

```js
let  x =  5;  
let  y =  2;  
let  z = x % y;
```

In arithmetic, the division of two integers produces a  **quotient**  and a  **remainder**.

In mathematics, the result of a  **modulo operation**  is the  **remainder**  of an arithmetic division.

## Incrementing

The  **increment**  operator (`++`) increments numbers.

```js
let  x =  5;  
x++;  
let  z = x;
```

## Decrementing

The  **decrement**  operator (`--`) decrements numbers.

```js
let  x =  5;  
x--;  
let  z = x;
```

## Exponentiation

The  **exponentiation**  operator (`**`) raises the first operand to the power of the second operand.

```js
let  x =  5;  
let  z =  x **  2; // result is 25
```

x ** y produces the same result as  `Math.pow(x,y)`:

```js
let  x =  5;  
let  z =  Math.pow(x,2); // result is 25
```
