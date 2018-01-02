module.exports = function (application) {
    application.get("/", function (req, res) {
        application.controllers.login.home(application, req, res);
    });

    application.post("/", function (req, res) {
        application.controllers.login.login(application, req, res);
    });
}
