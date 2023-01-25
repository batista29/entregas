const toReadAll = (model) => {
    return `SELECT e.id_entregador, e.nome, p.hora_pedido, p.hora_entrega, p.hora_fim 
    FROM entregadores e INNER JOIN pedidos p on e.id_entregador = p.id_entregador
    WHERE e.nome = "${model.nome}" AND p.hora_fim = "00:00:00"`;
};

const toRead = () => {
    return `SELECT e.id_entregador, e.nome,p.id_pedido,p.cliente,p.produto,p.endereco,p.data,p.hora_pedido, p.hora_entrega, p.hora_fim 
    FROM entregadores e INNER JOIN pedidos p  on e.id_entregador = p.id_entregador
    WHERE p.hora_fim = "00:00:00" AND p.hora_entrega != "00:00:00" AND p.hora_pedido != "00:00:00"`;
};

module.exports = {
    toReadAll,
    toRead
};