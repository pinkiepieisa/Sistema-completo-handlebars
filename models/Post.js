//Criação da tabela Post

const db = require('./db');
const User = require('../models/User');
//Ligação com o arquivo do banco

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING // Tipo de dado
    },
    conteudo: {
        type: db.Sequelize.TEXT
    },
    fk_user: {
        type: db.Sequelize.INTEGER,
        foreignKey: true
    } 
});

/*
//O sequelize por padrão associa as fk ao id da outra tabela
//Relacionamento com a tabela users
Post.belongsTo(User, { foreignKey: 'fk_user'});
*/

Post.sync({force:true});

module.exports = Post;