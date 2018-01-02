/* importar o módulo do framework express */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(expressSession({
	secret : 'secret',
	resave : false,
	saveUninitialized : false
}));

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
