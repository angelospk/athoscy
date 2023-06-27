<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    
    export let data;
    
    let isModalOpen = false;
    let currentImage = '';
    let currentIndex = 0;

    const images = data.data;
    

    let modalClass = "modal";
    
    function handleClick(imgUrl, index) {
        currentImage = imgUrl;
        currentIndex = index;
        isModalOpen = true;
        modalClass = "modal open"; // Add class to trigger transition
        prefetchAdjacentImages();
    }

    function closeModal() {
        isModalOpen = false;
        modalClass = "modal"; // Reset class
    }
    
    function goToNextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            currentImage = images[currentIndex].src;
            prefetchAdjacentImages();
        }
    }

    function goToPreviousImage() {
        if (currentIndex > 0) {
            currentIndex--;
            currentImage = images[currentIndex].src;
            prefetchAdjacentImages();
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'ArrowRight') {
            goToNextImage();
        } else if (event.key === 'ArrowLeft') {
            goToPreviousImage();
        }
        else if (event.key === 'Escape'){
            closeModal();
        }
    }

    function prefetchImage(imgUrl) {
        const img = new Image();
        img.src = imgUrl;
    }
    function handleMouseMove(event) {
        const {left, top, width, height} = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;
        event.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
    }
    function prefetchAdjacentImages() {
        if (currentIndex > 0) {
            prefetchImage(images[currentIndex - 1].src);
        }
        if (currentIndex < images.length - 1) {
            prefetchImage(images[currentIndex + 1].src);
        }
    }
 
    onMount(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

    onDestroy(() => {
        window.removeEventListener('keydown', handleKeyDown);
    });
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
        z-index: 10;
    }

    .magnified-image {
        position: relative;
        /* left:10%; */
        width: 90%;
        height: 90%;
        background-repeat: no-repeat;
        background-size: 90%;
        background-position: center;
    }

    .arrow {
        position: absolute;
        top: 50%;
        font-size: 5em;
        color: white;
        cursor: hand;
        user-select: none;
    }

    .left-arrow {
        left: 10px;
    }

    .right-arrow {
        right: 10px;
    }
    .close-button {
        position: absolute;
        top: 40px;
        right: 40px;
        font-size: 5em;
        color: red;
        cursor: zoom-out;
    }
    .close-button:hover{
        scale: 150%;
    }
</style>

{#if isModalOpen}
    <div class={modalClass}>
        <div 
            class="magnified-image"
            style="background-image: url({currentImage})"
            on:mousemove={handleMouseMove}
            on:touchstart={handleMouseMove}
        >
            <span class="arrow left-arrow" on:click|preventDefault={goToPreviousImage}>&lt;</span>
            <span class="arrow right-arrow" on:click|preventDefault={goToNextImage}>&gt;</span>
        </div>
        <div class="close-button" on:click={closeModal} on:pointerover={closeModal}>&times;</div>
    </div>
{/if}

<a
    class="btn btn-lg variant-filled my-2"
    href="/ekthesi"
    rel="noreferrer"
>
    Επιστροφή
</a>

{#if images && images.length > 0}
    <div class="flex flex-wrap overflow-hidden">
    {#each images as item, index}
        <img 
            on:click={() => handleClick(item.src, index)} 
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
