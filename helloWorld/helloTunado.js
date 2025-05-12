var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
    // Verifica se a URL da requisição existe
    if (!request.url) {
        response.writeHead(400, { 'Content-Type': 'text/plain' });
        response.end('Invalid request URL');
        return;
    }

    // Obtendo o parâmetro 'name' da URL
    var parsedUrl = url.parse(request.url, true);
    var name = parsedUrl.query.name;
    
    if (name === undefined) name = 'world';

    if (name === 'burningbird') {
        var file = 'phoenix5a.png';
        
        // Verificando se o arquivo existe
        fs.stat(file, function(err, stat) {
            if (err) {
                console.error('Erro ao acessar o arquivo:', err);
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end("Sorry, burningbird isn't around right now\n"); 
            } else {
                // Lendo o arquivo de imagem
                var img = fs.readFileSync(file);
                response.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Length': stat.size
                });
                response.end(img, 'binary');
            }
        });
    } else {
        // Resposta de texto para outros casos
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello ' + name + '\n');
    }
}).listen(8124);

console.log('Server running at http://localhost:8124/');