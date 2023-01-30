const Pedidos = require("../models/vw_pedidos_entregador")
const con = require("../dao/dao");

function listarPedidos(req, res) {
    con.query(Pedidos.toReadAll(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function listarPedidos2(req, res) {
    con.query(Pedidos.toRead(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function listarPedidosCaminho(req, res) {
    con.query(Pedidos.toReadCaminho(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

module.exports = {
    listarPedidos,
    listarPedidos2,
    listarPedidosCaminho
}