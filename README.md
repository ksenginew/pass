<h1 align="center">
<a href="#nolink">
  <img src="https://github.com/ksenginew/pass-lang/logo.svg" alt="Pass language logo" height="120" width="120"/><br>
</a>
  Pass
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/pass-lang"><img src="https://img.shields.io/npm/v/pass-lang.svg?color=0EA5E9" alt="Npm Version"></a>
  <a href="https://www.npmjs.com/package/pass-lang"><img src="https://img.shields.io/npm/dt/pass-lang.svg?color=1388bd" alt="Total Downloads"></a>
  <a href="https://github.com/ksenginew/pass-lang/actions"><img src="https://img.shields.io/github/workflow/status/ksenginew/pass-lang/CI" alt="Build Status"></a>
  <a href="https://codecov.io/gh/ksenginew/pass-lang"><img src="https://img.shields.io/codecov/c/github/ksenginew/pass-lang/dev.svg?sanitize=true" alt="Coverage"></a>
</p>

<p align="center">Next generation CSS preprocessor. It's programmatically awesome.</p>

[windi css]: https://windicss.org
[website]: https://windicss.org
[video comparison]: https://twitter.com/antfu7/status/1361398324587163648

## Why Pass? 🤔

**Many CSS preprocessors comes with a learning curve of a new language.
But Pass is still CSS. With powerful extensions if you want.**

> ```diff
> - currently in development
> ```

## Integrations

Windi CSS provides first-class integrations for your favorite tools, select yours and get started.

| Frameworks | Package | Version |
| :-- | :-- | :-- |
| CLI | Built-in | ![](https://img.shields.io/npm/v/pass-lang?label=&color=0EA5E9) |

## Plugins 🛠
- [Sass and SCSS support](https://github.com/ksenginew/pass-lang/tree/main/packages/sass#readme)

## Documentation 📖

Check [the documentation website][website].

## Discussions

We’re using [GitHub Discussions](https://github.com/windicss/windicss/discussions) as a place to connect with other members of our community. You are free to ask questions and share ideas, so enjoy yourself.

## Contributing

If you're interested in contributing to windicss, please read our [contributing docs](https://github.com/windicss/windicss/blob/main/CONTRIBUTING.md) **before submitting a pull request**.

## Sponsors

<a href="https://opencollective.com/pass" target="_blank">
    <img src="https://opencollective.com/pass/sponsers.svg">
</a>

## Backers
<a href="https://opencollective.com/pass" target="_blank">
    <img src="https://opencollective.com/pass/backers.svg">
</a>

## License

Distributed under the [MIT License](https://github.com/windicss/windicss/blob/main/LICENSE).




# pass lang



## Usage


1. Write your CSS(eg:- `example.pass.ts`)
    ```js
    import { css } from 'pass-lang'
    export default css`
    nav {
      width: ${10 + 10}px; /* operators */
    }

    ul {
      font: 100% ${font_stack}; /* using variables */
    }

    li {
      ${theme()} /* using functions / mixins */
    }

    a {
      ${equal_heights}/* extending styles */
    }
    `
    ```
2. Convert it to css
    ```bash
    npx pass-lang example.pass.ts
    ```
    **Take a look at the newly created `example.pass.css` file.**

> Contact me via [discussions](https://github.com/ksenginew/pass-lang/discussions) for help.


### Extensions
