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
try {
    fs.mkdirSync(output_dir_path + "/lib");
} catch (error) {
    
}
fs.copySync(__dirname + "/../docs/lib/ui-script", output_dir_path + "/lib/ui-script");
fs.copySync(__dirname + "/../docs/lib/calo", output_dir_path + "/lib/calo");
fs.copySync(__dirname + "/../docs/lib/win7", output_dir_path + "/lib/win7");
