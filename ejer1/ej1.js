const fs = require("fs");

fs.writeFile("nuevoArchivo.txt","Hola mundo", (error) => {
    if(error) throw error;
    console.log("Archivo creado correctamente")
});

