/* 
    Transforme a string pokemon no seguinte texto:

    Name: Pikachu
    Lv: 3 - Type: ELETRIC
    Ability: static
    Attacks:
        - Thundershock,
        - Quick attack
        - Thunder

    Places:
        - veridian
        - pallet
        - cerulean
*/

//Laercio
const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"

//Divide a string, utilizando a virgula como parametro de separação:
let partes = pokemon.split(",");

//Transformando a primeira letra do picachu teste:
partes[0] = partes[0].charAt(0).toUpperCase() + partes[0].slice(1);

//Formatando a palavra eletric:
partes[2] = partes[2].toUpperCase();




//Joy 

partes[3] = partes[3].replace("(", "").replace(")", "");

partes[3] = partes[3].toLocaleLowerCase();

let attacks = partes[3].split("-");

//Laercio
//Thundershock
attacks[0] = attacks[0].trim();
attacks[0] = attacks[0].charAt(0).toUpperCase() + attacks[0].slice(1);

//Quick 
attacks[1] = attacks[1].trim();
attacks[1] = attacks[1].charAt(0).toUpperCase() + attacks[1].slice(1);

//Thunder
attacks[2] = attacks[2].trim();
attacks[2] = attacks[2].charAt(0).toUpperCase() + attacks[2].slice(1);

partes[4] = partes[4].toLocaleLowerCase();

// Laércio 
partes[5] = partes[5].replace("(", "").replace(")", "");
partes[5] = partes[5].toLowerCase();

partes[6] = partes[6].toLowerCase();

partes[7] = partes[7].replace("(", "").replace(")", "");
partes[7] = partes[7].toLowerCase();

console.log(partes[7]);





