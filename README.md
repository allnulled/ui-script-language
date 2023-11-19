# ui-script

UI Script is a shorter & simpler substitute for HTML syntax.

## Versión online del tester

Tienes una versión online del tester aquí:

- [https://allnulled.github.io/ui-script-language](https://allnulled.github.io/ui-script-language)


## Installation

First, you import the CSS files for general and per-component styling:

```html
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-styles.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xbreadcrumb/xbreadcrumb.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xform/xform.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xformfield/xformfield.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xjumbotron/xjumbotron.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xlabel/xlabel.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xsubtitle/xsubtitle.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xtitle/xtitle.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xwindow/xwindow.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xwindowtitle/xwindowtitle.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xwindowbody/xwindowbody.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xwindowfooter/xwindowfooter.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xpanel/xpanel.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xbutton/xbutton.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xlayout/xlayout.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xlayoutnopaddingtop/xlayoutnopaddingtop.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xwindowfooteritem/xwindowfooteritem.css" />
<link rel="stylesheet" type="text/css" href="lib/ui-script/ui-script-components/xtester/xtester.css" />
```

Second, you import the JS files for general and per-component logic:

```html
<script src="lib/ui-script/ui-script-api.js"></script>
<script src="lib/ui-script/ui-script-components/xbreadcrumb/xbreadcrumb.js"></script>
<script src="lib/ui-script/ui-script-components/xform/xform.js"></script>
<script src="lib/ui-script/ui-script-components/xformfield/xformfield.js"></script>
<script src="lib/ui-script/ui-script-components/xjumbotron/xjumbotron.js"></script>
<script src="lib/ui-script/ui-script-components/xlabel/xlabel.js"></script>
<script src="lib/ui-script/ui-script-components/xsubtitle/xsubtitle.js"></script>
<script src="lib/ui-script/ui-script-components/xtitle/xtitle.js"></script>
<script src="lib/ui-script/ui-script-components/xwindow/xwindow.js"></script>
<script src="lib/ui-script/ui-script-components/xwindowtitle/xwindowtitle.js"></script>
<script src="lib/ui-script/ui-script-components/xwindowbody/xwindowbody.js"></script>
<script src="lib/ui-script/ui-script-components/xwindowfooter/xwindowfooter.js"></script>
<script src="lib/ui-script/ui-script-components/xpanel/xpanel.js"></script>
<script src="lib/ui-script/ui-script-components/xbutton/xbutton.js"></script>
<script src="lib/ui-script/ui-script-components/xlayout/xlayout.js"></script>
<script src="lib/ui-script/ui-script-components/xlayoutnopaddingtop/xlayoutnopaddingtop.js"></script>
<script src="lib/ui-script/ui-script-components/xwindowfooteritem/xwindowfooteritem.js"></script>
<script src="lib/ui-script/ui-script-components/xtester/xtester.js"></script>
```

Third and final, you import the JS file for the parser:

```html
<script src="lib/ui-script/ui-script-parser.js"></script>
```

## Usage

The following example demonstrates how to create a new Vue.js component from UI-Scripting markup.

```html
<script>
Vue.component("CustomComponent", {
    template: UIScriptParser.parse(`
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

## Notes

The language is just an instrument to save a set of web components based on Vue.js. So, please, take into account that the most important thing are the components, while the language is just a way to put them all together, and present them in a nice and friendlier way. But it is not that important, the main point are the components.