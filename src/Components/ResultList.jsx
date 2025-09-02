// Components/ResultList.js
import React from 'react';

export const ResultList = ({ pokeList }) => {
    return (
        <ul className="results-list">
            {pokeList.map((pokemon, index) => (
                <li key={index} className="pokemon-card">
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <span className="pokemon-type">{pokemon.type}</span>
                </li>
            ))}
        </ul>
    );
};

export default ResultList;
