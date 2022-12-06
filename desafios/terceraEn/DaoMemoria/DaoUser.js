import mongoose, { Schema } from "mongoose";
import { cartSchema } from "./DaoCart";
import { v4 as uuidv4 } from 'uuid';
import ContenedorMongoDb from "../contenedorMongo.js";



const userSchema = new Schema({
    id : {type: String, required: true},
    email: {type:String, required:true},
    nombre: {type:String, required:true},
    contraseña: {type:String, required: true},
    direccion: {type:String, requiered: true},
    admin : {type: Boolean, required: true},
    foto: {type : String, required:true},
    cart: [cartSchema]
})

export class UserDato{
    constructor(userSchema){
        this.userSchema = mongoose.model('users', userSchema)
    }

    async registrar ({usuario, password}){
        const nuevoUsuario = new UserDato({
            id: uuidv4(),
            admin: false,
            nombre,
            password,
        })
        try {
            await nuevoUsuario.save()
            return nuevoUsuario
            
        } catch (error) {
            throw error
        }
    }
}