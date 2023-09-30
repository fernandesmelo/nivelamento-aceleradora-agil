// 11. Faça um programa para corrigir provas de múltipla escolha. Cada prova tem oito questões e cada questão vale um
// ponto. O primeiro conjunto de dados a ser lido é o gabarito da prova. Os outros dados são os números dos alunos e as
// respostas que deram às questões. Existem dez alunos matriculados. Calcule e mostre:
// a. O número e a nota de cada aluno;
// b. A percentagem de aprovação, sabendo-se que a nota mínima é 6.

const alunos = [
    {
      numero: 1,
      questoes: ['a', 'c', 'e', 'f', 'b', 'f', 'a', 'b'],
    },
    {
      numero: 2,
      questoes: ['a', 'f', 'd', 'f', 'b', 'd', 'd', 'c'],
    },
    {
      numero: 3,
      questoes: ['b', 'c', 'a', 'f', 'b', 'c', 'e', 'c'],
    },
    {
      numero: 4,
      questoes: ['a', 'c', 'e', 'f', 'a', 'c', 'a', 'f'],
    },
  ];
  
  const corrigeProva = (alunos) => {
    const gabarito = ['a', 'f', 'b', 'b', 'c', 'd', 'e', 'f'];
  
    for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];
      let nota = 0;
  
      for (let j = 0; j < gabarito.length; j++) {
        if (aluno.questoes[j] === gabarito[j]) {
          nota++; 
        }
      }
  
      aluno.nota = nota; 
    }
  };
  
  corrigeProva(alunos);
  
  console.log("Número e nota de cada aluno:");
  for (const aluno of alunos) {
    console.log(`Aluno ${aluno.numero}: Nota ${aluno.nota}`);
  }
  
  const notaMinima = 6; 
  const aprovados = alunos.filter((aluno) => aluno.nota >= notaMinima); 
  const percentagemAprovacao = (aprovados.length / alunos.length) * 100; 
  
  console.log(`\nPercentagem de aprovação: ${percentagemAprovacao.toFixed(2)}%`);
  