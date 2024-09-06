<script lang="ts">
  import { onMount } from "svelte";

  let current: string;
  let pages: { [index: string]: boolean } = {};

  onMount(() => {
    current = window.location.pathname.split("/")[1];

    const pagesList = ["nosotros", "", "servicios"];

    pagesList.forEach((key) => {
      pages[key] = key === current;
    });
  });
</script>

<div class="global-menu">
  {#each Object.entries(pages) as [page, isCurrent]}
    <a class="global-menu--anchor {isCurrent}" href="/{page}"></a>
  {/each}
</div>

<style lang="scss">
  .global-menu {
    position: fixed;
    right: 0;
    left: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    z-index: 2;
    height: calc(var(--ham-size) * 3);

    &--anchor {
      --diameter: 15rem;

      width: var(--diameter);
      height: var(--diameter);
      border-radius: 50%;
      background: var(--color-background);
      display: inline-block;
      margin: 10rem;
      transform: scale(1);
      transition: var(--transition-shortest-duration);
      box-shadow: 0 0 0rem var(--color-background);

      &:hover {
        transform: scale(1.5);
        box-shadow: 0 0 0 5rem transparent;
        height: var(--diameter);
      }

      &.true {
        transform: scale(2.5);
        z-index: 1;

        &:hover {
          transform: scale(3);
        }
      }
    }
  }
</style>
