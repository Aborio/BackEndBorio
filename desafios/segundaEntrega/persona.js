import mongoose from "mongoose";
const personasCollection = "personas";
const personasSchema = new mongoose.Schema({
    nombre : {type: String, requiere: true, max:100},
    apellido : {type : String, require: true, max :100},
    email : {type: String, require: true, max: 100},
    usuario: {tpye: String, require:true , max: 100},
    password: {type: Number, requiere: true}
})

export const personas = mongoose.model(personasCollection,personasSchema)