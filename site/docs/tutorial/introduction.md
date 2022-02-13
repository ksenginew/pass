---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#  Introduction

## What You Should Already Know

Before you continue you should have a basic understanding of [CSS](https://mdn.io/css).

It's better if you have a basic understanding of [JavaScript](https://mdn.io). And you can learn [TypeScript](https://typescriptlang.com) for strongly typed language. Also you can learn [coffeescript](https://coffeescript.org/) or any flavour of JavaScript.

But we'll use JavaScript in this tutorial.

## What is Pass?

**Pass**  stands for  **P**rogrammatically  **A**wesome  **S**tyle**s**heet

There are many CSS preprocessor. Some popular ones are.
- Sass
- Less
- Stylus

Many preprocessors created their own languages to define styles. So you should learn a new language do use them.

Pass is still CSS. But you can extend it with JavaScript.

Don't worry. You'll learn all the things with this tutorial.

## Why Use Pass?

Pass is a way to extend CSS. So if you are going to use CSS, you should try Pass.

## A Simple Example why Pass is Useful

Let's say we have a website with three main colors:

#a2b9bc

#b2ad7f

#878f99

So, how many times do you need to type those HEX values? A LOT of times. And what about variations of the same colors?

Instead of typing the above values a lot of times, you can use Pass and write this:

<Tabs groupId="lang">
<TabItem value="js" label="JavaScript">

```js
// import basit utility
import { css } from '@passlang/core'

// define variables for the primary colors
let primary_1 = '#a2b9bc'
let primary_2 = '#b2ad7f'
let primary_3 = '#878f99'

// use the variables and export CSS
export default css`
.main-header  {  
  background-color:  ${primary_1};  
}  
  
.menu-left  {  
  background-color:  ${primary_2};  
}  
  
.menu-right  {  
  background-color:  ${primary_3};  
}
`
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
// import basit utility
import { css } from '@passlang/core'

// define variables for the primary colors
let primary_1: string = '#a2b9bc'
let primary_2: string = '#b2ad7f'
let primary_3: string = '#878f99'

// use the variables and export CSS
export default css`
.main-header  {  
  background-color:  ${primary_1};  
}  
  
.menu-left  {  
  background-color:  ${primary_2};  
}  
  
.menu-right  {  
  background-color:  ${primary_3};  
}
`
```

</TabItem>
<TabItem value="coffee" label="CoffeScript">

```coffee
# import basit utility
import { css } from '@passlang/core'

# define variables for the primary colors
primary_1 = '#a2b9bc'
primary_2 = '#b2ad7f'
primary_3 = '#878f99'

# use the variables and export CSS
export default css"""
.main-header  {  
  background-color:  #{primary_1};  
}  
  
.menu-left  {  
  background-color:  #{primary_2};  
}  
  
.menu-right  {  
  background-color:  #{primary_3};  
}
"""
```

</TabItem>
</Tabs>
  
So, when using Pass, and the primary color changes, you only need to change it in one place.

## How Does Pass Work?

Any browser can understand basic Pass because it's pure JavaScript.

You can convert Pass to CSS with Pass CLI.

## Pass File Type

Pass files can have any file extension. It depends on your choice 
- JavaScript - `.js` (default)
- Typescript - `.ts`
- CoffeeScrip - `.coffee`

:::tip
Use `.pass.js`(or `.pass.ts` or `.pass.coffee`) for entry files.
:::

## Pass Comments

Pass supports standard CSS comments  `/* comment */` and standard JavaScript comments(`/* comment */` and `// comment`).

<Tabs groupId="lang">
<TabItem value="js" label="JavaScript">

```js
/* define primary colors */
// Or define primary colors
let primary_1 = '#a2b9bc'
let primary_2 = '#b2ad7f' 

export default css`
/* use the variables */  
${''/* use the variables */}
.main-header  {  
  background-color:  ${primary_1};  ${// here you can put an inline comment
''}  
}
`
```

</TabItem>
<TabItem value="ts" label="TypeScript">

```ts
/* define primary colors */
// Or define primary colors
let primary_1:string = '#a2b9bc'
let primary_2:string = '#b2ad7f'

export default css`
/* use the variables */  
${''/* use the variables */}
.main-header  {  
  background-color:  ${primary_1};  ${// here you can put an inline comment
''}  
}
`
```

</TabItem>
<TabItem value="coffee" label="CoffeScript">

```coffee
### define primary colors ###
# Or define primary colors
primary_1 = '#a2b9bc'  
primary_2 = '#b2ad7f'  

export default css"""
/* use the variables */  
#{''### use the variables ###}
.main-header  {  
  background-color:  #{primary_1};  #{# here you can put an inline comment
''}  
}
"""
```

</TabItem>
</Tabs>
