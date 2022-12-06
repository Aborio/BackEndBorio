import mongoose, { Schema } from "mongoose";
import ContenedorMongoDb from "../contenedorMongo.js";

const cont1 = ContenedorMongoDb

 export const cartSchema = new Schema({
    id: {type: String, required: true},
    userId : {type: String, required: true},
    productos: {type: [{product_id: String, amount: Number}], required: true}
})

export default class CartDAO{
    constructor(cartSchema){
        this.cartSchema = mongoose.model('cart', cartSchema)
    }

    async encontrarProducto(id, product_id){
        try {
            const cart = await cont1.findById(id)
            if(!cart){
                throw ("error no hay id")
            }
            const pro = cart.productos.findIndex((p)=>p.product_id === product_id)
            return cart.productos.length

        } catch (error) {
            throw (`el error es ${error}`)
        }
    }

    async agregarProducto (userId, product_id){
        const cart = await this.finByUserId(userId)
        if (!cart) {return undefined}
        const productoInCart = await this.encontrarProducto(cart.id, product_id)
        if (productoInCart === -1) {cart.productos.push({product_id, amount: 1})    
        }
        return cart
    }

    async findById (userId){
        try {
            const usuExis = Boolean(userDAO.findById(userId))
            if(!usuExis) throw ("usuario no existe")
        } catch (error) {
            return undefined
        }
    }
    async vaciarCarro(){
        const updateCart = cont1.findById(user_id)
        updateCart.productos = []

        cont1.updateById(updateCart.id, updateCart)
        return updateCart
    }

}