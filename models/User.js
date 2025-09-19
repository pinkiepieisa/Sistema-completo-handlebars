//Criação da tabela dos usuários
const db = require('./db');
const Post = require('./Post')

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

/*
//Relacionamento com a tabela postagens
User.hasMany(Post, {foreignKey: 'fk_user'});
*/

User.sync({force: true});

module.exports = User;