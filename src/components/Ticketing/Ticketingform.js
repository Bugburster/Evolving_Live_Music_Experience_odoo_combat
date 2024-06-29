import React, { useState } from 'react';

const TicketingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        tickets: 1,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the ticket purchase API call here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Event:</label>
                <input type="text" name="event" value={formData.event} onChange={handleChange} />
            </div>
            <div>
                <label>Tickets:</label>
                <input type="number" name="tickets" value={formData.tickets} onChange={handleChange} />
            </div>
            <button type="submit">Purchase Tickets</button>
        </form>
    );
};

export default TicketingForm;