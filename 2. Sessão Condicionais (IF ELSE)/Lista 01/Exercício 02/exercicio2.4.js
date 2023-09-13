// 2.4. DN Resultado:
// PASSO 01 - Receber 4 notas;
// PASSO 02 - Calcular a média aritmética;
// PASSO 03 - Mostrar a média aritmética;
// PASSO 04 - Se a média aritmética for igual ou superior a 7, informar que o aluno está APROVADO, senão, se a média for 
// menor que 7, mas maior ou igual a 4, informar que o aluno está em EXAME, se a média for menor do que 4, informar que o 
// aluno está REPROVADO.

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
