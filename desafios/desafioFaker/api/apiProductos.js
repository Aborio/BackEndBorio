import ContenedorMemoria  from "../contenedores/contenedorMemoria.js";
import { generarProducto } from "../utils/generadorProducto.js";
import { generarId } from "../utils/generadorId.js";

class apiProductos extends ContenedorMemoria{
    constructor(){super()}

    popular(cant = 5){
        const nuevos = []
        for (let i = 0; i<cant;i++){
            const nuevoProducto = generarProducto(generarId())
            const guardado = this.guardar(nuevoProducto)
            nuevos.push(guardado)
        }
        return nuevos
    }
}

export default apiProductos