
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 UIScript | Tester del lenguaje</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/components/xdialogport/xdialogport.css\" />\n\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/beautify/beautify-html.js\"></script>\n    <script src=\"lib/ui-script/ui-script.js\"></script>\n    <script src=\"lib/ui-script/components/xdialogport/xdialogport.js\"></script>\n    <script src=\"lib/ui-script/components/xdialogport/xdialogcurrent.js\"></script>\n    \n    <style>\n      h5 {\n        margin: 0;\n        padding: 12px;\n        background-color: #333;\n        color: white;\n        font-size: 10px;\n        font-family: Arial;\n      }\n      .CodeMirror.cm-s-default{\n        font-size: 9px;\n        resize: vertical;\n      }\n      .normal {\n        font-family: Arial;\n        font-size: 10px;\n      }\n      table.tabla_de_titulo {\n        width: 100%;\n      }\n      table.tabla_de_titulo td {\n\n      }\n      td.celda_de_titulo {\n        width: 100%;\n      }\n      .display_block {\n        display: block;\n      }\n      .display_none {\n        display: none;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

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
      !button [v-on:click="() => { data.is_showing_dialog = true; $forceUpdate(true); }"] {{ Entrar }}
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

 !xpage [title="Página de inicio"] {
  !xwindow {
   !xwindowtitle {{ Inicio }}
   !xwindowbody {
    !xtitle {{ Inicio }}
    !xlayout {
     !xparagraph {{ Las secciones principales son: }}
     !ul {
      !li {
       !xlink [href="#/"] {{ Inicio }}
      }
      !li {
       !xlink [href="#/"] {{ Inicio }}
      }
      !li {
       !xlink [href="#/"] {{ Inicio }}
      }
     }
    }
   }
   !xwindowfooter {
    !xwindowfooteritem {{ Estás en la página de «Inicio» }}
   }
  }
 }
 
 !div [v-if="data.is_showing_dialog"] {
  !xstatic {
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
      !button [v-on:click="() => { data.is_showing_dialog = false; $forceUpdate(true); }"] {{ Cerrar }}
     }
    }
    !xwindowfooter {
     !xwindowfooteritem {{ Pie de ventana }}
    }
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
const salidaDelParser = uiscript_api.parser.parse( uiScriptContenido );
this.salidaDelTester = Vue.component( "xtester",
{ template:salidaDelParser,
props:{ root:{ type:Object,
default:() => {try {
return this.root;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data:function() {try {
return { data:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

}
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
 + "    <xdialogport></xdialogport>"
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