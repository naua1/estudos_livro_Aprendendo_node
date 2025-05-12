var fib = function (n){
    if (n < 2) return n;
    return fib(n -1 ) + fib(n - 2);
    
};

//Cria uma função construtora chamada obj, como se fosse uma "classe".
var obj = function() {};

obj.prototype.doSomething = function(arg1_){
    var callback_ = arguments[arguments.length - 1];
    var callback = (typeof(callback_) == 'function' ? callback_ : null);
    var arg1 = typeof arg1_ ==='number' ? arg1_ : null;

    if (!arg1)

        return callback(new Error("firsst arg missing or not a number"));

        //garante que que as funcionalidades assincronas sejam chamadas antes que a funcao blocante seja chamada
        process.nextTick(function() {
            //bloqueia CPU
            var data = fib(arg1);
            callback(null,data)
        });

}

var test = new obj();
var number = 10;

test.doSomething(number, function(err, value){
    if(err)
        console.log(err);
    else
    console.log('fibonaci value for %d is %d', number, value);
});

console.log('called doSomething');


// garanta que o ultimo argumento seja um callback
//crie um objeto erro  Error do node, e ser ocorrer um erro,delvovar um objeto como primeira funcao do callback
//se nao ocorrem erros,chame a funcao callback, atribua u, valor null ao argumento de erro e passe ao callback quaisquer dados relevantes.
//a funcao de callback deve ser chamada de dentro da funcao process.nextTick() para garantir que nao haja bloqueio
