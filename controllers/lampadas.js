module.exports.estadoAtual = function (application, req, res) {
    var num = req.params.num;
    var value = application.lamps[num].readSync();
    res.json({"response" : "200", "estado" : value});
}
