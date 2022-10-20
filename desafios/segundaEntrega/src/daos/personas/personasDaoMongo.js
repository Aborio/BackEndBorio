import ContenedorMongoDb from "../../contenedores/ContenedorMongo.js"

class PersonasDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('personas', {
            nombre: { type: String, required: true },
            apellido: { type: Number, required: true },
            edad: { type: Number, required: true },
        })
    }
}

export default PersonasDaoMongoDb