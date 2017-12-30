module.exports = function(application){
	application.get('/api/presenca/:option', function(req, res){
		application.controllers.presenca.home(application, req, res);
	});
}
