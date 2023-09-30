// 10. Faça um programa que preencha um vetor com dez números inteiros, determine e mostre os números superiores a
// cinqüenta e suas respectivas posições. O programa deverá mostrar uma mensagem se não existir nenhum número que
// atenda a esta condição.

const geraVetor = () => {
    let vetor = [];
    let vetorMaiores50 = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.floor(Math.random() * 100));
        if(vetor[i] > 50){
            vetorMaiores50.push({valor: vetor[i], posicao: i});
        }
    }

    console.log(`Valores Gerados: ${vetor}`);

    for (let j = 0; j < vetorMaiores50.length; j++) {
        if (vetorMaiores50[0] === undefined) {
            console.log('Não há valores maiores que 50.');
        } else {
            console.log(`${vetorMaiores50[j].valor} na posição ${vetorMaiores50[j].posicao}.`);
        }

    }

    return ;
}

geraVetor();