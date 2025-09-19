const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

//Rotas do User
router.get('/', function(req, res) {
    res.render('home');
});

router.get('/cad', function (req, res) {
    res.render('cadastro');
});

router.get('/login', function(req, res) {
    res.render('login');
})

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

module.exports = router;