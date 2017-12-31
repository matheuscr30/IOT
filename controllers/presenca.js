var child;
var para = false;
var spawn = require('child_process').spawn;

module.exports.estadoAtual = function (application, req, res) {
    var Gpio = require('onoff').Gpio,
      pir = new Gpio(17, 'in', 'both');

    var value = pir.readSync();
    pir.unexport();
    res.json({"response" : "200", "estado" : value})
}

module.exports.trocaEstado = function(application, req, res){
    var dados = req.body;
    var option = dados.option;

    if(option == null){
        res.json({"response" : "400", "error" : "Argumentos Inválidos"})
        return;
    }
    console.log(option);

    if(option == "on"){
        ligaPresenca(application, res);
    } else if (option == "off") {
        desligaPresenca(res);
    } else {
        res.json({"error":"Comando Indisponível"});
    }
}

function ligaPresenca(application, res){
    para = false;
    ativa(application);
}

function desligaPresenca(res){
    para = true;
}

function ativa(app){
	var sleep = require('sleep');

setInterval(function(){
	if(para == true) return;
	var value = app.locals.pir.readSync();
			//console.log(value);

			app.locals.lamp1.writeSync(value);
			if(value == 1) sleep.sleep(3);
		},1000);
}
