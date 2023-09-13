// 1.4. Calcular a média aritmética entre duas notas de um aluno e mostrar a seguinte situação: APROVADO para média igual 
// ou superior a 5, REPROVADO, caso contrário.


let nota1 = (Math.random() * 10)
let nota2 = (Math.random() * 10)

let media = (nota1 + nota2) / 2;

console.log(`Sua média é: ${media.toFixed(1)}`);

if (media >= 5) {
    console.log("APROVADO.")
} else {
    console.log("REPROVADO.")
}
