const toReadAll = () => {
    return `SELECT e.nome,e.id_entregador,p.id_pedido,p.cliente,p.endereco,p.produto,p.data, p.hora_pedido, p.hora_entrega, p.hora_fim 
    FROM entregadores e INNER JOIN pedidos p on e.id_entregador = p.id_entregador
    WHERE p.hora_entrega = "00:00:00" or p.hora_entrega = null`;
};

module.exports = {
    toReadAll,
};