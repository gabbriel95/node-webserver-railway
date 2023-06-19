const http = require("http");

//req es informacion que estoy solicitando, la res es lo que el servidor responde al cliente

http
  .createServer((request, response) => {
    // console.log(req);

    response.writeHead(200, { "Content-Type": "application/json" });

    const persona = {
      id: 1,
      nombre: "Fernmando",
    };

    response.write(JSON.stringify(persona));
    response.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
