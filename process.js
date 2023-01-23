// process.on("exit", (code) => {
//   console.log("The file has finished running your code");
//   console.log("this code was run from", process.cwd());
//   console.log('present working directory' process.env.PWD);
//   console.log('environment variables' process.env);

// });

// process.on("beforeExit", (code) => {
//   console.log("The is befoer the file stops running!!!");
// });

// console.log("hello from the process file");

// console.log("I should show before exit");

// console.log(process.argv);
// console.log(process.pid);
// console.log(process.platform);
// console.log(process.arch);
// console.log(process.version);
process.stdout.write(process.version + "\n" + "another thing");
console.log(process.uptime);
