import { Schema } from "mongoose";
import { cartSchema } from "./DaoCart";


const userSchema = new Schema({
    email: {type:String, required:true},
    nombre: {type:String, required:true},
    contraseña: {type:String, required: true},
    direccion: {type:String, requiered: true},
    foto: {type : String, required:true},
    cart: [cartSchema]
})