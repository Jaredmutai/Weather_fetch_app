export const formatWeatherData = ({ temp, humidity, description }) => ({
    temp: `${Math.round(temp)}°C`,
    humidity: `${humidity}%`,
    description: description.toUpperCase()
});