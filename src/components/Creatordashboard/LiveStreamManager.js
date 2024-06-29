import React from 'react';
import { useDispatch } from 'react-redux';
import { startLiveStream } from '../../store/streamActions';

const LiveStreamManager = () => {
    const dispatch = useDispatch();

    const handleStartStream = () => {
        dispatch(startLiveStream());
    };

    return (
        <div>
            <h1>Manage Live Stream</h1>
            <button onClick={handleStartStream}>Start Live Stream</button>
        </div>
    );
};

export default LiveStreamManager;