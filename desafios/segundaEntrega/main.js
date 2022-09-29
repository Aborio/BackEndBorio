import mongoose, { model } from "mongoose";
import { personas } from "./persona";

const uri = `mongodb://agu:borio@localhost:27017/coderhouse?authSource=admin&w=1`;
await mongoose.connect(uri)



//---------create-------//

const usuario1 = {nombre :"juan", apellido :"carlos", email: "asd@asd", password: 123}
const usuarioSaveModel = new model.personas(usuario1);
let usuarioSave = await usuarioSaveModel.save()


//----------read---------//

let usuarios = await model.personas.find({})
console.log(usuarios)


///------------update---------//


let usuarioUpdate = await model.personas.updateOne({nombre:"juan"},{
    $set: {password: 123123}
})
console.log(usuarioUpdate)

//----------delete--------------//
let usuarioBorrado = await model.personas.deleteOne({nombre:"juan"})
console.log(usuarioBorrado)



