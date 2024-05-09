import {React} from 'react';

export const WeatherDisplay = ({ weather }) => {
    const currentWeather = weather.current;
    const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;

    return (
        <div>
            <h2>Current Weather</h2>
            <p>Description: {currentWeather.weather[0].description}</p>
            <p>Temperature: {currentWeather.temp} K</p>
            <p>Humidity: {currentWeather.humidity}%</p>
            <img src={iconUrl} />
        </div>
    );
};

