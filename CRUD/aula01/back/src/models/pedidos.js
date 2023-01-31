const toReadAll = () => {
    return "SELECT * FROM pedidos";
};

const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (DEFAULT, '${model.cliente}','${model.endereco}','${model.produto}','${model.data}','${model.hora_pedido}','${model.hora_entrega}','${model.hora_fim}',${model.id_entregador})`;
};

const toUpdate = (model) => {
    return `UPDATE pedidos SET cliente = '${model.cliente}',endereco ='${model.endereco}', produto = '${model.produto}', data ='${model.data}', hora_pedido = '${model.hora_pedido}', hora_entrega = '${model.hora_entrega}', hora_fim = '${model.hora_fim}',id_entregador = ${model.id_entregador} WHERE id_pedido = ${model.id_pedido};`
}

const updatePedidoMobileCozinha = (model) => {
    return `UPDATE pedidos SET hora_entrega = curtime() WHERE id_pedido = ${model.id_pedido};`
}

const updatePedidoMobileMotoboy = (model) => {
    return `UPDATE pedidos SET hora_fim = curtime() WHERE id_pedido = ${model.id_pedido};`
}

const toDel = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = '${model.id_pedido}'`;
};

module.exports = {
    toReadAll,
    toCreate,
    toUpdate,
    updatePedidoMobileCozinha,
    updatePedidoMobileMotoboy,
    toDel
};  