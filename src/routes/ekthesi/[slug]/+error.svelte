<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    // goto("/ekthesi");
    onMount(() => {
    goto("/ekthesi");
  });
</script>
<h2>Τα προϊόντα δεν μπορούν να φορτωθούν απευθείας! Επιστρέψτε στην έκθεση.</h2>
<a
    class="btn btn-lg variant-filled my-2"
    href="/ekthesi"
    rel="noreferrer"
>
    Έκθεση
</a>