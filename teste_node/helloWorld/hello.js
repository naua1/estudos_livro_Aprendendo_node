//essa linha incorpora o modulo necessario para ativar um servido http simples
//o require importa o modulo http
//
var http = require('http');


//http.createServer é uma funçao usada para instanciar um servido web
//os parametros da funcao é uma estrutura chamada de callback
//ela passa uma solicitacao para o web para que o codigo seja processado
//e tambem devolver uma resposta
http.createServer(function(request, response){
//envia um cabeçalho em texto puro com o status 200, escreve a mensagem hello world
//e encerra
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello world\n')
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');