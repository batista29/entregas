const Pedidos = require("../models/pedidos")
const con = require("../dao/dao");

function listarPedidos(req, res) {
    con.query(Pedidos.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function cadastrarPedidos(req, res) {
    con.query(Pedidos.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listarPedidos,
    cadastrarPedidos
}