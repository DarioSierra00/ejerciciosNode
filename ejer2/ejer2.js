 /*Unión de rutas:
Crea variables ruta1, ruta2, ruta3, ruta4 que contengan las cadenas "/first", "second", "something" y "then", respectivamente. */
const path = require("path");


let ruta1 = "/first";
let ruta2 = "second";
let ruta3 = "something";
let ruta4 = "then";

//Utiliza el módulo path para unir estas rutas en una sola y muestra el resultado por pantalla.
console.log(path.join(ruta1,ruta2,ruta3,ruta4))