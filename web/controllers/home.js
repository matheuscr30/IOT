module.exports.home = function (application, req, res) {
    if(req.session.autorizado !== true){
        res.redirect('/');
        return;
    }

    res.render('home');
}
