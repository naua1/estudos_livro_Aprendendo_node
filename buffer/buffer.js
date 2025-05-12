//const buf = Buffer.from("hello");

//console.log(buf)

//console.log(buf[0])


'use strict'
let a = [1,2,3];

//buffer.from() cria um buffer
let b = Buffer.from(a);

console.log(b);

//-----------------------
//Uint8Array é um tipo de array typed em JavaScript, ou seja, é um tipo de array específico 
// para armazenar valores numéricos de 8 bits sem sinal (inteiros de 0 a 255).
let a2 = new Uint8Array([1,2,3]);

let b2 = Buffer.from(a2);

console.log(b2);

//-------------------------
// alloc cria um buffer preenchido de um tamanho determinado
let b3 = Buffer.alloc(10);

console.log(b3);
//-----------------------------

let b4 = Buffer.allocUnsafe(10);

console.log(b4);