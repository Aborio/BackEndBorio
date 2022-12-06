import {  Router } from "express";
import CartDAO from "../DaoMemoria/DaoCart.js";
import ProductosDAO from "../DaoMemoria/DaoProducto.js";
const prodDAO = ProductosDAO
const cartDAO = CartDAO

const router = Router()

router.get('/:id/products', (req,res)=>{
    const { id } = req.params
    const cartProductos = (cartDAO.findById(id)).cartProductos
    res.status(200).send({ data: cartProductos })
    res.status(404).send({ error: 'cart not found' })
    return cartProductos
})

router.post('/:id/products/id_prod', (req,res)=>{
    const {id_user, id_prod } = req.params
    const product = ProductosDAO.findById(id_prod)
    const updatCart = cartDAO.agregarProducto(id_user, product.id)
    return updatCart
})

router.delete('/:user_id',(req,res)=>{
    const {user_id} = req.params
    const cart = cartDAO.vaciarCarro(user_id)
})