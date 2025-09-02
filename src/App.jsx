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
        <div className="App">
            {/* Header */}
            <div className="app-header">
                <h1 className="app-title">PokéSearch</h1>
                <p className="app-subtitle">Trouvez votre Pokémon préféré</p>
            </div>

            {/* Section de recherche */}
            <div className="search-section">
                <div className={`name-display ${!name ? 'empty' : ''}`}>
                    {!name ? 'Entrez un nom de Pokémon' : `Recherche: ${name}`}
                </div>

                <Search
                    value={name}
                    placeholder="Nom du Pokémon (ex: Pikachu)"
                    onInputChange={handleNameChange}
                    className="search-input"
                />

                <Search
                    value={type}
                    placeholder="Type du Pokémon (ex: Electric)"
                    onInputChange={handleTypeChange}
                    className="search-input"
                />

                {shouldSearch && (
                    <button className="clear-button" onClick={clearSearch}>
                        Effacer la recherche
                    </button>
                )}
            </div>

            {/* Section des résultats */}
            <div className="results-section">
                {/* Loading */}
                {isLoading && (
                    <div className="loading">
                        <div className="spinner"></div>
                    </div>
                )}

                {/* Erreur */}
                {error && (
                    <div className="error-message">
                        Erreur lors du chargement des Pokémon: {error}
                    </div>
                )}

                {/* Résultats */}
                {shouldSearch &&
                    !isLoading &&
                    !error &&
                    (searchedPokemons.length > 0 ? (
                        <ResultList pokeList={searchedPokemons} />
                    ) : (
                        <div className="no-results">
                            <span className="no-results-emoji">😕</span>
                            <p className="no-results-text">
                                Aucun Pokémon trouvé pour cette recherche
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default App;
