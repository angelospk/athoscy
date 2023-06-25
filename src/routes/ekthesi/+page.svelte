<script lang="ts">
    import { getContext } from 'svelte';
    import {csvDataStore} from '../../csvdata'
  const t:any = getContext('csvData');
  console.log(t);
</script>
{#if $csvDataStore.length > 0}
{#each $csvDataStore as data}
<p>{data.url}</p>
{/each}
{:else}
<p>loading...</p>
{/if}


