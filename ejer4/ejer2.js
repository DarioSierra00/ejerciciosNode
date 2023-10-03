/*Manipulación de solicitudes HTTP:
Modifica el servidor HTTP creado en el ejercicio anterior para que, en lugar de una respuesta estática, muestre la URL de la solicitud en la respuesta.

Cuando se accede a http://localhost:3000/hola, la respuesta debe ser "¡Hola desde mi servidor! URL: /hola".
Cuando se accede a http://localhost:3000/adios, la respuesta debe ser "¡Hola desde mi servidor! URL: /adios". */

const http = require('http');

const servidor = http.createServer((req, res) => {
  const url = req.url;

  let responseText = '';
  if (url === '/hola') {
    responseText = '¡Hola desde mi servidor! URL: /hola';
  } else if (url === '/adios') {
    responseText = '¡Hola desde mi servidor! URL: /adios';
  } else {
    responseText = '¡Hola desde mi servidor!';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(responseText);
});

const port = 3000;
servidor.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});