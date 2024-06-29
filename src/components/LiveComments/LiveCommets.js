import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/commentActions';

const LiveComments = () => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postComment({ text: comment }));
        setComment('');
    };

    return (
        <div>
            <h1>Live Comments</h1>
            <ul>
                {comments.map((c) => (
                    <li key={c._id}>{c.text}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <button type="submit">Post Comment</button>
            </form>
        </div>
    );
};

export default LiveComments;