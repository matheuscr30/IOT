var child;
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
        ligaPresenca(res);
    } else if (option == "off") {
        desligaPresenca(res);
    } else {
        res.json({"error":"Comando Indisponível"});
    }
}

function ligaPresenca(res){
    child = spawn('node', ['iot_helper/childPresenca.js']);

    child.on('exit', function(){
      console.log('Filho excluido');
    });

    child.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });

    child.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    res.json({"response" : "200"});
}

function desligaPresenca(res){
    if(child != null){
        child.kill();
        child = null;
        res.json({"response" : "200"});
    } else {
        res.json({"response" : "400", "error" : "Sensor de Presença já está desligado"});
    }
}
