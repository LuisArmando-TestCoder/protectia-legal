<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  export let backgroundImage: string;
  export let id: string = String(Math.random());
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section tabindex={0} {id} class="section">
  <div class="section--bg" style="background-image: url({backgroundImage})" />
  <div class="section--content">
    <slot></slot>
  </div>
</section>

<style lang="scss">
  .section {
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
    width: 100vw;
    height: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    position: relative;
    transform: scale(1) blur(25rem);
    // letter-spacing: 15rem;
    transition: var(--transition-shortest-duration);

    &:first-child {
      z-index: 1;
    }

    @media screen and (min-width: 1024px) {
      transform: scale(1.5);
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      width: 100%;

      &:first-child {
        clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
      &:last-child {
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
      }
    }

    &:hover {
      // letter-spacing: 15.5rem;
      // width: 500px;

      .section--bg {
        background-size: 110%;
        transform: scale(1.125) skew(2deg);
        filter: brightness(.125);
      }
    }

    &--content {
      z-index: 1;
    }

    &--bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: 100%;
      background-position: center;
      transition: var(--transition-short-duration);
      filter: brightness(50%);
    }
  }
</style>
