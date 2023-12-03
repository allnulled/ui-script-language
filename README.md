# UI-Script


**UI-Script** is a shorter & simpler substitute for HTML syntax.

![Shield](https://img.shields.io/badge/Set_of_components-+20-green) ![Shield](https://img.shields.io/badge/HTML_substitute-optionally-green) ![Shield](https://img.shields.io/badge/Supports_es6_import_syntax-yes-green) ![Shield](https://img.shields.io/badge/Supports_es5_require_syntax-yes-green) ![Shield](https://img.shields.io/badge/Installable_by_command_line-2_binaries-green) ![Shield](https://img.shields.io/badge/Packed_with-browserify-green) ![Shield](https://img.shields.io/badge/Installable_via-npm-green) ![Shield](https://img.shields.io/badge/Binary_1-uiscript-green) ![Shield](https://img.shields.io/badge/Binary_2-xcomponents-green)


# Index

- [UI-Script](#ui-script)
- [Index](#index)
- [Online version](#online-version)
- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Binaries usage](#binaries-usage)
  - [Usage of `uiscript`](#usage-of-uiscript)
  - [Usage of `xcomponents`](#usage-of-xcomponents)

# Online version

You have a free tester online version here:

- [https://allnulled.github.io/ui-script-language](https://allnulled.github.io/ui-script-language)


# Documentation

The documentation can be found:

- On NPM at [https://npmjs.com/@allnulled/ui-script](https://npmjs.com/@allnulled/ui-script)
- On Github at [https://github.com/allnulled/ui-script-language](https://github.com/allnulled/ui-script-language)

# Installation

Before starting, import the package via `npm`:

```
npm install --save @allnulled/ui-script
```

First, you import the CSS file for general and per-component styling:

```html
<link rel="stylesheet" type="text/css" href="./node_modules/@allnulled/ui-script/docs/lib/ui-script/ui-script.css" />
```

Second, you import the JS file for general and per-component logic:

```html
<script src="./node_modules/@allnulled/ui-script/docs/lib/ui-script/ui-script.js"></script>
```

# Usage

Once you have done this, 2 variables are added into the global scope `window`:
  - `uiscript_api` and
  - `uiscript_components`.

However, you can use `import` statement too to retrieve the `uiscript_api`.

The `uiscript_api` comes packed like this:

```js
window.uiscript_api = {
    ast: { parser: ast_parser },
    parser,
    components: window.uiscript_components
};
```

The `uiscript_api.parser.parse(uiscript)` function returns HTML syntax from `uiscript` syntax.

The `uiscript_api.ast.parser.parse(uiscript)` function returns an object syntax from `uiscript` syntax.

The `uiscript_api.components` holds the `uiscript_components` object.

The `uiscript_components` holds all the ui-script (Vue2) components of the library, this is:

- [**docs/lib/ui-script/components/xbreadcrumb**](./docs/lib/ui-script/components/xbreadcrumb/xbreadcrumb.md)
- [**docs/lib/ui-script/components/xbutton**](./docs/lib/ui-script/components/xbutton/xbutton.md)
- [**docs/lib/ui-script/components/xdialogport**](./docs/lib/ui-script/components/xdialogport). Imports a special API for Windows 7 dialogs based on Vue.js v2 components usage/usage.md.
- [**docs/lib/ui-script/components/xform**](./docs/lib/ui-script/components/xform/xform.md)
- [**docs/lib/ui-script/components/xformfield**](./docs/lib/ui-script/components/xformfield/xformfield.md)
- [**docs/lib/ui-script/components/xjumbotron**](./docs/lib/ui-script/components/xjumbotron/xjumbotron.md)
- [**docs/lib/ui-script/components/xlabel**](./docs/lib/ui-script/components/xlabel/xlabel.md)
- [**docs/lib/ui-script/components/xlayout**](./docs/lib/ui-script/components/xlayout/xlayout.md)
- [**docs/lib/ui-script/components/xlayoutnopaddingbottom**](./docs/lib/ui-script/components/xlayoutnopaddingbottom/xlayoutnopaddingbottom.md)
- [**docs/lib/ui-script/components/xlayoutnopaddingtop**](./docs/lib/ui-script/components/xlayoutnopaddingtop/xlayoutnopaddingtop.md)
- [**docs/lib/ui-script/components/xlink**](./docs/lib/ui-script/components/xlink/xlink.md)
- [**docs/lib/ui-script/components/xpage**](./docs/lib/ui-script/components/xpage/xpage.md)
- [**docs/lib/ui-script/components/xpanel**](./docs/lib/ui-script/components/xpanel/xpanel.md)
- [**docs/lib/ui-script/components/xparagraph**](./docs/lib/ui-script/components/xparagraph/xparagraph.md)
- [**docs/lib/ui-script/components/xstatic**](./docs/lib/ui-script/components/xstatic/xstatic.md)
- [**docs/lib/ui-script/components/xsubtitle**](./docs/lib/ui-script/components/xsubtitle/xsubtitle.md)
- [**docs/lib/ui-script/components/xtable**](./docs/lib/ui-script/components/xtable/xtable.md)
- [**docs/lib/ui-script/components/xtablecell**](./docs/lib/ui-script/components/xtablecell/xtablecell.md)
- [**docs/lib/ui-script/components/xtablerow**](./docs/lib/ui-script/components/xtablerow/xtablerow.md)
- [**docs/lib/ui-script/components/xtester**](./docs/lib/ui-script/components/xtester/xtester.md)
- [**docs/lib/ui-script/components/xtitle**](./docs/lib/ui-script/components/xtitle/xtitle.md)
- [**docs/lib/ui-script/components/xwindow**](./docs/lib/ui-script/components/xwindow/xwindow.md)
- [**docs/lib/ui-script/components/xwindowbody**](./docs/lib/ui-script/components/xwindowbody/xwindowbody.md)
- [**docs/lib/ui-script/components/xwindowfooter**](./docs/lib/ui-script/components/xwindowfooter/xwindowfooter.md)
- [**docs/lib/ui-script/components/xwindowfooteritem**](./docs/lib/ui-script/components/xwindowfooteritem/xwindowfooteritem.md)
- [**docs/lib/ui-script/components/xwindowtitle**](./docs/lib/ui-script/components/xwindowtitle/xwindowtitle.md)

# Examples

The following example demonstrates how to create a new Vue.js v2 component from UI-Scripting markup.

```html
<script>
Vue.component("CustomComponent", {
    template: uiscript_api.parser.parse(`
      !div {
       !xwindow {
        !xwindowtitle {{ Título de la ventana }}
        !xwindowbody {
         !xtitle {{ Título de página }}
         !xsubtitle {{ Subttulo de página }}
         !xbreadcrumb {{ Ruta » a » subdireccion }}
         !xpanel {
          !xform {
           !xformfield {{ Usuario: }}
           !xformfield {{ Contraseña: }}
          }
         }
         !xlayoutnopaddingtop [style="text-align: right;"] {
          !xbutton {{ Entrar }}
         }
        }
        !xwindowfooter {
         !xwindowfooteritem {{ Pie de ventana }}
        }
       }
      }
    `)
});
</script>
```

# Binaries usage

## Usage of `uiscript`

To parse `uiscript` code into `html` you can simply:

```sh
uiscript file1.uis file2.uis file3.uis
```

This will output the equivalent `html` files beside each.

## Usage of `xcomponents`

To create a setup of files (`lib` folder) you can simply:

```sh
xcomponents docs
```

This will create a `lib` folder inside the `docs` folder with:

  - `calo`: [`castelog`](https://github.com/allnulled/castelog) import statement.
  - `win7`: [`win7`](https://khang-nd.github.io/7.css/) CSS library.
  - `ui-script`: [`ui-script`](.) JS and CSS files, and the whole component API too, in case you need to modify it.