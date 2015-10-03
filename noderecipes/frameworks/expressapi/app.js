var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

var products = [
    {
      id: 0,
      name: 'watch',
      description: 'tell time with this amazing watch',
      price: 30.00
    },
    {
      id: 1,
      name: 'sandals',
      description: 'walk in comfort with these sansdals',
      price: 10.00
    },
    {
      id: 2,
      name: 'watch',
      description: 'protect your eyes!',
      price: 25.00
    }
];

app.get('./routes');

app.get('/products', function(req, res) {
  res.json(products);
});

app.get('/products/:id', function(req, res) {
  if (req.params.id > (products.length - 1) || req.params.id < 0) {
    res.statusCode = 404;
    res.end('NotFound');
  }
  res.json(products[req.params.id]);
});

app.post('/products', function(req, res) {
  if (typeof req.body.name === 'undefined') {
    res.statusCode = 400;
    res.end('a product name is required');
  }
  products.push(req.body);
  res.send(req.body);
});

app.put('/products/:id', function(req, res) {
  if (req.params.id > (products.length - 1) || req.params.id < 0) {
    res.statusCode = 404;
    res.end('not found');
  }
  products[req.params.id] = req.body;
  res.send(req.body);
});

app.delete('/products/:id', function(req, res) {
  if (req.params.id > (products.length - 1) || req.params.id < 0) {
    res.statusCode = 400;
    res.end('not found for that id');
  }
  products.splice(req.params.id, 1);
  res.json(products);
});

module.exports = app;




