
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 UIScript | Tester del lenguaje</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-styles.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xbreadcrumb/xbreadcrumb.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xpage/xpage.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlink/xlink.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xform/xform.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xformfield/xformfield.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xjumbotron/xjumbotron.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlabel/xlabel.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xsubtitle/xsubtitle.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtitle/xtitle.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindow/xwindow.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowtitle/xwindowtitle.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowbody/xwindowbody.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowfooter/xwindowfooter.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xpanel/xpanel.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xbutton/xbutton.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlayout/xlayout.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xlayoutnopaddingtop/xlayoutnopaddingtop.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xwindowfooteritem/xwindowfooteritem.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script-components/xtester/xtester.css\" />\n\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/beautify/beautify-html.js\"></script>\n    <script src=\"lib/ui-script/ui-script-parser.js\"></script>\n    <script src=\"lib/ui-script/ui-script-api.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xpage/xpage.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlink/xlink.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xbreadcrumb/xbreadcrumb.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xform/xform.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xformfield/xformfield.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xjumbotron/xjumbotron.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlabel/xlabel.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xsubtitle/xsubtitle.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtitle/xtitle.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindow/xwindow.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowtitle/xwindowtitle.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowbody/xwindowbody.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowfooter/xwindowfooter.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xpanel/xpanel.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xbutton/xbutton.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlayout/xlayout.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xlayoutnopaddingtop/xlayoutnopaddingtop.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xwindowfooteritem/xwindowfooteritem.js\"></script>\n    <script src=\"lib/ui-script/ui-script-components/xtester/xtester.js\"></script>\n    \n    <style>\n      h5 {\n        margin: 0;\n        padding: 12px;\n        background-color: #333;\n        color: white;\n        font-size: 10px;\n        font-family: Arial;\n      }\n      .CodeMirror.cm-s-default{\n        font-size: 9px;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>UIScript | Tester del lenguaje</h5>"
 + "    <div>"
 + "      <textarea ref=\"entrada_del_tester\" v-model=\"entradaDelTester\"></textarea>"
 + "      <button style=\"width: 100%;\" v-on:click=\"validarSintaxis\">Validar</button>"
 + "      <textarea ref=\"salida_del_tester\" v-model=\"salidaDelTester\" disabled=\"true\"></textarea>"
 + "      <div v-if=\"error\" v-on:click=\"limpiarError\">"
 + "        {{ error }}"
 + "      </div>"
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
return { idTesterTimeout:undefined,
entradaDelTester:`

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
methods:{ limpiarError() {try {
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