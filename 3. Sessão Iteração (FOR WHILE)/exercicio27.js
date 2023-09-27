// 27) Chico tem 1,50 metro e cresce 2 centimetros por ano, enquanto Zé tem 1,10 metro e cresce 3 centimetros por ano. 
// Construa um algoritmo que calcule e imprima quantos anos serão necessários para que Zé seja maior que Chico.

let alturaChico = 1.50;
let alturaZe = 1.10;
let idade = 0;

while (alturaChico > alturaZe) {
    alturaChico += 0.02;
    alturaZe += 0.03;
    idade++;
}

console.log(`Serão necessários ${idade} anos para Zé ter mais altura que Chico.`);


