import { useState, useEffect } from 'react';

const Search = ({ value, placeholder, onInputChange }) => {
    return (
        <>
            <input type="text" value={value} onChange={onInputChange} placeholder={placeholder} />
        </>
    );
};

export default Search;
