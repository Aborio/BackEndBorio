import express from 'express'

import session from './src/middle/session.js'

import { usuariosRouter } from './src/router/usuariosRouter.js'
import authRouter from './src/router/datosRouter.js'
import datosRouter from './src/router/datosRouter.js'
import errorHandler from './src/middle/errorha.js'

const app = express()

app.use(express.json())

app.use(session)



app.use('/api/usuarios', usuariosRouter)
app.use('/auth', authRouter)
app.use('/api/datos', datosRouter)
app.use(errorHandler)


const server = app.listen(8080, () => {
    console.log(`escuchando en puerto ${server.address().port} `)
})