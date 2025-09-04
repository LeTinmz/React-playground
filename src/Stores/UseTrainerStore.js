import { create } from 'zustand';

const useTrainerStore = create((set, get) => ({
    caughtPokemons: [],
    addPokemon: (pokemon) => {
        const { caughtPokemons } = get();
        if (caughtPokemons.length >= 6) {
            alert('Vous ne pouvez pas capturer plus de 6 Pokémons !');
            return;
        }

        if (caughtPokemons.find((p) => p.id === pokemon.id)) {
            alert(`${pokemon.name} est déjà dans votre équipe !`);
            return;
        }
        set((state) => ({
            caughtPokemons: [...state.caughtPokemons, pokemon],
        }));
    },
    removePokemon: (pokemonId) => {
        set((state) => ({
            caughtPokemons: state.caughtPokemons.filter((p) => p.id !== pokemonId),
        }));
    },
}));

export default useTrainerStore;
