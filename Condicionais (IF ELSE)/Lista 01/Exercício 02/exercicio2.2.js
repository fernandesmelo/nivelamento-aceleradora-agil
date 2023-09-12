const readline = require('readline');


let numerador = Math.floor(Math.random() * 10);
let denominador = Math.floor(Math.random() * 10);


console.log(`Números gerados: ${numerador}, ${denominador}`);

if(denominador === 0) {
    console.log("Digite um número diferente de zero para o denominador");

    let denominador2 = Math.floor(Math.random() * 100);
    console.log(`O novo denominador é ${denominador2}`);


    let resultado2 = (numerador/ denominador2).toFixed(2);
    console.log(`O resultado da divisão é ${resultado2}`);
    
}else {
    let resultado =(numerador / denominador).toFixed(2);
    console.log(`O resultado da divisão é ${resultado}`);
}
