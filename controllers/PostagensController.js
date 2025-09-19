const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

//Rotas do Post
//Exibir as postagens
router.get('/', function(req, res) {
    Post.findAll().then(function(posts) {
        posts = posts.map(post => post.toJSON());
        res.render('postagens', {posts: posts});
    });
});

// Rota para o formulário de cadastro
router.get('/cad', function (req, res) {
    res.render('post');
});


//Rota para adicionar post
router.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        fk_user: req.body.fk_user
    }).then(() => res.redirect('/postagens'))
    .catch(erro => res.send('Houve um erro: ' + erro));
});

//Rota para deletar um post
router.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { id: req.params.id } })
    .then(() => res.redirect('/postagens'))
    .catch(() => res.send("Essa postagem não existe!"));
});

// Rota para exibir o formulário de alteração
router.get('/alterar/:id', function (req, res) {
    Post.findAll({ where: { id: req.params.id } }).then(posts => {
        posts = posts.map(post => post.toJSON());
        res.render('alterar', {posts: posts});
    });
});

//Rota para atualizar post
router.post('/update', function (req, res) {
    Post.update(
        {
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        },
        {
            where: { id: req.body.id }
        }
    ).then(() => res.redirect('/postagens'))
    .catch(erro => res.send("Erro ao atualizar postagem: " + erro));
});

module.exports = router;