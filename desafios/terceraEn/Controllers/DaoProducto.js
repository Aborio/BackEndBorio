import { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

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
        const product = await this.findById(id)
        const actProducto = {...product,...nuevoDato}
        await this.updateById(id,actProducto)
        return actProducto

    }
}