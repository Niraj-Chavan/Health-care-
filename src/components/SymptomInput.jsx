import React, { useState } from 'react';

const SymptomInput = ({ onSubmit }) => {
    const [symptom, setSymptom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(symptom);
        setSymptom('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                placeholder="Enter symptom"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SymptomInput;