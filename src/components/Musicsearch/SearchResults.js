import React from 'react';
import { useSelector } from 'react-redux';

const SearchResults = () => {
    const results = useSelector((state) => state.music.searchResults);

    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {results.map((music) => (
                    <li key={music._id}>{music.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;