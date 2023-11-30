#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const files = process.argv;
const [nodebin, uiscriptbin, output_dir] = files;
if(typeof output_dir !== "string") {
    throw new Error("An argument is required to dump the files to");
}
const output_dir_path = path.resolve(process.cwd(), output_dir);
try {
    fs.mkdirSync(output_dir_path);
} catch (error) {
    
}
fs.copyFileSync(__dirname + "/../docs/lib/ui-script/ui-script.js", output_dir_path + "/ui-script.js");
fs.copyFileSync(__dirname + "/../docs/lib/ui-script/ui-script.css", output_dir_path + "/ui-script.css");
fs.copyFileSync(__dirname + "/../docs/lib/ui-script/components", output_dir_path + "/components");
