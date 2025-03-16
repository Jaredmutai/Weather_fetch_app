const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Get from openweathermap.org

export const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    
    // Destructuring weather data
    const { main: { temp, humidity }, weather: [{ description }] } = data;
    
    return { temp, humidity, description };
};