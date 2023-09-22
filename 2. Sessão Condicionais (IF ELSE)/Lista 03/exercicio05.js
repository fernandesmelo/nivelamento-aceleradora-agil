// Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado seja maior que 20, este deverá ser 
// apresentado somando-se a ele mais 87; caso o valor seja menor ou igual a 20, este valor deverá ser apresentado 
// subtraindo-se 5.


let valor1 = Math.floor(Math.random() * 100);
let valor2 = Math.floor(Math.random() * 100);

const soma = (value, value2) => {
    return value + value2;
}

const resultado = soma(valor1, valor2);

console.log(`Os valores gerados são ${valor1} e ${valor2} => ${valor1} + ${valor2} = ${resultado}`);


if (resultado > 20) {
    console.log(`O novo valor é ${resultado + 87}`);
} else {
    console.log(`O novo valor é ${resultado - 5}`);   
}