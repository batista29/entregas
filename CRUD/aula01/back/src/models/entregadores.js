const toReadAll = () => {
    return "SELECT * FROM entregadores";
};

const toCreate = (model) => {
    return `INSERT INTO entregadores VALUES (DEFAULT, '${model.nome}','${model.email}','${model.senha}','${model.veiculo}')`;
};

const toLogin = (model) => {
    return `SELECT * FROM entregadores WHERE email = '${model.email}' AND senha='${model.senha}'`
}

module.exports = {
    toReadAll,
    toCreate,
    toLogin
};