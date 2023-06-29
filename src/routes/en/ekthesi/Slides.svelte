<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import { onMount } from "svelte";
  
    export let slides = [];
  
    let main: Splide;
    let thumbs: SplideSlide;
  
    const mainOptions = {
      type: "slide",
      perPage: 2,
      perMove: 1,
      gap: "1rem",
      pagination: false,
      height: "10rem",
    };
  
    const thumbsOptions = {
      type: "slide",
      rewind: true,
      gap: "1rem",
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: "center" as const,
      isNavigation: true,
      updateOnMove: true,
    };
  
    onMount(() => {
      if (main && thumbs) {
        main.sync(thumbs.splide);
      }
      console.log(slides);
    });
  
    function transformUrl(url:string) {
      return url.replace("cdn", "media").replace("com", "net").replace("jpg", "jpg?width=300&height=150");
    }
  </script>
  
  <div class="wrapper grid-flow-col ">
    <h2 id="thumbnails-example-heading">Thumbnails</h2>
  
    <Splide options={mainOptions} bind:this={main} aria-labelledby="thumbnails-example-heading">
      {#each slides as slide}
        <SplideSlide>
          <img src={slide.src} alt={slide.alt} />
        </SplideSlide>
      {/each}
    </Splide>
  
    <Splide options={thumbsOptions} bind:this={thumbs}>
      {#each slides as slide}
        <SplideSlide>
          <img src={transformUrl(slide.src)} alt={slide.alt} />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
  