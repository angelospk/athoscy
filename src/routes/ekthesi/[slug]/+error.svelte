<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    // goto("/ekthesi");
    onMount(() => {
    goto("/ekthesi");
  });
</script>
<h2>Το υλικό δεν μπορεί να φορτωθεί απευθείας!  Επέστρεψε στην έκθεση.</h2>
<a
    class="btn btn-lg variant-filled my-2"
    href="/ekthesi"
    rel="noreferrer"
>
    Έκθεση
</a>