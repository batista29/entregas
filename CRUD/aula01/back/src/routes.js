const express = require('express');
const router = express.Router();

const EntregadoresController = require("./controllers/entregadoresController");

router.get("/motoBoy", EntregadoresController.listarEntregadores);
router.post("/motoBoy", EntregadoresController.cadastrarEntregadores);
router.post("/motoBoy/login", EntregadoresController.loginUser);
router.put("/motoBoy", EntregadoresController.updateEntregador)
router.delete("/motoBoy",EntregadoresController.excluirEntregador)

const PedidosController = require("./controllers/pedidosController");

router.get("/pedidos", PedidosController.listarPedidos);
router.post("/pedidos", PedidosController.cadastrarPedidos);
router.delete("/pedidos", PedidosController.excluirPedido);
router.put("/pedidos", PedidosController.updatePedido);
router.put("/pedidos/mobile/cozinha", PedidosController.updatePedidoMobileCozinha);
router.put("/pedidos/mobile/motoboy", PedidosController.updatePedidoMobileMotoboy);

const Execucao = require("./controllers/vw_execucaoController");

router.get("/vwExecucao", Execucao.listarPedidos);

const vw_Pedidos = require("./controllers/vw_pedidos_entregador");

router.get("/vw_pedidos/:id_entregador", vw_Pedidos.listarPedidos);
router.get("/vw_pedidos2", vw_Pedidos.listarPedidos2);
router.get("/vw_pedidosCaminho", vw_Pedidos.listarPedidosCaminho);

module.exports = router;