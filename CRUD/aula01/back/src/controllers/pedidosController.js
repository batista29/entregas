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


function excluirCategoria (req, res) {
    con.query(Pedidos.toDel(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

function updatePublicacao (req, res) {
    con.query(Pedidos.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    listarPedidos,
    cadastrarPedidos,
    excluirCategoria,
    updatePublicacao
}