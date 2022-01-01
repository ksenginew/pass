---
sidebar_label: Webpack
sidebar_position: 2
---
# Integration for  [webpack](https://webpack.js.org/)

## Getting Started

To begin, you'll need to install things:

```bash
yarn add webpack webpack-cli style-loader css-loader @passlang/core -D 
# npm i webpack webpack-cli style-loader css-loader @passlang/core -D
```
We should create a new loader for this task.
Create a new file named `pass-loader.js` and paste the following content.

```js title="pass-loader.js"
exports.pitch = async function (remaining) {
  const result = await this.importModule(
    this.resourcePath + '.webpack[javascript/auto]' + '!=!' + remaining
  );
  return result.default || result;
};
```

Chain the  `pass-loader`  with the  [css-loader](https://webpack.js.org/loaders/css-loader/)  and the  [style-loader](https://webpack.js.org/loaders/style-loader/)  to immediately apply all styles to the DOM or the  [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)  to extract it into a separate file.

Then add the loader to your Webpack configuration. For example:

```js title="app.js"
import "./styles.pass.js";
```

```js title="styles.pass.js"
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

```js title="webpack.config.js"
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  module: {
    rules: [
      {
        test: /\.pass\.js$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "./pass-loader.js",
        ],
      },
    ],
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};
```

Finally run  `webpack`  via your preferred method.

For configuration 
- [css-loader](https://webpack.js.org/loaders/css-loader/)
- [style-loader](https://webpack.js.org/loaders/style-loader/)
