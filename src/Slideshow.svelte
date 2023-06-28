<!-- Slideshow.svelte -->
<script>
  let activeIndex = 0;
  const slides = [
    {
      imageUrl: "https://cdn.discordapp.com/attachments/814528759478747187/1122510062573854840/1-1.jpg",
      title: "Bυζαντινά εκκλησιαστικά χρυσοκεντήματα",
      align: "left",
      link: null,
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/814528759478747187/1122510063228166224/2-1.jpg",
      title:
        "Bιοτεχνια κατασκευής βυζαντινών χρυσοκεντημάτων & εκκλησιαστικών ειδών",
      align: "right",
      link: null,
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/814528759478747187/1122510062938751037/3.jpg",
      title: "Εξερευνήστε την έκθεση μας",
      align: "right",
      link: "/ekthesi",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/814528759478747187/1122510063467253800/despotes1.jpg",
      title: null,
      align: null,
      link: null,
    },
  ];

  const interval = setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
  }, 3000);
</script>

<style>
  .slideshow {
    /* position: relative; */
    overflow: hidden;
    width: 100%;
  }
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 600ms ease-in-out;
  }
  .slide.active {
    opacity: 1;
  }
  .hero-content {
    position: relative;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
  .hero-content.text-right {
    text-align: right;
  }
  .hero-title {
    font-size: 24px;
    color: white;
    margin: 0;
  }
  .ci-control-nav {
    position: relative;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    padding: 0;
    display: flex;
  }
  .ci-control-nav li {
    margin: 0 5px;
  }
  .ci-control-nav a {
    background: #fff;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    text-indent: -9999px;
    opacity: 0.5;
  }
  .ci-control-nav .ci-active {
    opacity: 1;
  }
</style>

<div class="slideshow">
  {#each slides as slide, index} 
  <div
      class="slide {activeIndex === index ? 'active' : ''}"
      style="background-image: url({slide.imageUrl})"
    >
      {#if slide.title}
        <div class={`hero-content ${slide.align === 'right' ? 'text-right' : ''}`}>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8 col-xs-12">
                <p class="hero-title">{slide.title}</p>
                {#if slide.link}
                  <a href={slide.link} class="btn btn-lg">Δείτε εδώ</a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/each}
  <ol class="ci-control-nav">
    {#each slides as _, index}
      <li><a href={_.link} class={activeIndex === index ? 'ci-active' : ''}>{index + 1}</a></li>
    {/each}
  </ol>
</div>
