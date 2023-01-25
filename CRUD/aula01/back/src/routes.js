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

const Execucao = require("./controllers/vw_execucaoController");

router.get("/vwExecucao", Execucao.listarPedidos);

const vw_Pedidos = require("./controllers/vw_pedidos_entregador");

router.get("/vw_pedidos", vw_Pedidos.listarPedidos);
router.get("/vw_pedidos2", vw_Pedidos.listarPedidos2);

module.exports = router;