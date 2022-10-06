import express, {json} from 'express'
import {faker } from '@faker-js/faker'
import productosRouter from './router/productos.js'
import { engine } from 'express-handlebars'
import {Server} from "socket.io"
const handlebars = engine()
const app = express()
let messages = []
console.log(messages)
const handlebarsConfig = {
    defaultLayout : 'main.handlebars',
}
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({extended:true }))
app.use(express.json())
app.use('/api', productosRouter)
app.get('/index',(req,res)=>{
    res.render('inde.handlebars')
})

const server = app.listen(8080, ()=>{
    console.log("cuchando puerto 8080")
})
const io = new Server(server);
server.on('error', (error) => console.error(`Error en Servidor ${error}`))

server.on('error',(err)=>{
    console.log(err);
  })

  io.on('connection',(socket)=>{
    console.log('se conecto un cliente');
  })