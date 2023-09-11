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


const pokemon = "pikachu, 3, eletric, (thunderShock - QUICK attack - thuNder), STATIC, (VERIDIAN, CERULEAN, PALLET)"

//Divide a string, utilizando a virgula como parametro de separação:
let partes = pokemon.split(",");

//Transformando a primeira letra do picachu teste:
const pikachu = partes[0].charAt(0).toUpperCase() + partes[0].slice(1);

//Atribuindo a segunda posição do array a uma constante
const nivel = partes[1];

//Formatando a palavra eletric:
const electric = partes[2].toUpperCase();


//Joy 

partes[3] = partes[3].replace("(", "").replace(")", "");

partes[3] = partes[3].toLocaleLowerCase();

let attacks = partes[3].split("-");

//Joyce 
//Thundershock
let thundershock = attacks[0].trim();
thundershock = thundershock.charAt(0).toUpperCase() + thundershock.slice(1);

//Quick 
let quickAttack = attacks[1].trim();
quickAttack = quickAttack.charAt(0).toUpperCase() + quickAttack.slice(1);

//Thunder
let thunder = attacks[2].trim();
thunder = thunder.charAt(0).toUpperCase() + thunder.slice(1);

const static = partes[4].toLocaleLowerCase();

//Faz a formatação das três strings refrentes a PLaces

//Tira o parenteses de abertura usando o replace() e transforma todas as letras em minúsculas
let veridian = partes[5].replace("(", "").replace(")", "");
veridian = veridian.toLowerCase();

//Atribui a uma váriavel e transforma todas as letras em minúsuculas
const cerulean = partes[6].toLowerCase();

//Tira o parenteses de fechamento usando o replace() e transforma todas as letras em minúsuculas
let pallet = partes[7].replace("(", "").replace(")", "");
pallet = pallet.toLowerCase();

//Joyce
let resultado = `
Name: ${pikachu}
Lv: ${nivel} - Type: ${electric}
Ability: ${static}
`

console.log(resultado);

// Name: Pikachu
//     Lv: 3 - Type: ELETRIC
//     Ability: static
//     Attacks:
//         - Thundershock,
//         - Quick attack
//         - Thunder

//     Places:
//         - veridian
//         - pallet
//         - cerulean





