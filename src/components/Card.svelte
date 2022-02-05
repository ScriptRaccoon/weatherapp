<script>
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    export let data;
    $: console.log(data);
    $: city = data.name;
    $: temp = Math.round(data.main.temp);
    $: description = data.weather[0].description;
    $: icon = data.weather[0].icon;
    $: iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    $: country = data.sys.country;
    $: cloudiness = Math.round(data.clouds.all);
    $: windSpeed = data.wind.speed.toFixed(1);
</script>

{#key data.name}
    <div class="cardContainer">
        <div
            class="card"
            in:fly={{ x: -200, duration: 700, easing: cubicOut }}
            out:fly={{ x: +200, duration: 700, easing: cubicOut }}
        >
            <h1>Weather for {city}</h1>
            <h2>{country}</h2>

            <div title="temperature" class="temperature">
                {temp}°C
            </div>

            <div title="weather" class="imageContainer">
                <img src={iconURL} alt="weather icon" />
            </div>

            <p class="description">{description}</p>

            <ul class="details">
                <li title="cloudiness">
                    <img
                        class="icon"
                        src="./icons/cloud.png"
                        alt="cloud icon"
                    />
                    <span>{cloudiness}%</span>
                </li>
                <li title="wind speed">
                    <img
                        class="icon"
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
        position: relative;
        display: flex;
        justify-content: center;
    }
    .card {
        position: absolute;
        border-radius: 20px;
        background-color: rgb(49, 118, 146);
        box-shadow: 0px 0px 20px rgba(240, 240, 255, 0.533);
        padding: 20px;
        font-size: 20px;
        max-width: min(400px, 90%);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1,
    h2 {
        font-size: min(40px, 10vw);
        font-weight: 300;
        color: rgb(255, 238, 0);
        align-self: flex-start;
    }

    h2 {
        font-size: min(20px, 5vw);
    }

    .temperature {
        font-size: 50px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 300;
    }

    .imageContainer {
        display: flex;
        justify-content: center;
    }

    .imageContainer img {
        display: block;
    }

    .description {
        text-align: center;
        transform: translateY(-20px);
        margin-bottom: 20px;
    }

    .details > * {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 16px;
    }

    .icon {
        width: 25px;
    }

    @media (min-width: 300px) {
        .details {
            display: flex;
            gap: 20px;
        }
    }
</style>
