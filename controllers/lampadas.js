module.exports.estadoAtual = function (application, req, res) {
    var num = req.params.num;

    if(num == null){
        res.json({"response" : "400", "error" : "Missing Lamp Number"});
        return;
    }

    var value = application.locals.lamps[num].readSync();
    res.json({"response" : "200", "state" : value});
}

module.exports.trocaEstado = function (application, req, res) {
    var num = req.params.num;
    var dados = req.body;
    var option = dados.option;

    if(num == null){
        res.json({"response" : "400", "error" : "Missing Lamp Number"});
        return;
    }

    if(option == null){
        res.json({"response" : "400", "error" : "Invalid Arguments"});
        return;
    }

    var value;
    if(option == "on"){
        value = 1;
    } else if (option == "off") {
        value = 0;
    } else {
        res.json({"error":"Invalid Command"});
        return;
    }

    application.locals.lamps[num].writeSync(value);
    res.json({"response" : "200"});
}
