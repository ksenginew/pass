---
sidebar_position: 2
---
const Item = ({ icon, color, ...props }) => {
  return (
  <button className="button button--secondary">
  <div style={{
    WebkitMask: `url(${icon}) no-repeat`,
    mask: `url(${icon}) no-repeat`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    backgroundColor: color,
    height: '5em',
    width: '5em',
  }} >
  </div>
  <div {...props}/>
  </button>
  )
}

# Installation

Pass provides  **first-class integrations**  for your favorite tools. Select yours and get started.

## Build Tools

Support for build-tools are framework-agnostic. They work for most frameworks without specific configurations.


Webpack

<!--
Vite

Rollup

PostCSS

(https://windicss.org/integrations/cli)

CLI

## Frameworks

In addition to general build-tools support, we also provide integrations for the following frameworks that offer out-of-the-box experience.

[](https://windicss.org/integrations/nuxt)

Nuxt

[](https://windicss.org/integrations/vue-cli)

Vue CLI

[](https://windicss.org/integrations/gridsome)

Gridsome

[](https://windicss.org/integrations/svelte)

Svelte
-->

## Editors

<Item icon="https://simpleicons.org/icons/visualstudiocode.svg" color="#007ACC">
    VS Code
</Item>

<!--
WebStorm

WIP
-->
## API

<Item icon="https://simpleicons.org/icons/javascript.svg" color="#F7DF1E">
    JavaScript
</Item>

---

> Didn't see the framework you use?  [Submit a framework request on GitHub](https://github.com/ksenginew/pass/issues/new).
     
Try the [playground](/playground)
