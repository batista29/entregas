const Execucao = require("../models/vw_execucao")
const con = require("../dao/dao");

function listarPedidos(req, res) {
    con.query(Execucao.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

module.exports = {
    listarPedidos,
}