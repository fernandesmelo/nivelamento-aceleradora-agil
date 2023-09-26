// 24) Escrever um algoritmo que lê 5 valores para uma variável A, um de cada vez, e conta quantos destes valores são 
// negativos, escrevendo esta informação.

let letraA = [25, - 79, - 2, 36, 100];

function valoresNegativos(letraA) {
    let numerosNegativos = 0;
    for (posicoes = 0; posicoes < 5; posicoes++) {
        if (letraA[posicoes] < 0) {
            numerosNegativos++;
        }
    }

    return numerosNegativos;
}

console.log("A quantidade de valores negativos é: ",valoresNegativos(letraA));