//Criação da tabela dos usuários
const db = require('./db');

const User = db.sequelize.define('user', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    usuario: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

User.sync({force: false});

module.exports = User;