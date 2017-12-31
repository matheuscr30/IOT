module.exports.estadoAtual = function (application, req, res) {
    console.log(req.params.num);
    var Gpio = require('onoff').Gpio,
      lamp = new Gpio(27, 'in', 'both');

    var value = lamp.readSync();
    lamp.unexport();
    res.json({"response" : "200", "estado" : value});
}
