import { v4 as uuidv4 } from 'uuid';


let productos = []

class Usuario {
    constructor({ id = uuidv4(), username, password, direccion, email, idCarrito = {id, productos}}) {
        if (!username) {
            throw ('falta el campo obligatorio "username"')
        }

        if (!password) {
            throw ('falta el campo obligatorio "password"')
        }

        if (!direccion) {
            throw ('falta el campo obligatorio "direccion"')
        }

        this.id = id
        this.username = username
        this.password = password
        this.direccion = direccion
        this.email = email
        this.idCarrito = idCarrito
    }
}

export default Usuario