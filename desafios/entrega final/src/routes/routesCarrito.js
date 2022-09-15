const { Router } = require('express');
const router = Router();

const products = require('../contenedor')
const creadID = () =>{
    const letras = 'abcdefghijklmnopqrstuvwxyz'
    const letrasAzar = []
    for (let i = 0;i < 5 ;i++) {
    const indiceLetras = Math.floor(Math.random() * letras.length)
    letrasAzar.push(letras[indiceLetras])
    }
    const id = `${Date.now()}-${letrasAzar.join('')}`
    return id
}

const carrito = []
router.post('/', (req, res) => {
    const idProducto = products.save(creadID)
    console.log(idProducto)
    const carrito1 = {
        ID: idProducto,
        Cartera: idProducto      
    }
    // res.status(201).json(carrito);
    res.send(carrito)
})

router.delete('/id', (req,res)=>{
    id = carrito
    products.deleteById(id)
    res.send({msg:"carrito eliminado"})
}) //practicamente si no me genera el ID, como puedo seleccionar el delelte. e lget. el post. ext.

router.get('/:id/productos', (req,res) =>{
    res.send(carrito)
})

router.post('/:id/productos',(req,res)=>{
    const producto = products.getById(id)
    carrito.push(producto)
    res.send({msg:`se agrego ${producto} al carrito`})
})

router.delete('/:id/productos/:id_prod', (res,req)=>{
    res.send({msg:"eliminado"})
}) //este no puedo hacerlo dar sin tener un ID de carrito como te dije en la call

module.exports = router;