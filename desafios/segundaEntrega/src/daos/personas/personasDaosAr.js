import ContenedorArchivo from "../../contenedores/ContenedorArchivos.js"

class PersonasDaoArchivo extends ContenedorArchivo {

    constructor(rutaDir) {
        super(`${rutaDir}/personas.json`)
    }
}

export default PersonasDaoArchivo