module.exports.home = function (application, req, res) {
    res.render('login', {erro : false});
}

module.exports.login = function (application, req, res) {

    if(req.body.usuario == "algar2017" && req.body.senha == "tstrt12"){
        req.session.autorizado = true;
        res.redirect('home');
    } else {
        res.render('login', {erro : true});
    }
}
