<script>
  import { onMount } from 'svelte';

  export let imageUrl;
  export let zoom = 0;

  let img;
  let glass;

  onMount(() => {
    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;
    const bw = 1;

    glass.style.backgroundImage = `url('${imageUrl}')`;
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    const moveMagnifier = (e) => {
      e.preventDefault();
      const { x, y } = getCursorPos(e);
      const xPos = Math.max(w / zoom, Math.min(img.width - (w / zoom), x));
      const yPos = Math.max(h / zoom, Math.min(img.height - (h / zoom), y));
      glass.style.left = `${xPos - w}px`;
      glass.style.top = `${yPos - h}px`;
      glass.style.backgroundPosition = `-${((xPos * zoom) - w + bw)}px -${((yPos * zoom) - h + bw)}px`;
    };

    const getCursorPos = (e) => {
      const a = img.getBoundingClientRect();
      const x = e.pageX - a.left - window.pageXOffset;
      const y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    };

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
  });
</script>

<div class="img-magnifier-container">
  <div class="img-magnifier-glass" bind:this={glass}></div>
  <img bind:this={img} src={imageUrl} alt="Magnify" />
</div>

<style>
  * { box-sizing: border-box; }

  .img-magnifier-container {
    position: relative;
  }

  .img-magnifier-glass {
    position: absolute;
    border: 3px solid #000;
    border-radius: 40%;
    cursor: none;
    width: 150px;
    height: 150px;
  }
</style>
