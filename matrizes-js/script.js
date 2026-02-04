
let timePokemon = [
  ["Pikachu", "M", 45],
  ["Chamander", "F", 29],
  ["Bulbassaur", "M", 14],
  ["Chansey", "F", 20],
  ["Diglett", "M", 33],
  ["Kadabra", "M", 46],
  ["Gyarados","M", 71]
]

for(let i = 0; i < timePokemon.length; i++){
  console.log(
    " O pokémon " + timePokemon[i][0] + 
    " é do sexo " + timePokemon[i][1] +
    " tem o level " + timePokemon[i][2] + "."
  );
}

console.log("\nObrigado(a) por jogar Pokemon!")