import React from 'react';
import { PokeResult } from './PokeResult';

export const ResultList = ({ pokeList }) => {
    return (
        <>
            {pokeList.map((p) => (
                <PokeResult key={p.name} pokemon={p}></PokeResult>
            ))}
        </>
    );
};
