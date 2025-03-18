import { formatWeatherData } from './utils.js';

export const initUI = (fetchWeather) => {
    const button = document.getElementById('getWeather');
    const output = document.getElementById('weatherOutput');
    
    button.addEventListener('click', async () => {
        const city = document.getElementById('cityInput').value;
        output.innerHTML = 'Loading...';
        
        try {
            const data = await fetchWeather(city);
            const formattedData = formatWeatherData(data);
            const { temp, humidity, description } = formattedData;
            
            output.innerHTML = `
                <div class="weather-card">
                    <h2>${city}</h2>
                    <p>Temp: ${temp}</p>
                    <p>Humidity: ${humidity}</p>
                    <p>${description}</p>
                </div>
            `;
        } catch (error) {
            output.innerHTML = `Error: ${error.message}`;
        }
    });
};