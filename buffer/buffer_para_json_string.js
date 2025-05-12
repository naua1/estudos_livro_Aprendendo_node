'use strict'

//esse codigo tranforma o buffer em JSON

//cria o buffer
let buf = new Buffer("this is my pretty example");

//transforma em json
let json = JSON.stringify(buf);

//transforma de novo em buffer
let buf2 = new Buffer(JSON.parse(json).data);

//escreve o buffer em string
console.log(buf2.toString());

//pega só os caracteres 11 ao 17
console.log(buf2.toString('utf8', 11,17));


