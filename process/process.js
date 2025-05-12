//enconding transforma os buffers em string, podendo assim
//utilizar metodos de string
process.stidin.setEnconding('utf8');

//informa a existencia de dados para ser lidos
process.stdin.on('readable', function(){
    //ler os dados
    var input = process.stdin.read();

    if(input !== null){
        //ecoa saida de texto de entrada
        process.stdout.write(input);

        //metodo trim remove os espacos branco do inicio e fim
        //de uma string
        var command = input.trim();
        //finalizar a execucao depois de escrever a string
        if(command == 'exit')
            process.exit(0);
    }
});


//process.stdin - um fluxo de leitura para stdin
//process.stdout - um fluxo de escritar para stdout
//precess.stderr - um fluxo de escritar para stderr