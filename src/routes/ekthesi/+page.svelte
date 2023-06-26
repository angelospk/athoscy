<script lang="ts">
    // import { getContext } from 'svelte';
    import {csvDataStore} from '../../csvdata'
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    
  // const t:any = getContext('csvData');
  // console.log(t);
</script>
{#if $csvDataStore.length > 0}
{#each $csvDataStore[0].data as data}
<a href="/ekthesi/{data.url}">
    <button type="button" class="btn variant-filled my-1">{data.gr}</button>
</a>
<!-- <p>{data.url}</p> -->
{/each}
{:else}
<ProgressRadial font={12} class="bg-primary-hover-token content-center"  />
{/if}


