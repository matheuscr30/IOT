module.exports = function (application) {
    application.get("/api/lampadas/:num", function (req, res) {
        application.controllers.lampadas.estadoAtual(application, req, res);
    });

    application.post("/api/lampadas/:num", function (req, res) {
        application.controllers.lampadas.trocaEstado(application, req, res);
    });
}
