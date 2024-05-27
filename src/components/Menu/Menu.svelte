<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  let inputElement: HTMLInputElement;
  let isChecked: boolean;
  const menu = {
    "Página Principal": "/#",
    Contacto: "",
  };
  const items: HTMLElement[] = [];

  function triggerItemsAnimation() {
    const tl = gsap.timeline();

    // tl[isChecked ? 'to' : 'from'](items, { left: 100 * +isChecked, duration: 0.5, stagger: 0.125 });
  }

  function playTick() {
    var audio = document.createElement("audio");

    // Set the crossOrigin attribute to 'anonymous'
    audio.crossOrigin = "anonymous";

    // Set the source of the audio element
    audio.src = "./SFX/tick2.mp3";

    audio.play();

    audio.remove();
  }

  onMount(() => {
    window.addEventListener("mouseover", () => {
      items.forEach((item) => {
        if (item.matches(":hover") || item.matches(":focus")) {
          playTick();
        }
      });
    });

    items.forEach((item) => {
      item.addEventListener("focus", () => {
        playTick();
      });
    });
  });
</script>

<div class="menu {isChecked ? 'open' : 'closed'}">
  <nav>
    <ul class="menu--list">
      {#each Object.entries(menu) as [itemKey, item]}
        <li class="menu--list-item">
          <a bind:this={items[items.length]} class="menu--anchor" href={item}
            >{itemKey}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</div>

<input
  on:change={triggerItemsAnimation}
  bind:this={inputElement}
  bind:checked={isChecked}
  class="two-line-to-x-ham-trigger"
  type="checkbox"
/>

<style lang="scss">
  .menu {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    backdrop-filter: blur(0rem);
    filter: blur(0rem);
    background: var(--color-outline);
    transition: 1s;
    opacity: 1;
    display: grid;
    place-items: center;
    justify-content: center;
    // transform: scale(1);

    &--list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &--list-item {
      position: relative;
      left: 0;
    }

    &--anchor {
      text-decoration: none;
      color: var(--color-background);
      font-family: var(--font-subtitle);
      font-size: clamp(20rem, 5vw, 30rem);
      position: relative;

      &:hover,
      &:focus {
        &::before {
          content: ">";
          position: absolute;
          left: calc(clamp(20rem, 5vw, 30rem) * -1.5);
        }
      }
    }

    &.closed {
      opacity: 0;
      backdrop-filter: blur(10rem);
      mix-blend-mode: color-burn;
      //   transform: scale(0.75);
      filter: blur(100rem);
    }
  }

  input[type="checkbox"].two-line-to-x-ham-trigger {
    --ham-size: calc(clamp(100rem, 30vw, 200rem) / 4);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: auto;
    background: transparent;
    border: 0;
    width: calc(var(--ham-size) * 1.275);
    height: calc(var(--ham-size) * 1.1);
    outline: none;

    position: fixed;
    top: calc(var(--ham-size) * 1.5);
    right: var(--ham-size);
    z-index: 2;

    &:after,
    &:before {
      content: "";
      width: var(--ham-size);
      height: calc(var(--ham-size) * 0.05);
      background: var(--color-background);
      display: block;
      position: absolute;
      transition: 0.3s;
      border-radius: 50rem;
    }

    &:after {
      top: calc(var(--ham-size) * 0.4);
    }

    &:before {
      top: calc(var(--ham-size) * 0.6);
    }

    &:checked {
      cursor: pointer;

      &:before {
        transform: rotate(-45deg);
      }

      &:after {
        transform: rotate(45deg);
      }

      &:after,
      &:before {
        top: calc(var(--ham-size) * 0.5);
      }
    }

    &:active {
      cursor: pointer;

      &:after,
      &:before {
        transform: rotate(0deg);
      }
    }
  }
</style>
