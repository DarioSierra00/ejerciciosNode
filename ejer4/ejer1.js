/*Creación de un servidor HTTP:
Crea un servidor HTTP utilizando el módulo http.
El servidor debe responder a todas las solicitudes con un mensaje "¡Hola desde mi servidor!" y un estado HTTP 200.
Escucha en el puerto 3000 y muestra un mensaje en la consola indicando que el servidor está en funcionamiento. */
const http = require("http");

const servidor = http.createServer(function(req, res, next) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>¡Hola desde mi servidor!</h1>");
    return res.end();
});

servidor.listen(3000, function() {
    console.log("En funcionamiento");
});