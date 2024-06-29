import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadMusic } from '../../store/musicActions';

const MusicUpload = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('music', file);
        dispatch(uploadMusic(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
            />
            <button type="submit">Upload Music</button>
        </form>
    );
};

export default MusicUpload;