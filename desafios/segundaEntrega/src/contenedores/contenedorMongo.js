import mongoose, { model } from 'mongoose'
import config from '../config.js'

class ContenedorMongoDb {
    

    constructor(nombreColeccion,esquema) {
        this.elementos = mongoose.model(nombreColeccion,mongoose.Schema(esquema))
    }

    async buscarSchemaID(nombreColeccion, id) {
        const nombreColeccion = this.elementos
        const dato = nombreColeccion.find().select({_id:id,__v:0})
        return dato
    }

    async buscarTodas(){
        return this.elementos.find().lean()
    }

    async crearSchema(Coleccion) {
        const dato = this.elementos
        const dato1 = new dato(Coleccion)
        dato1.save()
        return dato1
    }


    async borrarAll() {
        return this.elementos.deleteMany({})
    }
}

export default ContenedorMongoDb
