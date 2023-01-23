const express = require('express');
const router = express.Router();

const EntregadoresController = require("./controllers/entregadoresController");

router.get("/motoBoy", EntregadoresController.listarEntregadores);
router.post("/motoBoy", EntregadoresController.cadastrarEntregadores);

const PedidosController = require("./controllers/pedidosController");

router.get("/pedidos", PedidosController.listarPedidos);
router.post("/pedidos", PedidosController.cadastrarPedidos);

module.exports = router;