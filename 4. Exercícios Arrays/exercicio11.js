// 11. Faça um programa para corrigir provas de múltipla escolha. Cada prova tem oito questões e cada questão vale um
// ponto. O primeiro conjunto de dados a ser lido é o gabarito da prova. Os outros dados são os números dos alunos e as
// respostas que deram às questões. Existem dez alunos matriculados. Calcule e mostre:
// a. O número e a nota de cada aluno;
// b. A percentagem de aprovação, sabendo-se que a nota mínima é 6.

const alunos = [
    {
        numero: 1,
        questoes: [a, c, e, f, b, f, a, b]    
    },
    {
        numero: 1,
        questoes: [a, f, d, f, b, d, d, c]    
    },
    {
        numero: 1,
        questoes: [b, c, a, f, b, c, e, c]   
    },
    {
        numero: 1,
        questoes: [a, c, e, f, a, c, a, f]    
    },
]

const corrigeProva = (alunos) =>{
    const gabarito = [a, f, b, b, c, d, e, f];

    for(let i = 0; i < alunos.length; i++){
        for (let j = 0; j < gabarito.length; j)
            alunos[i].questoes[i]
    }


}