<script lang="ts">
  import {csvDataStore} from '../../csvdata'
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  export let data;
  const names=data.data;
  console.log(names);
  function resetScroll(){
    window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});
  }
</script>
<style>
  .placeholder{
    width:450px;
    height: 300px;
  }
  @keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}
.image{
  max-width:405px;
  min-width: 19rem;
}
.dots {
    animation: blink 0.75s infinite;
}
</style>
{#if $csvDataStore.length > 0}
<div class="flex flex-wrap mx-auto overflow-hidden ">
{#each $csvDataStore[0].data as data}
<a href="/ekthesi/{data.url}" on:click={resetScroll}>
<div class="image p-30 m-3 rounded-lg transition duration-300 ease-in-out hover:scale-110"
style="height:270px; background-image: url({data.img}); background-position: center; background-size:70% background-repeat:no-repeat; ">
<!--  width:450px; -->
<!-- <img src={data.img} alt={data.gr} class="rounded-full">   -->
<!-- <button type="button" style="position:relative; top:80%;" class="btn variant-filled my-2 text-xl rounded-2xl">{data.gr}</button> -->
<p style="position:relative; top:90%;" class="my-1 text-2xl w-fit rounded-lg text-white bg-stone-500 bg-opacity-40">{data.gr}</p>
</div></a>
<!-- <p>{data.url}</p> -->
{/each}
</div>
{:else}
<div class="grid grid-flow-row justify-center text-center">
<!-- <ProgressRadial font={15} style="position:relative;right:50%;" class="bg-primary-hover-token w-10"  /> -->

</div>
<section class="card ">
	<h3 class="text-2xl mb-6">
    Φορτώνονται τα διαθέσιμα προϊόντα της έκθεσής μας
    <span class="dots animate-dots">...</span>
  </h3>
  <div class="">
		<div class="flex flex-wrap mx-auto overflow-hidden">
			<div class="placeholder animate-pulse p-30 m-3" />
			<div class="placeholder animate-pulse p-30 m-3" />
			<div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
      <div class="placeholder animate-pulse p-30 m-3" />
		</div>
	</div>
</section>

{/if}


