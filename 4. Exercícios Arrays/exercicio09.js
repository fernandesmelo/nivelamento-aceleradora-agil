// 9. Crie um algoritmo que leia a pontuação final de 200 provas de um concurso e os nomes dos respectivos
// participantes, e apresente uma lista dos colocados que obtiveram mais de 70 pontos.

const participantes = ['Joyce', 'Alexandre', 'Lucas', 'João', 'Letícia'];

const geraNotas = () => {
    let notas = [];
    for(let i = 0; i < 5; i++) {
        notas.push(Math.floor(Math.random() * 100));
    }
    return notas;
}

const listaClassificados = (nomes) => {
    let notasFinais = geraNotas();
    let classificados = [];
    for (let i = 0; i < notasFinais.length; i++){
        if(notasFinais[i] > 70){
            classificados.push(notasFinais[i]);
        }
    }
    console.log("Notas Finais");
    console.log(notasFinais);

    console.log(`Candidatos Classificados`);
    for(let i = 0; i < classificados.length; i ++){
        console.log(`Nome Candidato: ${nomes[i]}  ==> Pontuação: ${classificados[i]}`)
    }

    return;
}

listaClassificados(participantes);

