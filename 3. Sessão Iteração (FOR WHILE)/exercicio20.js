// 20) Ler vários números até obter o finalizador 0. Indicar quantos números quadrados perfeitos (que tem raiz quadrada 
// inteira) foram lidos.

let numero;
let count = 0;

do{
    numero = parseInt(prompt(`Digite um número:`));

    if(Number.isInteger(Math.sqrt(numero))){
        count++;
    }

}while(numero !== 0);

console.log(`O número de quadrados pefeitos é ${count}`);
