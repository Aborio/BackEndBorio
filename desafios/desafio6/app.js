const express = require('express');
const handlebars = require('express-handlebars').engine;
const app = express();
const routerProduct = require('./src/routes/routeProducts.js');
const routerCarrito = require('./src/routes/routesCarrito.js');
const handlebarsConig = {
  defaultLayout: 'index.handlebars',
};
app.engine('handlebars', handlebars(handlebarsConig));
app.set('view engine', '.handlebars');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routerProduct);
app.use('/carrito', routerCarrito);
module.exports = app