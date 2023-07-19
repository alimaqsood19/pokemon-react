import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonInfo from './components/PokemonInfo';
import {pokemonArray} from './utils/pokedex';

function App() {
  return (
    <div className='container'>
      {pokemonArray.map(pokemon => <PokemonInfo name={pokemon.name}/>)}
    </div>
  );
}

export default App;
