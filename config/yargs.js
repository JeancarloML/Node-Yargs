const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 12,
    describe: "Limite de tabla generada",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla creada",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw new Error("base debe ser un número");
    }
    return true;
  }).argv;

module.exports = argv;
