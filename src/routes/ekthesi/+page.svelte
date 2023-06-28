<script lang="ts">
  import {csvDataStore} from '../../csvdata'
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  
</script>
{#if $csvDataStore.length > 0}
<div class="flex flex-wrap mx-auto overflow-hidden ">
{#each $csvDataStore[0].data as data}
<a href="/ekthesi/{data.url}">
<div class="w-fit md:w-full p-30 m-3 rounded-lg transition duration-300 ease-in-out hover:scale-110"
style="height:300px; width:450px; background-image: url({data.img}); ">

<!-- <img src={data.img} alt={data.gr} class="rounded-full">   -->
<!-- <button type="button" style="position:relative; top:80%;" class="btn variant-filled my-2 text-xl rounded-2xl">{data.gr}</button> -->
<p style="position:relative; top:90%;" class="my-1 text-2xl w-fit rounded-lg text-white bg-stone-500 bg-opacity-40">{data.gr}</p>
</div></a>
<!-- <p>{data.url}</p> -->
{/each}
</div>
{:else}
<ProgressRadial font={15} class="bg-primary-hover-token w-10"  />
{/if}


