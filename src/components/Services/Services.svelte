<script lang="ts">
  import ServiceSection from "../ServiceSection/ServiceSection.svelte";
  import { services, images } from "../../components/data/services";

  let servicesElement: HTMLElement;
</script>

<div bind:this={servicesElement} class="services">
  {#each Object.entries(services) as [service, subservices]}
    <ServiceSection
      name={service}
      onClick={() => {
        document.location.assign(`/servicios#${service.replace(" ", "-")}`);
      }}
      id={service.replace(" ", "-")}
      backgroundImage={images[Object.keys(services).indexOf(service)]}
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <ul>
        {#each subservices as subservice}
          <li>
            {subservice}
          </li>
        {/each}
      </ul>
    </ServiceSection>
  {/each}
  <!-- <button
  on:mouseenter={() => {
    servicesElement.scrollTo(0, 0)
  }} class="services--button services--button-left">
    <img src="./icons/fast-forward-double-right-arrows-symbol-2.svg" alt="arrow button to scroll">
  </button>
  <button
  on:mouseenter={() => {
    servicesElement.scrollTo(10000, 0)
  }}
  class="services--button services--button-right">
    <img src="./icons/fast-forward-double-right-arrows-symbol-2.svg" alt="arrow button to scroll">
  </button> -->
</div>

<style lang="scss">
  .services {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: auto;

    @media screen and (max-width: 1024px) {
      width: 100vw;
      display: grid;
      overflow-y: auto;
      overflow-x: hidden;
      padding-top: calc(var(--ham-size) * 3);
    }

    @media screen and (min-width: 1024px) {
      &--button {
        --size: calc(var(--ham-size) * 4);
        cursor: pointer;
        position: fixed;
        top: 0;
        z-index: 1;
        background: var(--color-foreground);
        border: 0;
        width: var(--size);
        height: 100vh;
        display: flex;
        place-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        opacity: 0.125;
        transition: var(--transition-shortest-duration);

        &-right {
          right: 0;
        }

        &-left {
          transform: rotate(180deg);
          left: 0;
        }

        &:hover {
          opacity: 0.5;
        }

        // mix-blend-mode: difference;
      }
    }
  }

  .content {
    width: 0rem;
    min-height: 100vh;

    &:hover {
      width: 0rem;
    }

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
</style>
