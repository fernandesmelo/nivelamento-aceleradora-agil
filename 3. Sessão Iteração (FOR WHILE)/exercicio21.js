// 21) Dado um número, diga se este número é primo ou não.

let numero = parseInt(prompt(`Digite um número para saber se ele é primo ou não: `));
let numeroDivisores = 0;


for(let divisor = numero; divisor > 0; divisor--){
    if(numero % divisor === 0){
        numeroDivisores++;
    }
}

if(numeroDivisores === 2){
    console.log(`O número ${numero} é primo`);
}else{
    console.log(`O número ${numero}  não é primo`);
}

