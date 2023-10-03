/*Actualización de un archivo:
Abre el archivo nuevoArchivo.txt en modo de escritura y añade el texto "¡Esto es genial!" al contenido existente. 
*/

const fs = require("fs");

fs.appendFile("nuevoArchivo.txt",'¡Esto es genial!',(error) => {
    if(error) throw error;
    else{
        fs.readFileSync("nuevoArchivo.txt", "utf-8")
    }
})