const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; // porta padrão
const mysql = require('mysql');

// COnfigurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Definindo as rotas
const router = express.Router();
router.get('/', (req, res)=> res.json({message: 'Funcionando!'}));
app.use('/', router);

// Inicia o servidor
app.listen(port);
console.log('API funcionando!');