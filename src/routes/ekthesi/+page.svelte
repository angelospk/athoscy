<script lang="ts">
    import { onMount } from 'svelte/internal';
	import pkg from 'papaparse';
	const { parse } = pkg;

    let t:any=[];
    onMount(async () => {
    let url =
		// 'https://docs.google.com/spreadsheets/d/1gcRGRCKHM-nVmGr5LgPnU-IcmPEQ1eqAAtHoqMqSr08/export?format=csv#gid=1878501122';
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmh5F6SfUqZdK4wPc8gG36n12Tz1Bg69xSLcG9eZpyke16FoniwDk3ztGGJJNE38RSuaJQ-icX_1AP/pub?gid=113001344&single=true&output=csv';
	//fetch url
	let response = await fetch(url);
	//convert to text
	let text = await response.text();
	// Parse the CSV text
	const parsedData = parse(text, { header: true }).data;
    console.log(text);
    console.log(parsedData);
    t=parsedData;

    });
</script>
{#if t.length!=0}
{#each t as data}
<p>{data.url}</p>
{/each}
{:else}
<p>loading...</p>
{/if}


