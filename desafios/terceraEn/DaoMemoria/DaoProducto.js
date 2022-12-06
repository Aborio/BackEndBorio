import { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import ContenedorMongoDb from "../contenedorMongo.js";

const cont = ContenedorMongoDb

const productoSchema = new Schema({
    id : {type: String, required: true},
    nombre : {type: String, required: true},
    foto_url: {type: String, required: false},
    precio : {type: String, required:true},
})

export default class ProductosDAO{
    constructor(productoSchema){
        this.productoSchema = mongoose.model('productos', productoSchema)
    }

    async actualizarProducto (id , nuevoDato){
        const product = await cont.findById(id)
        const actProducto = {...product,...nuevoDato}
        await cont.updateById(id,actProducto)
        return actProducto

    }
}