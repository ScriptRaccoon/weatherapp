<script>
    import Card from "./components/Card.svelte";
    import Form from "./components/Form.svelte";
    let data;
</script>

<Form bind:data />

<main>
    {#if data && data.name}
        <Card {data} />
    {/if}
</main>

<style>
    :global(body) {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: rgb(93, 168, 197);
        color: white;
        overflow-x: hidden;
    }
    :global(:root) {
        --gradient: linear-gradient(
            rgb(66, 120, 141),
            rgb(66, 107, 124)
        );
    }
    main {
        position: relative;
    }
</style>
