const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/autos',(req,res)=>{
    res.json({mensaje:'recibi una peticion de tipo GET'})
})

app.post('/api/autos',(req,res)=>{
    res.json({mensaje:'recibi una peticion de tipo POST'})
})

const PORT = 3000

const server = app.listen(PORT,()=>{
    console.log(`servidor escuchando en ${PORT}`)
})

server.on("error", error =>console.log(`Error`))