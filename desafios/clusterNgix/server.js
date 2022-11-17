
import express from 'express'
import cluster from 'cluster' 
import os from 'os'
import compression from 'compression'
import logger from './logger.js'

const numCPUs = os.cpus().length


if (cluster.isPrimary) {
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}

else {

    const app = express()

    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/info', (req, res) => {
        res.send(`PUERTO: ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.get('/infoComp', compression(), (req, res) => {
        res.send(`PUERTO: ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.get('/sumar', (req, res) => {
        const n1 = parseInt(req.query.n1)
        const n2 = parseInt(req.query.n2)
      
        if (isNaN(n1) || isNaN(n2)) {
          logger.error('Parámetros incorrectos para la suma')
          return res.send('Parámetros de entrada no válidos')
        }
      
        logger.info(`Parámetros ${n1} y ${n2} correctos para la suma`)
        res.send(`La suma de ${n1} más ${n2} es ${n1 + n2}`)
    })
    
    app.all('*', (req, res) => {
        const { url, method } = req
        logger.warn(`Ruta ${method} ${url} no implementada`)
        res.send(`Ruta ${method} ${url} no está implementada`)
    })

    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}
