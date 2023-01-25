const toReadAll = (model) => {
    return `SELECT e.id_entregador, e.nome, p.hora_pedido, p.hora_entrega, p.hora_fim 
    FROM entregadores e INNER JOIN pedidos p 
    WHERE e.nome = "${model.nome}" AND p.hora_fim = "00:00:00"`;
};

module.exports = {
    toReadAll,
};