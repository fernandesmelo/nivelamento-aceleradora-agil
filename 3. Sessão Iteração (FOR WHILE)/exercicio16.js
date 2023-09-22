// 16) Faça um programa no qual o usuário informe o número de médias a serem inseridas e após leia cada uma das médias 
// juntamente com o nome do aluno. Ao final o programa deverá informar a maior média juntamente com o nome do aluno que 
// a obteve.

const numMedias = parseInt(prompt("Informe o número de médias a serem inseridas:"));

let maiorMedia = -1;
let nomeAlunoMaiorMedia = "";

for (let i = 1; i <= numMedias; i++) {
  const nomeAluno = prompt(`Informe o nome do aluno ${i}:`);
  const media = parseFloat(prompt(`Informe a média do aluno ${i}:`));

  if (media > maiorMedia) {
    maiorMedia = media;
    nomeAlunoMaiorMedia = nomeAluno;
  }
}

console.log(`A maior média é ${maiorMedia}, obtida por ${nomeAlunoMaiorMedia}.`);

