import React, { useState } from 'react';
import Button from '@mui/material/Button';

const LocationSearch = ({ onLocationSubmit }) => {
    const [input, setInput] = useState('');

    return (
        <>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a location (address, city, zip code)"
                style={{ padding: '10px', fontSize: '16px', width: '300px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => onLocationSubmit(input)}
                style={{ marginLeft: '10px' }} 
            >
                Get Weather
            </Button>
        </>
    );
};

export default LocationSearch;
