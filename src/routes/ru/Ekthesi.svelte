<script lang="ts">
    import {csvDataStore} from '../../csvdata'
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    function resetScroll(){
      window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});
  }
  </script>
<div class="text-center justify-center place-content-center grid grid-flow-row">
<h3 class="text-3xl mb-10 my-4"> Έκθεση</h3>
{#if $csvDataStore.length > 0}
{#each $csvDataStore[0].data as data}
<div class="m-1 hover:scale-125">
<a href="/en/ekthesi/{data.url}" on:click={resetScroll}>
<button type="button" class="btn variant-filled my-2 text-xl rounded-2xl">{data.ru}</button>
</a></div>
<!-- <p>{data.url}</p> -->
{/each}
{:else}
<ProgressRadial font={10} class=""  />
<h3 class="text-lg">Φορτώνονται τα διαθέσιμα προϊόντα της έκθεσής μας...</h3>
{/if}
</div>