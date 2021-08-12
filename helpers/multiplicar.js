const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 5, listar = false, hasta = 12) => {
  try {
    let output = "";
    let ouputConsole = "";
    for (let i = 0; i <= hasta; i++) {
      output += `${base}${" x " + i} = ${base * i}\n`;
      ouputConsole += `${base}${" x ".green + i} = ${base * i}\n`;
    }
    fs.writeFileSync(`./archivos/tabla-${base}.txt`, output);
    if (listar) {
      console.log("=================".green);
      console.log("  Tabla del: ".green + colors.blue(base));
      console.log("=================".green);
      console.log(ouputConsole);
    }
    return `tabla-${base} creada con éxito`.rainbow;
  } catch (error) {
    return `Error al crear tabla : ` + error;
  }
};

module.exports = createFile;
