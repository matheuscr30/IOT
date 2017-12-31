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

    application.locals.lamps[num].writeSync(parseInt(option));
    res.json({"response" : "200"});
}
