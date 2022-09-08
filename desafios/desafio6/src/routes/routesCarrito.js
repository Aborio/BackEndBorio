const { Router } = require('express');
const router = Router();

const products = require('../contenedor')
const carrito = []
router.post('/', (req, res) => {
    const idProducto = products.getById()
    const nombreProducto = req.body.nombre
    if(idProducto === -1){
        return res.status(400).json({msg : `el ${idProducto} no existe`})
    }
    const carrito1 = {
        id: idProducto,
        nombre : nombreProducto
    }
    carrito.push(carrito1);
    res.status(201).json(curso);
})

module.exports = router;