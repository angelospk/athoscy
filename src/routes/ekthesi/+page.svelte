<script lang="ts">
  // import { getContext } from 'svelte';
  import {csvDataStore} from '../../csvdata'
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  
// const t:any = getContext('csvData');
// console.log(t);
</script>
{#if $csvDataStore.length > 0}
<div class="flex-auto grid grid-flow-row md:grid-cols-2 mx-auto content-center place-items-center">
{#each $csvDataStore[0].data as data}
<div class="p-0 text-center m-4">
<a href="/ekthesi/{data.url}">
<img src={data.img} alt={data.gr} class="rounded-full">  
<button type="button" class="btn variant-filled my-2 text-xl rounded-2xl">{data.gr}</button>
</a></div>
<!-- <p>{data.url}</p> -->
{/each}
</div>
{:else}
<ProgressRadial font={15} class="bg-primary-hover-token w-10"  />
{/if}


