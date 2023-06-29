<script>
    import { onMount } from "svelte";

    export let images = [];
    console.log(images);
    let selectedIndex = null;
    let zoom = 1;

    const handleThumbnailClick = index => {
        selectedIndex = index;
    };

    const handleMouseMove = event => {
        if (selectedIndex !== null) {
            const { offsetX, offsetY } = event;
            const { offsetWidth, offsetHeight } = event.target;
            const x = (offsetX / offsetWidth) * 100;
            const y = (offsetY / offsetHeight) * 100;
            event.target.style.backgroundPosition = `${x}% ${y}%`;
        }
    };
</script>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
    }
    .thumbnail {
        width: 100px;
        height: 100px;
        margin: 5px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
    }
    .full-size {
        width: 600px;
        height: 400px;
        margin: 20px auto;
        background-size: 200% auto;
        background-position: center;
        cursor: zoom-in;
    }
</style>
{JSON.stringify(images)}
<div class="gallery">
    {#each images as image, index}
        <div
            class="thumbnail"
            style="background-image: url({image})"
            on:click={() => handleThumbnailClick(index)}
        ></div>
    {/each}
</div>

{#if selectedIndex !== null}
    <div
        class="full-size"
        style="background-image: url({images[selectedIndex]})"
        on:mousemove={handleMouseMove}
    ></div>
{/if}
