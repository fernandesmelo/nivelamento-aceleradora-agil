// 19) Dado um número, imprimir a tabuada multiplicativa deste.

let numero = parseInt(prompt(`Digite o número que você deseja receber a tabuada:`));
tabuada = "";

for(let i = 0; i <= 10; i++){
    tabuada += `${numero} x ${i} = ${numero * i} \n`;
}

console.log(tabuada);
