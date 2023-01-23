const events = require("events");

const eventsEmitter = new events.EventEmitter();

eventsEmitter.on("entering-class", function handler(data) {
  console.log("someone entered the class", data);
});

eventsEmitter.emit("entering-class", { name: "Hauwa" });
