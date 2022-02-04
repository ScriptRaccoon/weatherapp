const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherData(city) {
    const url = `${BASE_URL}?q=${city}&units=metric&APPID=${API_KEY}`;
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw "Could not load weather data";
        }
    } catch (error) {
        return { error };
    }
}
