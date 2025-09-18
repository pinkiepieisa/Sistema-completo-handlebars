//Criação da tabela Post

const db = require('./db');
//Ligação com o arquivo do banco

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING // Tipo de dado
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

Post.sync({force:true});

module.exports = Post;