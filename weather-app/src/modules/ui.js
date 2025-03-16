export const initUI = () => {
    const button = document.getElementById('getWeather');
    button.addEventListener('click', () => {
        const city = document.getElementById('cityInput').value;
        console.log(`Fetching weather for: ${city}`);
    });
};