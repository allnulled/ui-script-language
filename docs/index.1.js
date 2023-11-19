
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 UIScript | Tester del lenguaje</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-styles.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xbreadcrumb/xbreadcrumb.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xpage/xpage.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlink/xlink.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xform/xform.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xformfield/xformfield.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xjumbotron/xjumbotron.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlabel/xlabel.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xsubtitle/xsubtitle.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtitle/xtitle.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindow/xwindow.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowtitle/xwindowtitle.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowbody/xwindowbody.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowfooter/xwindowfooter.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xpanel/xpanel.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xbutton/xbutton.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlayout/xlayout.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlayoutnopaddingtop/xlayoutnopaddingtop.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowfooteritem/xwindowfooteritem.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtable/xtable.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtablerow/xtablerow.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtablecell/xtablecell.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtester/xtester.css\" />\n\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/beautify/beautify-html.js\"></script>\n    <script src=\"lib/ui-script/ui-script-parser.js\"></script>\n    <script src=\"lib/ui-script/ui-script-api.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xpage/xpage.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlink/xlink.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xbreadcrumb/xbreadcrumb.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xform/xform.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xformfield/xformfield.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xjumbotron/xjumbotron.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlabel/xlabel.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xsubtitle/xsubtitle.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtitle/xtitle.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindow/xwindow.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowtitle/xwindowtitle.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowbody/xwindowbody.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowfooter/xwindowfooter.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xpanel/xpanel.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xbutton/xbutton.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlayout/xlayout.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlayoutnopaddingtop/xlayoutnopaddingtop.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowfooteritem/xwindowfooteritem.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtable/xtable.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtablerow/xtablerow.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtablecell/xtablecell.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtester/xtester.js\"></script>\n    \n    <style>\n      h5 {\n        margin: 0;\n        padding: 12px;\n        background-color: #333;\n        color: white;\n        font-size: 10px;\n        font-family: Arial;\n      }\n      .CodeMirror.cm-s-default{\n        font-size: 9px;\n      }\n      .normal {\n        font-family: Arial;\n        font-size: 10px;\n      }\n      table.tabla_de_titulo {\n        width: 100%;\n      }\n      table.tabla_de_titulo td {\n\n      }\n      td.celda_de_titulo {\n        width: 100%;\n      }\n      .display_block {\n        display: block;\n      }\n      .display_none {\n        display: none;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <div class=\"normal\">"
 + "      Back to <a href=\"https://github.com/allnulled/ui-script-language\">Github project</a>."
 + "    </div>"
 + "    <h5>"
 + "      <table class=\"tabla_de_titulo\">"
 + "        <tr>"
 + "          <td class=\"celda_de_titulo\">"
 + "            <span>UIScript | Tester del lenguaje</span>"
 + "          </td>"
 + "          <td>"
 + "            <span>"
 + "              <button v-on:click=\"alternarModo\">{{ modo === 'codigo' ? 'Vista' : 'Código' }}</button>"
 + "            </span>"
 + "          </td>"
 + "        </tr>"
 + "      </table>"
 + "    </h5>"
 + "    <div :class=\"modo === 'codigo' ? 'display_block' : 'display_none'\">"
 + "      <div>"
 + "        <textarea ref=\"entrada_del_tester\" v-model=\"entradaDelTester\"></textarea>"
 + "      </div>"
 + "      <button style=\"width: 100%;\" v-on:click=\"validarSintaxis\">Validar</button>"
 + "      <div v-if=\"error\" v-on:click=\"limpiarError\">"
 + "        {{ error }}"
 + "      </div>"
 + "      <div>"
 + "        <textarea ref=\"salida_del_tester\" v-model=\"salidaDelTester\" disabled=\"true\"></textarea>"
 + "      </div>"
 + "    </div>"
 + "    <div :class=\"modo === 'vista' ? 'display_block' : 'display_none'\">"
 + "      <div v-if=\"salidaDelTester\">"
 + "        <xtester></xtester>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { modo:undefined,
idTesterTimeout:undefined,
entradaDelTester:`

!div {

 !xpage [title="Página de login"] {
  !div {
   !xwindow {
    !xwindowtitle {{ Título de la ventana }}
    !xwindowbody {
     !xtitle {{ Título de página }}
     !xsubtitle {{ Subttulo de página }}
     !xbreadcrumb {
      !xlink {{ Ruta }}
      !span {{ » }}
      !xlink {{ a }}
      !span {{ » }}
      !xlink {{ subdireccion }}
     }
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
 }

 !xpage [title="Página de crear usuario"] {
  !xwindow {
   !xwindowtitle {{ Título de crear usuario }}
   !xwindowbody {
    !xtitle {{ Crear usuario }}
    !xform {
     !xformfield {{ Nombre de usuario: }}
     !xformfield {{ Contraseña de usuario: }}
     !xformfield {{ Correo de usuario: }}
    }
    !xlayoutnopaddingtop [style="text-align: right;"] {
     !xbutton {{ Crear }}
    }
   }
   !xwindowfooter {
    !xwindowfooteritem {{ Creando usuario. }}
   }
  }
 }

}
 
 `,
entradaDelTesterEditor:undefined,
salidaDelTester:"",
salidaDelTesterEditor:undefined,
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ alternarModo() {try {
if(this.modo === "codigo") {
this.modo = "vista";
}
else if(this.modo === "vista") {
this.modo = "codigo";
}
} catch(error) {
console.log(error);
throw error;
}

},
limpiarError() {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
gestionarError( error ) {try {
this.error = error;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
validarSintaxis() {try {
const uiScriptContenido = this.entradaDelTesterEditor.getValue(  );
const salidaDelParser = this.root.$window.UIScriptParser.parse( uiScriptContenido );
this.salidaDelTester = Vue.component( "xtester",
{ template:salidaDelParser
} );
console.log("uiScriptContenido");
console.log(uiScriptContenido);
console.log("salidaDelParser");
console.log(salidaDelParser);
const salidaDelParserBonita = this.root.$window.html_beautify( salidaDelParser,
{ indent_size:2
} );
console.log("salidaDelParserBonita");
console.log(salidaDelParserBonita);
this.salidaDelTesterEditor.setValue( salidaDelParserBonita );
} catch(error) {
this.gestionarError( error );}
}
},
watch:{ 
},
beforeMount() {
},
mounted() {try {
this.modo = "codigo";
setTimeout( () => {try {
this.entradaDelTesterEditor = CodeMirror.fromTextArea( this.$refs.entrada_del_tester,
{ lineNumbers:true
} );
this.salidaDelTesterEditor = CodeMirror.fromTextArea( this.$refs.salida_del_tester,
{ lineNumbers:true,
readOnly:"nocursor"
} );
} catch(error) {
console.log(error);
throw error;
}

},
0 );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");