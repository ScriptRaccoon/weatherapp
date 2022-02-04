<script>
    export let data = {};
    import { getWeatherData } from "../api.js";
    let value = "";
    let error = "";
    async function makeAPICall() {
        const weatherData = await getWeatherData(value);
        if (weatherData.error) {
            error = weatherData.error;
        } else {
            error = "";
            data = weatherData;
            value = weatherData.name;
        }
    }
</script>

<form on:submit|preventDefault={makeAPICall}>
    <label for="cityInput">City</label>
    <input
        type="text"
        id="cityInput"
        bind:value
        autocomplete="off"
        placeholder="City"
    />
    <button type="submit">Submit</button>

    <p id="error">{error}</p>
</form>

<style>
    label {
        visibility: hidden;
    }
    form {
        text-align: center;
        font-size: 22px;
        margin: 50px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #error {
        color: rgb(122, 58, 93);
        font-weight: bold;
    }
    input {
        width: 200px;
        border-bottom: 1px solid white;
        text-align: center;
        font-family: Consolas, monospace;
        opacity: 0.6;
        transition: opacity 100ms linear;
    }
    input:focus-visible {
        opacity: 1;
    }
    button {
        margin: 20px 5px;
        background: linear-gradient(
            rgb(66, 120, 141),
            rgb(66, 107, 124)
        );
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 16px;
    }
    button:hover,
    button:focus-visible {
        filter: brightness(0.9);
    }
</style>
