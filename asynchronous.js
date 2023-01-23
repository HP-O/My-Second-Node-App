const fs = require("fs");
// fs.readFile(path, cb)

fs.readFile("textbook.txt", function (err, data) {
  if (err) throw new Error(err);
  else {
    console.log(data.toString());
  }
}),
  console.log("program ended!");
