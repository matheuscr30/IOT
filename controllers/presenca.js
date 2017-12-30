var child;
var spawn = require('child_process').spawn;

module.exports.home = function(application, req, res){
    var option = req.params.option;

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

    res.json({"response" : "200"})
}

function desligaPresenca(res){
    if(child != null){
        child.kill();
        child = null;
        res.json({"response" : "200"})
    } else {
        res.json({"response" : "400", "error" : "Sensor de Presença já está desligado"});
    }
}
