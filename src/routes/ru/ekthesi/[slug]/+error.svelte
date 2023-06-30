<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    // goto("/ekthesi");
    onMount(() => {
    goto("/ru/ekthesi");
  });
</script>
<h2>Продукты не могут быть загружены напрямую! Вернуться на выставку.</h2>
<a
    class="btn btn-lg variant-filled my-2"
    href="/ru/ekthesi"
    rel="noreferrer"
>
 выставку
</a>