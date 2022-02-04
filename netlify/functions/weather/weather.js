const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const fetch = require("node-fetch");

const handler = async (event) => {
    try {
        const city = event.queryStringParameters.city || "";
        const url = `${BASE_URL}?q=${city}&units=metric&APPID=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        return {
            statusCode: res.status,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.toString() }),
        };
    }
};

module.exports = { handler };
