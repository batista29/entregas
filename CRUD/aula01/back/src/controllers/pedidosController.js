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


function excluirPedido (req, res) {
    con.query(Pedidos.toDel(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

function updatePedido (req, res) {
    con.query(Pedidos.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};


function updatePedidoMobileCozinha (req, res) {
    con.query(Pedidos.updatePedidoMobileMotoboy(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

function updatePedidoMobileMotoboy (req, res) {
    con.query(Pedidos.updatePedidoMobileMotoboy(req.body), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
};

module.exports = {
    listarPedidos,
    cadastrarPedidos,
    excluirPedido,
    updatePedido,
    updatePedidoMobileCozinha,
    updatePedidoMobileMotoboy
}