// 5. Faça um programa que preencha dois vetores de dez elementos numéricos cada um e mostre o vetor resultante da
// intercalação deles.

function preencherVetores() {
    const vetor1 = [];
    const vetor2 = [];

    for (let i = 0; i < 10; i++) {
        const valor = parseInt(prompt(`Digite o valor do primeiro vetor na posição ${i + 1}:`))
        vetor1.push(valor);
    }

    for (let i = 0; i < 10; i++) {
        const valor = parseInt(prompt(`Digite o valor do segundo vetor na posição ${i + 1}:`))
        vetor2.push(valor);
    }

    const vetorIntercalado = intercalarVetores(vetor1, vetor2);
    console.log("Vetor Intercalado:", vetorIntercalado);
}

function intercalarVetores(vetor1, vetor2) {
    const vetorIntercalado = [];
    
    for (let i = 0; i < 20; i++) {
        vetorIntercalado.push(vetor1[i]);
        vetorIntercalado.push(vetor2[i]);
    }

    return vetorIntercalado;
}

preencherVetores();