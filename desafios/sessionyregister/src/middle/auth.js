import { crearErrorAutenticacion } from '../models/errores.js'

export function requiereAutenticacion(req, res, next) {
    if (!req.isAuthenticated()) {
        next(crearErrorAutenticacion())
    } else {
        next()
    }
}