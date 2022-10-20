import { Router } from 'express'

import { requiereAutenticacion } from '../middle/auth.js'

const datosRouter = new Router()

datosRouter.get('/', requiereAutenticacion)

export default datosRouter