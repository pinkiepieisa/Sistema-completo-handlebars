const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

//Rotas do User

//Rota para a página inicial
router.get('/', function(req, res) {
    res.render('inicial');
});

//Rota para a página do cadastro
router.get('/cad', function (req, res) {
    res.render('cadastro');
});

// Rota para o formulário de cadastro
router.post('/cad', function (req, res) {
    User.create({
        nome: req.body.nome,
        email: req.body.email,
        usuario: req.body.usuario,
        senha: req.body.senha
    }).then(() => res.redirect('/home'))
    .catch(erro => res.send('Houve um erro: ' + erro));
});

//Rota para o login
router.get('/login', function(req, res) {
    res.render('login');
});

//Rota para a home
router.get('/home', function(req, res) {
    res.render('home');
});

router.post('/login', function(req, res) {
    User.findAll(
        { 
            where: { email: req.params.email }
        } 
        &&
        { 
            where: { senha: req.params.senha }
        })
    .then(() => redirect('/home/postagens'))
    .catch(() => res.send("Esse usuário não existe!"));
});

module.exports = router;