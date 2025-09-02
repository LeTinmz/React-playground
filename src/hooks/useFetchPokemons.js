import React, { useState, useEffect } from 'react';

const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await res.json();
                const pokemonsData = data.results;

                const detailedPokemons = await Promise.all(
                    pokemonsData.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        const jsonRes = await res.json();
                        return {
                            id: jsonRes.id,
                            name: jsonRes.name,
                            type: jsonRes.types[0].type.name,
                        };
                    })
                );
                setPokemons(detailedPokemons);
            } catch (error) {
                setError(error);
                console.log(error.getMessage());
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return { pokemons, isLoading, error };
};

export default useFetchPokemons;
