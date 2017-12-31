var sleep = require('sleep');
var app = require('../app');

setInterval(function(){
	var value = app.locals.pir.readSync();
			//console.log(value);

			app.locals.lamp.writeSync(value);
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
