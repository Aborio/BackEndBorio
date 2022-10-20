import { Router } from 'express'
import { getUsuariosController } from '../controladores/crearUsuario.js'

export const usuariosRouter = new Router()

usuariosRouter.get('/', getUsuariosController)