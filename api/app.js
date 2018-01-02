/* importar o módulo do framework express */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var Gpio = require('onoff').Gpio,
  lamps = [new Gpio(27, 'out')],
  pir = new Gpio(17, 'in', 'both');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.locals.lamps = lamps;
app.locals.pir = pir;

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('./routes')
	.then('./controllers')
	.into(app);

app.listen(3000, function(){
	console.log('Servidor online');
});

/* exportar o objeto app */
module.exports = app;
