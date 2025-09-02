// Components/ResultList.js
import React from 'react';
import pokeTypeColor from '../utils/pokeTypeColor';
import { PokeResult } from './PokeResult';
export const ResultList = ({ pokeList }) => {
    return (
        <ul className="results-list">
            {pokeList.map((pokemon) => (
                <PokeResult key={pokemon.name} pokemon={pokemon} />
            ))}
        </ul>
    );
};

export default ResultList;
