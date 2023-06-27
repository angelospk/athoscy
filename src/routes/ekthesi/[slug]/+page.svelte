<script lang="ts">
	export let data;
	
	const images=data.data;
    console.log(images)
	</script>

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
