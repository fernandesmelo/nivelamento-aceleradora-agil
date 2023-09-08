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

let partes = pokemon.split(",");

partes[0] = partes[0].charAt(0).toUpperCase() + partes[0].slice(1);

partes[2] = partes[2].toUpperCase();




//Joy 

partes[3] = partes[3].replace("(", "").replace(")", "");

partes[3] = partes[3].toLocaleLowerCase();

partes[3] = partes[3].split("-");

console.log(partes[3]);





