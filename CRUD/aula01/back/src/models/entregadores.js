const toReadAll = () => {
    return "SELECT * FROM entregadores";
};

const toCreate = (model) => {
    return `INSERT INTO entregadores VALUES (DEFAULT, '${model.nome}','${model.email}','${model.senha}','${model.veiculo}')`;
};

module.exports = {
    toReadAll,
    toCreate
};