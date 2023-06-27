<script lang="ts">
  // import { getContext } from 'svelte';
  import {csvDataStore} from '../../csvdata'
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  
// const t:any = getContext('csvData');
// console.log(t);
</script>
{#if $csvDataStore.length > 0}
<div class="flex flex-wrap mx-auto ">
{#each $csvDataStore[0].data as data}
<div class="m-1 hover:scale-125">
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


