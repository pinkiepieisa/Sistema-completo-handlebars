//Servidor 

const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const rota_post = require('./controllers/PostagensController.js');

//Configurando o handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars'); 

//Configurando o Body-Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Usando rotas 
app.use('/home', rota_post);

app.listen(8081, function() {
    console.log("Servidor rodando na porta 8081!")
});