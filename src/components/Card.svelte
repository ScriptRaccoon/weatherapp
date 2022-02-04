<script>
    import { fly } from "svelte/transition";
    export let data;
    $: console.log(data);
    $: city = data.name;
    $: temp = Math.round(data.main.temp);
    $: description = data.weather[0].description;
    $: icon = data.weather[0].icon;
    $: iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    $: country = data.sys.country;
    $: cloudiness = Math.round(data.clouds.all);
    $: windSpeed = data.wind.speed.toFixed(1);
</script>

{#key city}
    <div class="cardContainer">
        <div class="card" in:fly={{ x: -200 }} out:fly={{ x: +200 }}>
            <h1>Weather for {city} ({country})</h1>
            <div class="summary">
                <img src={iconURL} alt="weather icon" />
                <p class="description">
                    {description}
                </p>
            </div>
            <ul class="details">
                <li>
                    <img
                        src="./icons/temperature.png"
                        alt="temperature icon"
                    />
                    <span>
                        {temp}°
                    </span>
                </li>
                <li>
                    <img src="./icons/cloud.png" alt="cloud icon" />
                    <span>{cloudiness}%</span>
                </li>
                <li>
                    <img
                        src="./icons/wind.png"
                        alt="wind icon"
                    /><span>{windSpeed} m/s</span>
                </li>
            </ul>
        </div>
    </div>
{/key}

<style>
    .cardContainer {
        position: absolute;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }
    .card {
        border-radius: 20px;
        background-color: rgb(49, 118, 146);
        box-shadow: 0px 0px 20px rgba(240, 240, 255, 0.533);
        padding: 40px;
        font-size: 20px;
        margin: 0px 20px;
        max-width: 90%;
    }

    h1 {
        font-size: min(40px, 10vw);
        font-weight: 300;
        color: rgb(255, 238, 0);
    }

    .summary {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .summary img {
        max-width: 30vw;
    }

    .description {
        display: flex;
        align-items: center;
        font-size: 25px;
    }

    .details {
        display: flex;
        justify-content: space-between;
    }
    .details > * {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .details img {
        width: 45px;
    }

    @media (max-width: 440px) {
        .details {
            flex-direction: column;
        }
    }
    @media (max-width: 300px) {
        .summary {
            display: block;
            margin-bottom: 30px;
        }
    }
</style>
