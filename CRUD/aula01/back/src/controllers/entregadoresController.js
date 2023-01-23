const Entregadores = require("../models/entregadores")
const con = require("../dao/dao");

function listarEntregadores(req, res) {
    con.query(Entregadores.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

function cadastrarEntregadores(req, res) {
    con.query(Entregadores.toCreate(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};

module.exports = {
    listarEntregadores,
    cadastrarEntregadores
}