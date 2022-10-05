import { Router } from "express";
import apiProductos from '../api/apiProductos.js'

const apiProducto = new apiProductos()

const router = Router()

router.post('/productos-test', async (req,res,next)=>{

    try{
        res.json(await apiProductos.popular(req.query.cant))
    }catch(err){
        next(err)
    }
})


export default router