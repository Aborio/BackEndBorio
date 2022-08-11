const express = require(`express`)
const router = express.Router();

router.get(`/autos/getAll`,(req,res)=>{
    res.send({msg:`recibimos la peticion de tipo GET`})
})

router.post(`/autos/update`, ({body},res)=>{
    console.log(body)
    res.send({msg: `tengo el update`, name:body.name})
})
module.exports = router