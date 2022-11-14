let express = require("express");
const PORT = 3001;
let app = express();

/* UTILIZAMOS TODOS LOS METODOS POR SEPARADOS */ 

app.get("/", (req, res, next)=>{
    res.send(`Hola estoy en el metodo ${req.method}`)
});

app.post("/", (req, res, next)=>{
    res.send(`Hola estoy en el metodo ${req.method}`)
});

app.put("/", (req, res, next)=>{
    res.send(`Hola estoy en el metodo ${req.method}`)
});

app.get("/estudiantes", (req, res, next)=>{
    res.send('Estoy en estudiantes')
});


/* Entremos a los metodos GET, POST y PUT utilizando el metodo ALL */
app.all("/", (req, res, next)=>{
    res.send(`Hola estoy en el metodo ${req.method} de Express`)
});







app.listen(PORT, ()=> console.log(`Server ON https//localstore:${PORT}`));

