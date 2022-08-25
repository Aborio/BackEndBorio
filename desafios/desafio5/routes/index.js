var express = require('express');
var router = express.Router();
let listaProductos = [{titles: "tv", price:200, url:"https://www.lg.com/uk/images/tvs/MD05809745/gallery/49_43LJ51_D_Desktop_02.jpg"},
]
/* GET home page. */

router.get('/mostrarProductos', function(req, res, next) {
  res.render('productos', { productos : listaProductos });
});

router.get('/agregarProductos', function(req, res, next) {
  res.render('agregarProductos');
});

router.post('/', (req,res)=>{
  let dato = req.body;
  listaProductos=[...listaProductos,dato]
  // res.redirect('/productos/agregarProductos')
  res.send(dato)
})
module.exports = router;
