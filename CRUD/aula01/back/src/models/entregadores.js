const toReadAll = () => {
    return "SELECT * FROM entregadores";
};

const toCreate = (model) => {
    return `INSERT INTO entregadores VALUES (DEFAULT, '${model.nome}','${model.email}','${model.senha}','${model.veiculo}')`
};

const toLogin = (model) => {
    return `SELECT * FROM entregadores WHERE email = '${model.email}' AND senha = '${model.senha}'`
}

const toUpdate = (model) => {
    return `UPDATE entregadores SET nome = '${model.nome}',email ='${model.email}', senha = '${model.senha}', veiculo ='${model.veiculo}' WHERE id_entregador = ${model.id_entregador};`
}

const toDelete = (model) => {
    return `DELETE FROM entregadores WHERE id_entregador = '${model.id_entregador}'`;
  };


module.exports = {
    toReadAll,
    toCreate,
    toLogin,
    toUpdate,
    toDelete
};