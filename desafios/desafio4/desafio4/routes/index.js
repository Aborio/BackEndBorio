var express = require('express');
var router = express.Router();
const Contenedor = require('../contenedor')
const data = new Contenedor()

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/productos', (req, res) =>{
  res.send({data:data.getAll()});
});

router.get('/productos/:id',(req, res) => {
  let obj = data.getById(req.params.id)
  if(obj.length == 0){
    res.send('no hay producto')
  }else{
    res.send({ data:obj });}
});

router.post('/productos',({body}, res) => {
  data.agregarUno(body)
  res.send({ datos : body });
});

router.put('/productos/:id',(req, res) => {
  let id = req.params.id
  res.send({ datos:req.body });
});

router.delete('/productos/:id',(req, res) =>{
  let newData = data.deleteById(req.params.id)
  res.send({datos: newData});
});
module.exports = router;
