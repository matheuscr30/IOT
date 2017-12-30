/*var Gpio = require('onoff').Gpio,
  led = new Gpio(27, 'out'),
  pir = new Gpio(17, 'in', 'both');

pir.watch(function(err, value) {
  if (err) exit();

  //1 para ligado e 0 para desligado
  led.writeSync(value);
});

function exit() {
    pir.unexport();
    led.unexport();
    process.exit();
}*/

console.log("Ola Mundo");
