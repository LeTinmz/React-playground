import { useState, useEffect } from 'react';
import './App.css';
import Search from './Components/Search';
import hardCodedPokemons from './data/pokeData';
import { ResultList } from './Components/ResultList';
import useLocalStorage from './hooks/useLocalStorage';
import useFetchPokemons from './hooks/useFetchPokemons';

const App = () => {
    const [name, setName] = useLocalStorage('name', 'Pikachu');
    const [type, setType] = useLocalStorage('type', 'Electrik');
    const { pokemons, isLoading, error } = useFetchPokemons();

    const shouldSearch = name.length > 0 || type.length > 0;
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const clearSearch = () => {
        setName('');
        setType('');
    };

    const searchedPokemons = pokemons.filter(
        (p) =>
            p.name.toLowerCase().includes(name.toLowerCase()) &&
            p.type.toLowerCase().includes(type.toLowerCase())
    );
    return (
        <>
            <p>{!name ? 'Enter name' : name}</p>
            <Search value={name} placeholder="name" onInputChange={handleNameChange} />
            <br />
            <Search value={type} placeholder="type" onInputChange={handleTypeChange} />
            <br />
            {shouldSearch && <button onClick={clearSearch}>clear</button>}

            {shouldSearch &&
                !isLoading &&
                !error &&
                (searchedPokemons.length != 0 ? (
                    <ResultList pokeList={searchedPokemons} />
                ) : (
                    <p>yapa</p>
                ))}
        </>
    );
};

export default App;
