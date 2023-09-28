// 6. Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação, calcule e mostre
// quantas notas estão em um intervalo de valores que vai de 10% abaixo da média até 10% acima dela.

const geraNotas = () =>{
    let notas = new Array();
    for (let i = 0; i < 15; i++){
        notas.push(parseFloat((Math.random() * 10).toFixed(2)));
    }
    
    return notas;  
}

const notasAlunos = geraNotas();
const mediaAprovacao = 6;

const verificaMedia = (notas, media) =>{
    let notasAbaixo = 0;
    let notasAcima = 0;
    let taxa10 = media * 0.1;

    for(let i = 0; i < notas.length; i++){
        if(notas[i] < (media + taxa10) && notas[i] > media){
            notasAcima++;
        }else if (notas[i] > (media - taxa10) && notas[i] < media){
            notasAbaixo++;
        }
    }

    console.log(`A quantidade de notas que estão 10% acima da média é ${notasAcima}
                A quantidade de notas que estão 10% abaixo da média é ${notasAbaixo}`);

    return;
}

console.log(`Médias geradas: ${notasAlunos}`)

verificaMedia(notasAlunos, mediaAprovacao);

