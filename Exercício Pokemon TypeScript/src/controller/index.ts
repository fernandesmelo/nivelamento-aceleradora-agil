// controller.js
import { Request, Response } from 'express';
import { pokemons, findWeakness } from './db';

function getPokemon(req: Request, res: Response) {
  const { name } = req.params;
  const pokemon = pokemons.find(p => p.name === name.toLowerCase());

  if (!pokemon) {
    return res.status(404).json({ error: 'Pokemon not found' });
  }

  const weaknesses = findWeakness(pokemon.types);
  return res.json({ ...pokemon, weaknesses });
}

export { getPokemon };
