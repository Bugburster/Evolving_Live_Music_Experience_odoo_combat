import React from 'react';
import { useSelector } from 'react-redux';
import LiveComments from '../LiveComments/LiveComments';

const LiveStream = () => {
    const liveStreamUrl = useSelector((state) => state.stream.url);

    return (
        <div>
            <h1>Live Stream</h1>
            <video src={liveStreamUrl} controls autoPlay />
            <LiveComments />
        </div>
    );
};

export default LiveStream;