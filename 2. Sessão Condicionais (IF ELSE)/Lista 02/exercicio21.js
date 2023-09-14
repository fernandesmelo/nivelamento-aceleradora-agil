// 21) Faça um programa que receba uma hora (uma variável para hora e outra para minutos), calcule e mostre:
// a) a hora digitada convertida em minutos;
// b) o total dos minutos, ou seja, os minutos digitados mais a conversão anterior;
// c) o total dos minutos convertidos em segundos.

let hora = Math.floor(Math.random() * 23);
let minutos = Math.floor(Math.random() * 59);

function calculaHoraMinutos(hora) {
    return hora * 60;
}

function calculaTotalMinutos(minutos) {
    return minutos + calculaHoraMinutos(hora);
}

function calculaMinutosSegundos() {
    return calculaTotalMinutos(minutos) * 60;
}

console.log("Horas Geradas:", hora);
console.log("Minutos Gerados:", minutos);
console.log(`${hora} horas em minutos é: ${calculaHoraMinutos(hora)}`);
console.log(`Total de minutos é: ${calculaTotalMinutos(minutos)}`);
console.log(`${calculaTotalMinutos(minutos)} minutos em segundos é: ${calculaMinutosSegundos()}`);