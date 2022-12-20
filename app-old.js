const http = require("http");

//req es informacion que estoy solicitando, la res es lo que el servidor responde al cliente

http
  .createServer((req, res) => {
    res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
