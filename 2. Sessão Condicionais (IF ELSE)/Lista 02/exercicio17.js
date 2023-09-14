// 17) Sabe-se que:
// 1 pé = 12 polegadas;
// 1 jarda = 3 pés = 36 polegadas;
// 1 milha = 1760 jardas.
// Faça um programa que receba uma medida em pés, faça as conversões a seguir e mostre os resultados.
// a) Polegadas;
// b) Jardas;
// c) Milhas.

const converteEmPolegadas = value => {
    return value * 12;
}

const converteEmJardas = value => {
    return value * 0.333333;
}

const converteEmMilhas = value => {
    return value * 0.000189394;
}

let pe = parseInt(Math.random() * (100 - 1) + 1);

console.log(`O valor em pés é ${pe}`, "\n");

console.log(`${pe} pés = ${converteEmPolegadas(pe)} polegadas.`);
console.log(`${pe} pés = ${converteEmJardas(pe).toFixed(2)} jardas.`);
console.log(`${pe} pés = ${converteEmMilhas(pe).toFixed(2)} milhas.`);


