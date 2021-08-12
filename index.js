const createFile = require("./helpers/multiplicar");
const argv = require("./config/yargs");

createFile(argv.b, argv.l ,argv.h).then(console.log).catch(console.error);
