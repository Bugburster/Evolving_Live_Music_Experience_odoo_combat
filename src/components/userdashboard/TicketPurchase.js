import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { purchaseTicket } from '../../store/ticketActions';

const TicketPurchase = () => {
    const [event, setEvent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(purchaseTicket({ event }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Event Name"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                required
            />
            <button type="submit">Purchase Ticket</button>
        </form>
    );
};

export default TicketPurchase;