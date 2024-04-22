import React, { useState } from 'react';
import LocationSearch from './LocationSearch';
import { WeatherDisplay } from './WeatherDisplay';
import NewsDisplay from './NewsDisplay';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);

    const handleLocationSubmit = async (input) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(input)}&limit=1&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        const { lat, lon } = data[0];
        const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;

        const oneCallResponse = await fetch(oneCallUrl);
        const oneCallData = await oneCallResponse.json();
        setWeatherData(oneCallData);
    };

    return (
        <>
            <h1>Weather and News App</h1>
            <LocationSearch onLocationSubmit={handleLocationSubmit} />
            {weatherData && <WeatherDisplay weather={weatherData} />}
            <NewsDisplay />
        </>
    );
};

export default WeatherApp;

