import { obtenerUsuarios } from '../database/usuarioPersi.js'

export const getUsuariosController = (req, res) => {
    const usuarios = obtenerUsuarios()
    res.json(usuarios)
}