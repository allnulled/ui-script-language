# UI-Script


**UI-Script** is a shorter & simpler substitute for HTML syntax.

![Shield](https://img.shields.io/badge/Set_of_components-yes-green) ![Shield](https://img.shields.io/badge/HTML_substitute-yes-green) ![Shield](https://img.shields.io/badge/Supports_es6_import_syntax-yes-green) ![Shield](https://img.shields.io/badge/Supports_es5_require_syntax-yes-green) ![Shield](https://img.shields.io/badge/Installable_by_command_line-yes-green)


# Index

- [UI-Script](#ui-script)
- [Index](#index)
- [Online version](#online-version)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

# Online version

You have a free tester online version here:

- [https://allnulled.github.io/ui-script-language](https://allnulled.github.io/ui-script-language)




# Installation

First, you import the CSS file for general and per-component styling:


```html
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script.css" />
```

Second, you import the JS file for general and per-component logic:

```html
<script src="lib/ui-script/ui-script.js"></script>
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

- [**`xbreadcrumb`**](./docs/lib/ui-script/components/xbreadcrumb/xbreadcrumb.md)
- [**`xbutton`**](./docs/lib/ui-script/components/xbutton/xbutton.md)
- [**`xform`**](./docs/lib/ui-script/components/xform/xform.md)
- [**`xformfield`**](./docs/lib/ui-script/components/xformfield/xformfield.md)
- [**`xjumbotron`**](./docs/lib/ui-script/components/xjumbotron/xjumbotron.md)
- [**`xlabel`**](./docs/lib/ui-script/components/xlabel/xlabel.md)
- [**`xlayout`**](./docs/lib/ui-script/components/xlayout/xlayout.md)
- [**`xlayoutnopaddingbottom`**](./docs/lib/ui-script/components/xlayoutnopaddingbottom/xlayoutnopaddingbottom.md)
- [**`xlayoutnopaddingtop`**](./docs/lib/ui-script/components/xlayoutnopaddingtop/xlayoutnopaddingtop.md)
- [**`xlink`**](./docs/lib/ui-script/components/xlink/xlink.md)
- [**`xpage`**](./docs/lib/ui-script/components/xpage/xpage.md)
- [**`xpanel`**](./docs/lib/ui-script/components/xpanel/xpanel.md)
- [**`xparagraph`**](./docs/lib/ui-script/components/xparagraph/xparagraph.md)
- [**`xsubtitle`**](./docs/lib/ui-script/components/xsubtitle/xsubtitle.md)
- [**`xtable`**](./docs/lib/ui-script/components/xtable/xtable.md)
- [**`xtablecell`**](./docs/lib/ui-script/components/xtablecell/xtablecell.md)
- [**`xtablerow`**](./docs/lib/ui-script/components/xtablerow/xtablerow.md)
- [**`xtester`**](./docs/lib/ui-script/components/xtester/xtester.md)
- [**`xtitle`**](./docs/lib/ui-script/components/xtitle/xtitle.md)
- [**`xwindow`**](./docs/lib/ui-script/components/xwindow/xwindow.md)
- [**`xwindowbody`**](./docs/lib/ui-script/components/xwindowbody/xwindowbody.md)
- [**`xwindowfooter`**](./docs/lib/ui-script/components/xwindowfooter/xwindowfooter.md)
- [**`xwindowfooteritem`**](./docs/lib/ui-script/components/xwindowfooteritem/xwindowfooteritem.md)
- [**`xwindowtitle`**](./docs/lib/ui-script/components/xwindowtitle/xwindowtitle.md)

# Examples

The following example demonstrates how to create a new Vue.js component from UI-Scripting markup.

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