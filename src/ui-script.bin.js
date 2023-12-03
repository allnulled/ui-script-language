#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const uiscript_parser = require("ui-script.parser.js");


const files = process.argv;
const [nodebin, uiscriptbin] = files;

const wrapAsComponent = function(template) {
    let js = "";
    js += "Vue.component("
}

for(let index=0; index<files.length; index++) {
  const file = files[index];
  const filecontents = fs.readFileSync(file).toString();
  const filename = file.replace(".uis", "");
  const filedestination = file.replace(".uis", ".js");
  const filecontentsparsed = uiscript_parser.parse(filecontents);
  const fileoutput = wrapAsComponent(filecontentsparsed);
}