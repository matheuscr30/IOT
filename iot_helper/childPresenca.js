var sleep = require('sleep');
var Gpio = require('onoff').Gpio,
  led = new Gpio(27, 'out'),
  pir = new Gpio(17, 'in', 'both');

setInterval(function(){ 
	var value = pir.readSync();
			//console.log(value);
			
			led.writeSync(value);
			if(value == 1) sleep.sleep(3);
		},1000);

/*
pir.watch(function(err, value) {
  if (err) {
	  console.log(err);
	  exit();
  }
  //1 para ligado e 0 para desligado
  console.log(value);
 
	led.writeSync(value);
	if(value == 1) sleep.sleep(3);
});

function exit() {
    pir.unexport();
    led.unexport();
    process.exit();
}*/
