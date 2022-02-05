<script>
    export let data = {};
    let value = "";
    let error = "";
    async function makeAPICall() {
        try {
            const res = await fetch(`/api/weather?city=${value}`);
            const resData = await res.json();
            if (res.ok) {
                error = "";
                data = resData;
                value = data.name;
            } else {
                throw resData.message;
            }
        } catch (err) {
            error = err;
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

    <button type="submit">Get Weather</button>

    <p id="error">{error}</p>
</form>

<style>
    label {
        visibility: hidden;
    }
    ::placeholder {
        color: white;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
        color: white;
    }

    ::-ms-input-placeholder {
        color: white;
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
        max-width: 300px;
        padding: 5px !important;
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
