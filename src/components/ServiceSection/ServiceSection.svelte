<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import Text from "../Text/Text.svelte";
  import Schedule from "../Schedule/Schedule.svelte";
  import { onMount } from "svelte";

  export let name: string;
  export let backgroundImage: string;
  export let id: string = String(Math.random());
  export let onClick: MouseEventHandler<HTMLElement>;

  let isOpen: boolean = false;

  function decodeURLEncodedToUTF8(encodedString: string) {
    try {
      // Use decodeURIComponent to decode URL-encoded string
      return decodeURIComponent(encodedString);
    } catch (e) {
      console.error("Error decoding the string:", e);
      return null; // Return null or handle the error in a way you prefer
    }
  }

  onMount(() => {
    const getId = () => decodeURLEncodedToUTF8(window.location.hash)?.replace('#', '');

    isOpen = getId() == id;

    window.addEventListener("click", () => {
      setTimeout(() => {
        isOpen = getId() == id;
      })
    });
  });
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
  on:click={() => {
    isOpen = !isOpen;
    document.location.assign(`/servicios#${id}`);
  }}
  on:blur={() => {}}
  tabindex={0}
  {id}
  class="section {isOpen}"
>
  <div class="section--bg" style="background-image: url({backgroundImage})" />
  <div class="section--content">
    <Text type="subtitle" text={name} />
    <div class="hidden-container">
      <div class="scrollable">
        <slot></slot>
      </div>
      <Schedule text="AGENDAR CITA" theme="official" />
    </div>
  </div>
</section>

<style lang="scss">
  .section {
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
    width: 100vw;
    height: 100%;
    display: flex;
    place-items: center;
    padding-left: 0rem;
    // justify-content: center;
    position: relative;
    transform: scale(1) blur(25rem);
    transition: var(--transition-shortest-duration);
    color: var(--color-background);
    font-family: var(--font-subtitle);

    &--content {
      transition: var(--transition-short-duration);
      z-index: 1;
      padding-left: 75rem;
      width: 100%;
      transform: scale(0.75);
    }

    .scrollable {
      overflow: hidden;
      height: 0;
      opacity: 0;
      margin-bottom: 0;
      transition: var(--transition-short-duration);
    }

    .hidden-container {
      padding-top: var(--ham-size);
      opacity: 0;
      // filter: blur(100rem);
      width: 0;
      transition: var(--transition-short-duration);
      transition-delay: var(--transition-shortest-duration);
      pointer-events: none;
    }

    &.true {
      .hidden-container {
        width: 100%;
        opacity: 1;
        // filter: blur(0rem);
        pointer-events: all;
      }

      .scrollable {
        overflow: hidden;
        height: 0;
        height: 300rem;
        overflow-y: auto;
        opacity: 1;
        margin-bottom: var(--ham-size);
      }
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

    @media screen and (min-width: 1400px) and (max-width: 1024px) {
      .section--bg {
        background-size: 200%;
        transform: scale(1.125);
      }

      &:hover {
        .section--bg {
          background-size: 200%;
          transform: scale(1.125);
        }
      }
    }

    @media screen and (min-width: 1024px) {
      transform: scale(1.5);
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

      .scrollable {
        width: 80%;
      }

      &:hover {
        // letter-spacing: 15.5rem;

        .section--bg {
          background-size: 100%;
          transform: scale(1.125);
          filter: brightness(0.125);
        }
      }

      &:first-child {
        clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
      &:last-child {
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
      }

      &.true {
        .section--content {
          width: 375rem;
          padding-left: 100rem;
        }
      }

      &:first-child {
        z-index: 1;
      }
    }

    &:hover {
      // letter-spacing: 15.5rem;
      // width: 500rem;

      .section--bg {
        background-size: 110%;
        transform: scale(1.125) skew(-1deg);
        filter: brightness(0.125);
      }
    }

    &--content {
      transition: var(--transition-short-duration);
      z-index: 1;
      padding-left: 75rem;
      width: 100rem;
      transform: scale(0.75);
    }

    @media screen and (max-width: 1024px) {
      &--content {
        width: 100%;
      }
    }
  }
</style>
