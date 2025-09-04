import React from 'react';
import pokeTypeColor from '../utils/pokeTypeColor';

export const PokeResult = ({ pokemon, onselect, buttonLabel }) => {
    return (
        <>
            <li className="pokemon-card">
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <span className="pokemon-type" style={{ background: pokeTypeColor[pokemon.type] }}>
                    {pokemon.type}
                </span>
                <button onClick={() => onselect(pokemon)}>{buttonLabel}</button>
            </li>
        </>
    );
};
