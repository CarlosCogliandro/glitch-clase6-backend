
const http = require('http');
const PORT = 3001;

const server = http.createServer((request, response)=>{
    response.end("Hola Coders!")
});

let connectedServer = server.listen(PORT, ()=>{
    console.log(`Server ON http://localhost:${PORT}`);
});

connectedServer.on("Error", error => console.log(error));

