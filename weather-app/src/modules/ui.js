import { formatWeatherData } from './utils.js';

export const initUI = (fetchWeather) => {
    const button = document.getElementById('getWeather');
    const output = document.getElementById('weatherOutput');
    
    button.addEventListener('click', () => {
        const city = document.getElementById('cityInput').value;
        output.innerHTML = 'Loading...';
        
        fetchWeather(city)
            .then(data => formatWeatherData(data))
            .then(({ temp, humidity, description }) => {
                output.innerHTML = `
                    <div class="weather-card">
                        <h2>${city}</h2>
                        <p>Temp: ${temp}</p>
                        <p>Humidity: ${humidity}</p>
                        <p>${description}</p>
                    </div>
                `;
            })
            .catch(error => {
                output.innerHTML = `Error: ${error.message}`;
            });
    });
};