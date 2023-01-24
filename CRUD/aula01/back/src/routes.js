const express = require('express');
const router = express.Router();

const EntregadoresController = require("./controllers/entregadoresController");

router.get("/motoBoy", EntregadoresController.listarEntregadores);
router.post("/motoBoy", EntregadoresController.cadastrarEntregadores);
router.post("/motoBoy/login", EntregadoresController.loginUser);

const PedidosController = require("./controllers/pedidosController");

router.get("/pedidos", PedidosController.listarPedidos);
router.post("/pedidos", PedidosController.cadastrarPedidos);
router.delete("/pedidos", PedidosController.excluirCategoria);
router.put("/pedidos", PedidosController.updatePublicacao);

module.exports = router;