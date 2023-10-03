/*Eliminación de un archivo:
Elimina el archivo nuevoArchivo.txt utilizando el módulo fs.
 */

const fs = require("fs");

fs.unlink("nuevoArchivo.txt", (error) => {
    if(error) throw error;
    else{
        console.log("Borrado correctamente!")
    }
})