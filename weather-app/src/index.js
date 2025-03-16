import { initUI } from './modules/ui.js';
import { fetchWeather } from './modules/api.js';

initUI(fetchWeather);