---
sidebar_position: 5
---
# Maps

A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

## How to Create a Map

You can create a Pass Map by:

-   Passing an Array to  `new Map()`
-   Create a Map and use  `Map.set()`
-   Use `Object.entries()` method

### The new Map() Method

You can create a Map by passing an Array to the  `new Map()`  constructor:

```js
// Create a Map  
const  fruits =  new  Map([  
["apples",  500],  
["bananas",  300],  
["oranges",  200]  
])
```

### The set() Method

You can add elements to a Map with the  `set()`  method:

```js
// Create a Map  
const  fruits =  new  Map()
  
// Set Map Values  
fruits.set("apples",  500)
fruits.set("bananas",  300)
fruits.set("oranges",  200)
```

The  `set()`  method can also be used to change existing Map values:

```js
fruits.set("apples",  200)
```

### The Object.entries() Method

You can create a Map by passing an Object to the  `new Map()`  constructor through `Object.entries()` method:

```js
// Create a Map  
const  fruits =  new  Map(Object.entries({
  apples:  500,  
  bananas:  300,  
  oranges:  200 
}))
```
## The get() Method

The  `get()`  method gets the value of a key in a Map:

```js
fruits.get("apples") // Returns 500  
```

## The size Property

The  `size`  property returns the number of elements in a Map:

```js
fruits.size
```

## The delete() Method

The  `delete()`  method removes a Map element:

```js
fruits.delete("apples")
```

## The has() Method

The  `has()`  method returns true if a key exists in a Map:

```js
fruits.has("apples")
```

**Try This:**
```py
fruits.delete("apples"); 
fruits.has("apples")
```

## Differences between Objects and Maps:

-|Object|Map
-|-|-
iterable|Not directly iterable|Directly iterable
Size|Do not have a size property|Have a size property
Key Types|Keys must be Strings (or Symbols)|Keys can be any datatype
Key Order|Keys are not well ordered|Keys are ordered by insertion
Defaults|Have default keys|Do not have default keys
