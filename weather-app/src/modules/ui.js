export const initUI = (fetchWeather) => {
    const button = document.getElementById('getWeather');
    button.addEventListener('click', () => {
        const city = document.getElementById('cityInput').value;
        fetchWeather(city)
            .then(({ temp, humidity, description }) => {
                document.getElementById('weatherOutput').innerHTML = `
                    Temperature: ${temp}°C<br>
                    Humidity: ${humidity}%<br>
                    Weather: ${description}
                `;
            })
            .catch(error => console.error('Error:', error));
    });
};