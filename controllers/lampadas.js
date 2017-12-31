module.exports.estadoAtual = function (application, req, res) {
    console.log(req.params.id);
    var Gpio = require('onoff').Gpio,
      led = new Gpio(27, 'in', 'both');

    var value = led.readSync();
    led.unexport();
    res.json({"response" : "200", "estado" : value});
}
