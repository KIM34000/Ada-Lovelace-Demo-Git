import axios from 'axios';

interface PokemonListItem {
  name: string;
  url: string;
}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
}

axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
  .then(resp => {
    const poke: PokemonListItem[] = resp.data.results;
    Promise.all(
      poke.slice(0, 5).map((poke) => {
        return new Promise<Pokemon>((res, rej) => {
          axios.get(poke.url).then(resp => {
            const pokemon = resp.data;
            const {id, weight, name} = pokemon

            res({id, name, weight});
          });
        })
      })
    ).then(
      (pokemons) => console.log(pokemons)
    )
  });