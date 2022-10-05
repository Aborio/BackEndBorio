import express from 'express'
import { clienteSql, clienteSqlsq } from './clientesql.js'
import {faker } from '@faker-js/faker'
faker.local = "es"

let id = 1
const nextId = () =>{
    return id++
}

const generarAzar = () =>{
    return {
        id,
        nombre: faker.name.firstName(),
        precio:faker.finance.amount(),
        imagen:faker.image.business()
    }
}

const agregarAzar = () =>{
    const productos = []
    for (let i = 0; i < 5; i++){
        productos.push(generarAzar(nextId))
    }
    return productos
}
const app = express()
app.use(express.json())
//Estos puede ser separados en una carpeta route y generar los productos ahi
app.post('api/productos',async (req,res) =>{
    const productos = await clienteSql.insert({nombre: req.body, edad: req.body}).into('productos')
    res.json(persona)
} )

app.get('/api/productos/:id', async (req,res) =>{
    const persona = await clienteSql.select('*').from('productos').where({id:req.params.id}).first()
    res.json(persona)
})

app.get('/api/productos', async (req,res) =>{
    const personas = await clienteSql.select('*').from('productos')
    res.json(personas)
})

//----- agregado nuevo desafio-----//

app.get('/api/productos-test', async (req,res)=>{
    res.json(generarAzar())
})


// hasta aca productos


//aca comienza mensajes

app.post('api/mensajes',async (req,res) =>{
    const mensajes = await clienteSqlsq.insert({nombre: req.body, mensaje: req.body}).into('mensajes')
    res.json(mensajes)
} )

app.get('/api/mensajes/:id', async (req,res) =>{
    const mensajes = await clienteSqlsq.select('*').from('mensajes').where({id:req.params.id}).first()
    res.json(mensajes)
})

app.get('/api/mensajes', async (req,res) =>{
    const mensajes = await clienteSqlsq.select('*').from('mensajes')
    res.json(mensajes)
})

//hasta aca mensajes



app.listen(8080, ()=>{
    console.log("cuchando puerto 8080")
})