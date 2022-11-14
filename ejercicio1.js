/*

SERVIDOR EN NODE

Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
Entre las 13 y las 19 hs será 'Buenas tardes!'. 
De 20 a 5 hs será 'Buenas noches!'.

Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.

*/

const http = require("http");
const PORT = 8080;
let moment = require("moment");

const server = http.createServer((request, response)=>{
    let hora = moment().hour();
    let mensaje =  "Buenas Noches"; // SI NO ESTA ENTRE LOS 2 PARAMETROS ENVIADOS, SALDRA BUENAS NOCHES
    if (hora >= 6 && hora <= 12) mensaje = "Buenos Dias"
    if (hora >= 13 && hora <= 19) mensaje = "Buenos Tardes"
    
    response.end(`${mensaje}`)
});

let connectedServer = server.listen(PORT, ()=>{
    console.log(`Server ON http://localhost:${PORT}`);
});

connectedServer.on("Error", error => console.log(error));