// 15. Faça um programa que preencha um vetor com os modelos de cinco carros. Carregue outro vetor com o consumo
// destes carros, isto é, quantos quilômetros cada um deles faz com um litro de combustível, calcule e mostre:
// a. O modelo de carro mais econômico.
// b. Quantos litros de combustível cada um dos carros cadastrados consomem para percorrer uma distância de 1.000 
// quilômetros.

const modelosCarros = ["CarroA", "CarroB", "CarroC", "CarroD", "CarroE"];
const consumoCarros = [10, 12, 15, 18, 20];

let carroMaisEconomico = modelosCarros[0]; 
let consumoMaisEconomico = consumoCarros[0]; 

for (let i = 1; i < modelosCarros.length; i++) {
  if (consumoCarros[i] > consumoMaisEconomico) {
    carroMaisEconomico = modelosCarros[i];
    consumoMaisEconomico = consumoCarros[i];
  }
}

console.log(`O modelo de carro mais econômico é ${carroMaisEconomico} com ${consumoMaisEconomico} km/l.`);

console.log("Litros de combustível para percorrer 1000 km:");
for (let i = 0; i < modelosCarros.length; i++) {
  const modelo = modelosCarros[i];
  const consumo = consumoCarros[i];
  const litrosPara1000Km = 1000 / consumo;
  console.log(`${modelo}: ${litrosPara1000Km.toFixed(2)} litros`);
}
