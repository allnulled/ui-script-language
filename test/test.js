const fs = require("fs");
const path = require("path");
const UIScriptParser = require(__dirname + "/../src/ui-script.parser.js");
const ejemplos = fs.readdirSync(__dirname + "/ejemplos");
for(let i=0; i<ejemplos.length; i++) {
    const ejemplo = ejemplos[i];
    const ruta = path.resolve(__dirname + "/ejemplos/" + ejemplo);
    const contenido = fs.readFileSync(ruta).toString();
    const contenidoHtml = UIScriptParser.parse(contenido);
    console.log(contenidoHtml);
    const rutaDestino = path.resolve(__dirname + "/salidas/" + ejemplo + ".html");
    fs.writeFileSync(rutaDestino, contenidoHtml, "utf8");
}
