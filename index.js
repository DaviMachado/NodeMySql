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

// listagem de clientes
function execSQLQuery(sqlQry, res){
	const connection = mysql.createConnection({
	  host     : 'localhost',
	  port     : 3306,
	  user     : 'root',
	  password : '',
	  database : 'nodemysql'
	});

	connection.query(sqlQry, function(error, results, fields){
		if(error)
			res.json(error);
		else
			res.json(results);
		connection.end();
		console.log('Executou!');
	});
}

// Rota para listar os clientes
// Pesquisa conforme o ID colocado no final da URL
router.get('/clientes/:id?', (req, res)=>{
	let filter = '';
	if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
	execSQLQuery('SELECT * FROM Clientes' + filter, res);
})

// Rota para excluir um cliente
router.delete('/clientes/:id', (req, res)=> {
	execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
})