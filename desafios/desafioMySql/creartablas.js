import { clienteSql } from "./clientesql.js";

clienteSql.schema.hasTable('productos')
    .then(exists => {
        if(!exists){
        clienteSql.schema.createTable('productos', tabla =>{
            tabla.increments('id'),
            tabla.string('nombre')
        })
        .then(()=>{
            console.log("tabla creada")
        })
    } else{
        console.log("tabla productos ya exste")
    }
    })
    .finally(()=>{
        clienteSql.destroy
    })


    clienteSql.schema.hasTable('mensajes')
    .then(exists => {
        if(!exists){
        clienteSql.schema.createTable('mensajes', tabla =>{
            tabla.increments('id'),
            tabla.string('nombre'),
            tabla.string('mensajes')
        })
        .then(()=>{
            console.log("tabla creada")
        })
    } else{
        console.log("tabla mensaje ya exste")
    }
    })
    .finally(()=>{
        clienteSql.destroy
    })
