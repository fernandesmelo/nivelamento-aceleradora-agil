// Somar três números

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);

console.log(`Números gerados: ${num1}, ${num2} e ${num3}`);


if(num1 == '' || num2 == '' || num3 == ''){
    console.log("Entrada(s) vazia(s), informe os três números");
}else{
    let soma = num1 + num2 + num3
    console.log(`O resultado da soma é ${soma}`);
}

