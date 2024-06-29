import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMusic } from '../../store/musicActions';

const MusicFilter = () => {
    const [genre, setGenre] = useState('');
    const [artist, setArtist] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(searchMusic({ genre, artist }));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default MusicFilter;