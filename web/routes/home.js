module.exports = function (application) {
    application.get("/home", function (req, res) {
        application.controllers.home.home(application, req, res);
    });
}
