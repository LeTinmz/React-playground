import React from 'react';

export const PokeResult = ({ pokemon }) => {
    return (
        <div style={{ borderBottom: '1px solid white' }}>
            <p>name : {pokemon.name}</p>
            <p>type : {pokemon.type}</p>
        </div>
    );
};
