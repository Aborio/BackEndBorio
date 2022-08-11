const express = require('express')
const app = express();
const fs = require('fs')

const mostrarInfo = () => {
    let info = fs.readFileSync('productos.txt','utf-8')
    return JSON.parse(info)
}

const mostrarRandom = () =>{
    let info = mostrarInfo()
    let obj = info
    return Math.floor(Math.random()*obj.length)
}

app.get('/productos', (req,res)=>{
    res.send(mostrarInfo())
})
app.get('/productosRandom', (req,res)=>{
    
    res.send({dato : mostrarRandom()})
})

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`servidor escuchando en ${PORT}`)
})

server.on("error", error =>console.log(`Error`))
