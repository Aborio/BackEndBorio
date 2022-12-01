import mongoose, { Schema } from "mongoose";

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
            const cart = await this.findById(id)
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

    async findByUserId (userId){
        try {
            const usuExis = Boolean(userDAO.findById(userId))
            if(!usuExis) throw ("usuario no existe")
        } catch (error) {
            return undefined
        }
    }


}