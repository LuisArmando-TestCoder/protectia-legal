<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  let titleElements: HTMLElement[] = [];
  let subtitleElements: HTMLElement[] = [];
  let loadingElements: HTMLElement[] = [];
  const titleWords = "Protectia Legal".trim().split(" ");
  const subtitleWords =
    "Litigios en Procesos de Familia, Civil, Laboral, Tránsito y Penal"
      .trim()
      .split(" ");

  onMount(() => {
    const timeAccelerator = Number(sessionStorage.getItem('timeAccelerator')) || 1;

    sessionStorage.setItem('timeAccelerator', '0.5');


    const tl1 = gsap.timeline();
    tl1.to(titleElements.reverse(), {
      delay: 1.2 * timeAccelerator,
      duration: 0.6 * timeAccelerator,
      stagger: 0.125 * timeAccelerator,
      color: "#24395900",
    });

    const tl2 = gsap.timeline();
    tl2
      .to(subtitleElements, {
        delay: 0.6 * timeAccelerator,
        duration: 0.6 * timeAccelerator,
        stagger: 0.125 / 4 * timeAccelerator,
        color: "#fff",
      })
      .from(subtitleElements, {
        duration: 1.2 * timeAccelerator,
        stagger: 0.125 / 4 * timeAccelerator,
        color: "#243959",
      });

    tl2.to(loadingElements, { duration: 1 * timeAccelerator, opacity: 0 }, "-=" + 2.1 * timeAccelerator);

    const tl3 = gsap.timeline();

    tl3.to(loadingElements[1], {
      duration: 1.2 * timeAccelerator,
      filter: "blur(0rem)",
      background: "#1b1b1b",
    });
  });
</script>

<div
  bind:this={loadingElements[loadingElements.length]}
  class="loading-back"
></div>
<div bind:this={loadingElements[loadingElements.length]} class="loading">
  <h2 class="loading--title">
    {#each titleWords as titleWord}
      <span class="loading--title-word">
        {#each titleWord.split("") as titleLetter}
          <span bind:this={titleElements[titleElements.length]}
            >{titleLetter}</span
          >
        {/each}
      </span>

      <span class="invisible">.</span>
    {/each}
  </h2>

  <h3 class="loading--subtitle">
    {#each subtitleWords as subtitleWord}
      <span>
        {#each subtitleWord.split("") as subtitleLetter}
          <span bind:this={subtitleElements[subtitleElements.length]}
            >{subtitleLetter}</span
          >
        {/each}
      </span>

      <span class="invisible">_</span>
    {/each}
  </h3>
</div>

<style lang="scss">
  .invisible {
    opacity: 0;
  }
  .loading-back {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-outline);
    pointer-events: none;
    z-index: 3;
  }
  .loading {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-outline);
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    justify-content: center;
    padding: 50rem;
    filter: blur(5rem);
    mix-blend-mode: color-dodge;
    z-index: 3;

    &--title {
      color: var(--color-background);
      font-family: var(--font-paragraph);
      font-size: clamp(30rem, 5vw, 200rem);
      display: flex;
      place-items: center;
      flex-wrap: wrap;

      &-word {
        @media screen and (max-width: 1024px) {
          display: block;
          width: 100%;
          line-height: 0;
          text-align: center;
          position: relative;
          top: 10vh;
        }
      }
    }

    &--subtitle {
      color: transparent;
      font-family: var(--font-subtitle);
      font-size: 20rem;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      place-items: center;
    }
  }
</style>
