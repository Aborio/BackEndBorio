import express from 'express'
import MongoStore from 'connect-mongo'
import logger from './logger.js'
import Usuario from './controller.js'


/* ------------------------------------------------*/
/*           Persistencia por MongoDB              */
/* ------------------------------------------------*/
const mongoUrl = 'mongodb+srv://aguborio18:321654@cluster0.u12lxve.mongodb.net/?retryWrites=true&w=majority'
const store = MongoStore.create({ mongoUrl, ttl: 15 })
/* ------------------------------------------------*/

const app = express()
app.use(express.json())

app.post('/registrar', (req, res) => {
    const datosUsuario = req.body
    const usuario = new Usuario(datosUsuario)
    res.send(usuario)
})

app.post('/log', (req, res) => {
    res.send({msg:"hola"})
})

app.all('*', (req, res) => {
    const { url, method } = req
    logger.warn(`Ruta ${method} ${url} no implementada`)
    res.send(`Ruta ${method} ${url} no está implementada`)
})



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})