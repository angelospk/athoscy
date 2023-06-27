<script lang="ts">
    export let data;
    
    let isModalOpen = false;
    let currentImage = '';

    const images = data.data;
    
    function handleClick(imgUrl) {
        currentImage = imgUrl;
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }
    
    function handleMouseMove(event) {
        const {left, top, width, height} = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;
        event.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
    }

    function prefetchImage(imgUrl) {
        const img = new Image();
        img.src = imgUrl;
    }
</script>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .magnified-image {
        width: 90%;
        height: 90%;
        background-repeat: no-repeat;
        background-size: 100%;
    }
</style>

{#if isModalOpen}
    <div class="modal" on:click={closeModal}>
        <div 
            class="magnified-image"
            style="background-image: url({currentImage})"
            on:mousemove={handleMouseMove}
        ></div>
    </div>
{/if}

<a
    class="btn btn-sm variant-filled my-2"
    href="/ekthesi"
    rel="noreferrer"
>
    Επιστροφή
</a>

{#if images && images.length > 0}
    <div class="flex flex-wrap overflow-hidden">
    {#each images as item}
        <img 
            on:click={() => handleClick(item.src)} 
            on:mouseenter={() => prefetchImage(item.src)}
            class="m-3 mx-auto hover:cursor-zoom-in" 
            src={item.src.replace("cdn","media").replace("com","net").replace("jpg","jpg?width=240&height=160")} 
            alt={item.alt}
        />
    {/each}
    </div>   
{:else}
    <p>No data found</p>
{/if}
