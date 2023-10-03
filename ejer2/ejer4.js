/*Extensión de archivo:
Crea una variable nombreArchivo que contenga el nombre de un archivo con extensión, por ejemplo, "main.js".

Utiliza el módulo path para extraer y mostrar la extensión del archivo en la consola. */

const path = require("path");

let nombreArchivo = "main.js";

console.log(path.extname(nombreArchivo))