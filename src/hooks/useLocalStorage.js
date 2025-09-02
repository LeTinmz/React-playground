import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            if (item && item.trim() !== '') {
                return JSON.parse(item);
            }
            return initialValue;
        } catch (error) {
            console.log(`Erreur lors du parsing de localStorage pour la clé "${key}":`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error(
                `Erreur lors de la sauvegarde en localStorage pour la clé "${key}":`,
                error
            );
        }
    }, [key, state]);

    return [state, setState];
};

export default useLocalStorage;
