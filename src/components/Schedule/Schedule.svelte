<script lang="ts">
  import StripePayment from "../StripePayment/StripePayment.svelte";

  export let text: string;
  export let theme: "light" | "dark" | "official" = "light";
  export let onClick: () => void = () => {};
</script>


<!-- <StripePayment showModal={} /> -->
<button
  class="button {theme}"
  on:click={() => {
    onClick();
  }}
>
  {text}
</button>

<style lang="scss">
  .button {
    --orientation: -1;

    border: none;
    padding: 10px 50px;
    font-size: 16px;
    border-radius: 4px;
    font-family: var(--font-extra);
    font-weight: normal;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-shortest-duration);

    &.dark {
      --orientation: 1;
    }

    &:hover {
      // transform: skew(calc(10deg * var(--orientation)));
      // text-decoration: underline;
    }
  }

  .light {
    background-color: var(--color-background);
    color: var(--color-foreground);
  }

  .dark {
    background-color: var(--color-foreground);
    color: var(--color-background);
  }

  .official {
    background-color: var(--color-background);
    color: var(--color-foreground);

    &:hover {
      background-color: var(--color-outline);
      color: var(--color-background);
      // transform: skew(calc(10deg * var(--orientation)));
    }
  }
</style>
