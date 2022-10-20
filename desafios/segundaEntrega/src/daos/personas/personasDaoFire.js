import ContenedorFirebase from "../../contenedores/ContenedorFire.js"

class PersonasDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('personas')
    }
}

export default PersonasDaoFirebase