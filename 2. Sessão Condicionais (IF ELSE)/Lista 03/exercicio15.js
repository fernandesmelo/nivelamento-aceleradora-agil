// Construa um algoritmo que indique se um número digitado está compreendido entre 20 e 90 ou não (20 e 90 não estão na 
// faixa de valores).

let num = Math.floor(Math.random() * 100);

if (num > 20 && num < 90) {
    console.log(num, "está dentro do intervalo.");
} else {
    console.log(num, "não está dentro do intervalo.");
}