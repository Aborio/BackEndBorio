const express = require('express')
const app = express();
const fs = require('fs')

const mostrarInfo = () => {
    let info = fs.readFileSync('productos.txt','utf-8')
    return JSON.parse(info)
}

const mostrarRandom = () =>{
    let info = mostrarInfo()
    let obj = [info[0].id,info[1].id,info[2].id,info[3].id,info[4].id,info[5].id,info[6].id]
    return Math.floor(Math.random()*obj.length)

    
}

app.get('/productos', (req,res)=>{
    res.send(mostrarInfo())
})



const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`servidor escuchando en ${PORT}`)
})

server.on("error", error =>console.log(`Error`))


console.log(mostrarRandom())