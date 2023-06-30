<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    // goto("/ekthesi");
    onMount(() => {
    goto("/en/ekthesi");
  });
</script>
<h2>Products cannot be loaded directly! Return to the exhibition.</h2>
<a
    class="btn btn-lg variant-filled my-2"
    href="/en/ekthesi"
    rel="noreferrer"
>
    Exhibition
</a>