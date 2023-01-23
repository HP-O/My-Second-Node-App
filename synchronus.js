const fs = require("fs");

const textBookContent = fs.readFileSync("textbook.txt");
console.log(textBookContent);
console.log("program ended!");
