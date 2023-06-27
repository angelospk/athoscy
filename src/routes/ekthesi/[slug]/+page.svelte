<script lang="ts">
	export let data;
	
	import Slides from '../Slides.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
	const images=data.data;
    console.log(images)
	const dispatch = createEventDispatcher();
  let selectedImage = null;

  onMount(() => {
    document.addEventListener('keydown', handleKeyDown);
  });

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function openModal(image) {
    selectedImage = image;
    dispatch('open');
  }

  function closeModal() {
    selectedImage = null;
    dispatch('close');
  }
</script>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }

  .thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 5px;
    cursor: pointer;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal-image {
    max-width: 90%;
    max-height: 90%;
    cursor: zoom-in;
  }

  .zoomed {
    transform: scale(1.5);
    cursor: zoom-out;
  }
</style>

<a
					class="btn btn-sm variant-filled my-2"
					href="/ekthesi"
					rel="noreferrer"
				>
					Επιστροφή
				</a>
{#if images && images.length > 0}
    {#each images as item}
        <img src={item.src.replace("cdn","media").replace("com","net").replace("jpg","jpg?width=300&height=150")} alt={item.alt}/>
    {/each}
{:else}
    <p>No data found</p>
{/if}
