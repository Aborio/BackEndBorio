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
    const idProducto = products.getById(req.body.id)
    
    if(idProducto === -1){
        return res.status(400).json({msg : `el ${idProducto} no existe`})
    }
    const carrito1 = {
        ID: 1,
        Cartera: idProducto      
    }
    carrito.push(carrito1);
    res.status(201).json(carrito);
})

router.delete //practicamente si no me genera el ID, como puedo seleccionar el delelte. e lget. el post. ext.

router.get

router.post

router.delete

module.exports = router;