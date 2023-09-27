// 8) Faça um programa que leia N números (o usuário deverá informar a quantidade de números que será informada) 
// e ao final diga qual o valor do maior e do menor número digitado.

const myFunc = (numero) => {
    const myArr = []
    for (let i = 0; i < numero; i++) {
        myArr.push(((Math.random() * 100).toFixed(0)));
    }

    const ordenacao = myArr.sort();

    return `\tO maior número foi: ${ordenacao.pop()} 
    O menor número foi: ${ordenacao.reverse().pop()}  
    Em um array de: ${myArr.sort()}`;
}

console.log(myFunc(100));