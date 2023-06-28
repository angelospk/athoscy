<script lang="ts">
    import {csvDataStore} from '../csvdata'
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    
  </script>
<div class="text-center justify-center">
<h3 class="text-3xl mb-10 my-4"> Έκθεση</h3>
{#if $csvDataStore.length > 0}
{#each $csvDataStore[0].data as data}
<div class="m-1 hover:scale-125">
<a href="/ekthesi/{data.url}">
<button type="button" class="btn variant-filled my-2 text-xl rounded-2xl">{data.gr}</button>
</a></div>
<!-- <p>{data.url}</p> -->
{/each}
{:else}
<ProgressRadial font={15} class="bg-primary-hover-token w-10"  />
{/if}
</div>