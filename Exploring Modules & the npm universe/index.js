/** @format */

import { franc } from "franc";
import langs from "langs";
import colors from "colors";

function printLang(langCode) {
     try {
          const whichLang = langs.where("3", langCode);
          console.log(`Languge is ${whichLang.name.rainbow}`);
     } catch (e) {
          console.log("Languge not defined".red);
     }
}

const input = process.argv[2];
if (input === undefined) console.log("Please give an input".red);
else {
     const langCode = franc(input);
     langCode === "und"
          ? console.log("Give Bigger Input".red)
          : printLang(langCode);
}
