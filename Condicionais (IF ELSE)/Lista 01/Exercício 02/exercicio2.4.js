let nota1 = Math.floor(Math.random() * 10);
let nota2 = Math.floor(Math.random() * 10);
let nota3 = Math.floor(Math.random() * 10);
let nota4 = Math.floor(Math.random() * 10);

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`Média: ${media.toFixed(1)}`);

if (media >= 7) {
    console.log("O aluno está APROVADO.");
} else if (media < 7 && media >= 4) {
    console.log("O aluno está em EXAME.");
} else {
    console.log("O aluno está REPROVADO.");
}
