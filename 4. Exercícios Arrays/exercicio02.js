// 2. Crie um algoritmo que leia um vetor de 30 números inteiros e gere um segundo vetor cujas posições pares são o
// dobro do vetor original e as ímpares o triplo.

// Função para criar o segundo vetor com posições pares e ímpares modificadas

function criarVetorModificado() {
    const vetorOriginal = new Array(30);
    const vetorModificado = [];

    for (let i = 0; i < 30; i++) {
        const valor = parseInt(prompt(`Digite o valor da posição ${i + 1}:`))
        vetorOriginal[i] = valor;
    }

    for (let i = 0; i < 30; i++) {
        if (i % 2 === 0) {
            vetorModificado.push(vetorOriginal[i] * 2);
        } else {
            vetorModificado.push(vetorOriginal[i] * 3)
        }
    }

    console.log("vetor Modificado:", vetorModificado);
}

criarVetorModificado();