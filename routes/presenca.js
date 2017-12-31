module.exports = function(application){
	application.post('/api/presenca', function(req, res){
		application.controllers.presenca.trocaEstado(application, req, res);
	});

	application.get('/api/presenca', function (req, res) {
		application.controllers.presenca.estadoAtual(application, req, res);
	});
}
