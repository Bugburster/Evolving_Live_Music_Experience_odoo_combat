import React from 'react';
import { useSelector } from 'react-redux';

const CreatorProfile = () => {
    const creator = useSelector((state) => state.auth.creator);

    return (
        <div>
            <h1>{creator.name}'s Profile</h1>
            <p>Email: {creator.email}</p>
        </div>
    );
};

export default CreatorProfile;
