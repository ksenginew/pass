---
sidebar_label: Webpack
sidebar_position: 2
---

# Integration for  [webpack](https://webpack.js.org/)

## Install

If you are proceeding setup with a custom webpack build, then please report any issues you find.

```bash
yarn add pass-loader -D 
# npm i pass-loader -D
```

## Configure
This is a minimal example for configure Webpack for pass

_webpack.config.js_
```js
export default = {
// for non ES modules, comment the above line and uncomment the following line.
// module.exports = {
  // ...
  module: {
    rules: [
      {
        // test: /\.pass\.ts$/i, // for typescript
        test: /\.pass\.js$/i,
        use: [
           // Other loaders...
          'pass-loader',
        ],
      },
    ],
  },
};
```
With Webpack, Pass is useless without necessary loaders and plugins.

### Transpiling
If you want to transpile your `.pass.js` files, Choose the loaders fits to your needs.

-   [`babel-loader`](https://webpack.js.org/loaders/babel-loader)  Loads ES2015+ code and transpiles to ES5 using  [Babel](https://babeljs.io/)
-   [`buble-loader`](https://github.com/sairion/buble-loader)  Loads ES2015+ code and transpiles to ES5 using  [Bublé](https://buble.surge.sh/guide/)
-   [`traceur-loader`](https://github.com/jupl/traceur-loader)  Loads ES2015+ code and transpiles to ES5 using  [Traceur](https://github.com/google/traceur-compiler#readme)
-   [`ts-loader`](https://github.com/TypeStrong/ts-loader)  Loads  [TypeScript](https://www.typescriptlang.org/)  2.0+ like JavaScript
-   [`coffee-loader`](https://webpack.js.org/loaders/coffee-loader)  Loads  [CoffeeScript](http://coffeescript.org/)  like JavaScript
-   [`fengari-loader`](https://github.com/fengari-lua/fengari-loader/)  Loads Lua code using  [fengari](https://fengari.io/)
-   [`elm-webpack-loader`](https://github.com/elm-community/elm-webpack-loader)  Loads  [Elm](https://elm-lang.org/)  like JavaScript

### Styling
Use following styling loaders provides some features to your styling.
-   [`style-loader`](https://webpack.js.org/loaders/style-loader)  Add exports of a module as style to DOM
-   [`css-loader`](https://webpack.js.org/loaders/css-loader)  Loads CSS file with resolved imports and returns CSS code
-   [`less-loader`](https://webpack.js.org/loaders/less-loader)  Loads and compiles a LESS file
-   [`sass-loader`](https://webpack.js.org/loaders/sass-loader)  Loads and compiles a SASS/SCSS file
-   [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader)  Loads and transforms a CSS/SSS file using  [PostCSS](http://postcss.org/)
-   [`stylus-loader`](https://webpack.js.org/loaders/stylus-loader/)  Loads and compiles a Stylus file

## Examples

See  [official example](https://github.com/ksenginew/pass/tree/docs/examples/webpack)  for sample projects.


Take a look at [CSS loader](https://webpack.js.org/loaders/css-loader/#examples) for production ready examples.
