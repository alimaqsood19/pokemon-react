import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { pokemonArray } from '../utils/pokedex';
import axios from 'axios';

const PokemonInfo = ({name}) => {
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`).then(({ data }) => {
            const pokemonData = {
                name: data.name,
                abilities: data.abilities,
                image: data.sprites.front_shiny
            }
            setPokemon(pokemon => ({
                ...pokemon,
                ...pokemonData
            }));
            setLoading(false);
        })
    }, []);
    return (
        <div>
            {loading ? (
                <div>...Loading</div>)
                :
                <PokemonCard pokemonName={pokemon.name} pokemonImg={pokemon.image} pokemonAbilities={pokemon.abilities} />
            }
        </div>
    )
}

export default PokemonInfo;