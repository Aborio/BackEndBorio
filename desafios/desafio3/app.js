const express = require('express')
const app = express();
const fs = require('fs');
const Contenedor = require('./contenedor');
const productos = new Contenedor('./productos.txt')

app.get('/productos', (req,res)=>{
    productos.getAll()
    .then((data)=>{
        res.send(data);
    })
    
})
app.get('/productosRandom', (req,res)=>{
    productos.mostrarRandom()
    .then((data)=>{
        res.send(data);
    })
})

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`servidor escuchando en ${PORT}`)
})

server.on("error", error =>console.log(`Error`))
