//O http é um módulo nativo do Node.js usado para criar servidores web.
//O require importa esse módulo para poder usá-lo.
var http = require('http');


// esta criando o server
var server = http.createServer();


/*Quando alguém acessa o servidor (ex: pelo navegador), o evento request é disparado.
O callback recebe dois objetos:
request: informações da requisição (ex: URL, método, cabeçalhos).
response: permite responder ao cliente.
Ele imprime "request event" no terminal.
Retorna um código 200 OK, com conteúdo text/plain.
Envia como resposta: "hello world". */
server.on('request', function(request, response){
    console.log('request event');

    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('hello world\n');


})
/*O evento connection é disparado toda vez que um cliente se conecta (mesmo antes de fazer uma requisição).
Exibe "connection event" no terminal. */
server.on('connection', function(){
    console.log('connection event');
});

server.listen(8124, function(){
    console.log('listening event');

});

console.log('server running on port 8124');