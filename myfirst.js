// uma variavel que recebe o modulo http (capaz de criar um servidor)
var http = require('http');

// 'createServer()' método para criar um servidor HTTP
http.createServer(function (req, res) { // requisição, resposta
	// cabeçalho http
	res.writeHead(200, {'Content-Type': 'text/html'}); // 200 = tudo certo
	res.end('Hello World!'); // fecha conexão
}).listen(8080); // porta para acessar
console.log('Servidor iniciado em localhost: 8080. ctrl+C para encerrar...');

/*
Rode o código com o comando de linha do Node no prompt de comando: 'node myfirst.js'
e Acesse http://localhost:8080/ no navegador.
*/