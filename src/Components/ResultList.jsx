// Components/ResultList.js
import React from 'react';
import pokeTypeColor from '../utils/pokeTypeColor';
import { PokeResult } from './PokeResult';
import useTrainerStore from '../Stores/UseTrainerStore';
export const ResultList = ({ pokeList }) => {
    const addPokemon = useTrainerStore((state) => state.addPokemon);

    const handleCatch = (pokemon) => {
        addPokemon(pokemon);
    };
    return (
        <ul className="results-list">
            {pokeList.map((pokemon) => (
                <PokeResult
                    key={pokemon.id}
                    pokemon={pokemon}
                    onselect={handleCatch}
                    buttonLabel={'Add To Team'}
                />
            ))}
        </ul>
    );
};

export default ResultList;
