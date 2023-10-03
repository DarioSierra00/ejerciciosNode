/*Lectura de un archivo:
Lee el contenido del archivo nuevoArchivo.txt que creaste en el ejercicio anterior utilizando el módulo fs. 
*/

const fs = require("fs");

fs.readFile("nuevoArchivo.txt", (error,data) => {
    console.log(data.toString());
})