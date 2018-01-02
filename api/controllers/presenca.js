var sleep = require('sleep');
var stop = false;

module.exports.estadoAtual = function (application, req, res) {
    var value = app.locals.pir.readSync();
    res.json({"response" : "200", "state" : value});
}

module.exports.trocaEstado = function(application, req, res){
    var dados = req.body;
    var option = dados.option;

    if(option == null){
        res.json({"response" : "400", "error" : "Invalid Arguments"});
        return;
    }
    console.log(option);

    if(option == "on"){
        ligaPresenca(application);
        res.json({"response" : "200"});
    } else if (option == "off") {
        desligaPresenca();
        res.json({"response" : "200"});
    } else {
        res.json({"response" : "400", "error":"Invalid Command"});
    }
}

function ligaPresenca(application){
    stop = false;
    ativa(application);
}

function desligaPresenca(){
    stop = true;
}

function ativa(app){
    setInterval(function(){
        if(stop == true) return;
        var value = app.locals.pir.readSync();
        //console.log(value);
        app.locals.lamps[0].writeSync(value);
        if(value == 1) sleep.sleep(3);
    },1000);
}
