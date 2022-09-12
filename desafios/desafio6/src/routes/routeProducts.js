
const { Router } = require('express');
const router = Router();
const soloAdmins = require('middlewares.js')

const products = require('../contenedor')

router.get('/', (req, res) => {
  res.render('form.handlebars',{ products: products.getAll() });
});

router.get('/productos', (req, res) => {
  res.render('products.handlebars', { products: products.getAll() });
});

router.post('/productos',soloAdmins, (req, res) => {
  products.save(req.body)
  res.redirect('/productos');
});

router.put('/:id',soloAdmins, (req,res)=>{
  products.updateProduct(id,obj)
  res.send({msg: "realizado con exito"})
})

router.delete('/:id',soloAdmins, (req,res)=>{
  products.deleteById(id)
  res.send({msg : "producto eliminado"})
})

module.exports = router;