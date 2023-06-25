<script lang="ts">
    export let data;
    import { csvDataStore } from '../../../csvdata';
    const t = $csvDataStore;
    const names = t.filter(x => x.sheetName === "names")[0].data;


let d = [];
let sh = names.filter(x => x.url === data.slug);
console.log(sh);
let sname = '';
if (sh.length > 0) {
    sname = sh[0].sheet_name; // Assuming that sh[0] has the property sheet_name
}

if (sname !== '') {
    const a = t.filter(x => x.sheetName === sname);
    if (a.length > 0) {
        d = a[0].data; // Assuming that a[0] has the property data
    }
}

console.log(d);


</script>

{#if d && d.length > 0}
    {#each d as item}
        <p>{JSON.stringify(item)}</p>
        <img src={item.url.replace("cdn","media").replace("com","net").replace("jpg","jpg?width=300&height=150")} alt={item.name}/>
    {/each}
{:else}
    <p>No data found</p>
{/if}
