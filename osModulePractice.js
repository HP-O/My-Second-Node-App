const os = require("os");
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.freemem());
// console.log(os.cpus());
console.log(os.uptime() / 60 / 60 + "hrs");
console.log(os.totalmem() / 1000000000);
