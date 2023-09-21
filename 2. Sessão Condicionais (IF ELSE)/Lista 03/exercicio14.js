// Escreva um algoritmo que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se não é divisível por 
// nenhum deles.

let num = Math.floor(Math.random() * 100);;

if(num % 10 === 0){
    console.log(`O número ${num} é divísivel por 10.`);
} else if(num % 5 === 0){
    console.log(`O número ${num} é divísivel por 5.`);
}else if(num % 2 === 0){
    console.log(`O número ${num} é divísivel por 2.`);
}else {
    console.log(`O número ${num} não é divísivel por 10, 5 ou 2.`);
}