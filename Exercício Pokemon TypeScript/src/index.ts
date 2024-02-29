import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

interface Pokemon {
  name: string;
  types: string[];
}

const pokemons: Pokemon[] = [
  {
    name: "pikachu",
    types: ["eletric"]
  },
  {
    name: "gabite",
    types: ["dragon", "ground"]
  },
];

const weaknessChart: { [key: string]: string[] } = {
  "eletric": ["ground"],
  "dragon": ["ice", "dragon", "fairy"],
  "ground": ["water", "grass", "ice"]
};

function findWeakness(types: string[]): string[] {
  let weaknesses: string[] = [];
  types.forEach(type => {
    if (weaknessChart[type]) {
      weaknesses = weaknesses.concat(weaknessChart[type]);
    }
  });
  return weaknesses;
}

app.get('/pokemon/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  const pokemon = pokemons.find(p => p.name === name.toLowerCase());

  if (!pokemon) {
    return res.status(404).json({ error: 'Pokemon not found' });
  }

  const weaknesses = findWeakness(pokemon.types);
  return res.json({ ...pokemon, weaknesses });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
