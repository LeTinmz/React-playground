// Components/Search.js
import React from 'react';

const Search = ({ value, placeholder, onInputChange, className = 'search-input' }) => {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onInputChange}
            className={className}
        />
    );
};

export default Search;
