<script lang="ts">
  export let text: string;
  export let type: 'title' | 'subtitle';
</script>

<p class={`text ${type}`}>{text}</p>

<style lang="scss">
  .text {
    margin: 0;
    padding: 0;
  }
  
  .title {
    font-weight: bold;
    color: inherit;
    display: flex;
    place-items: center;
    justify-content: center;
    font-family: var(--font-title);
    font-weight: 100;
    font-size: clamp(20px, 5vw, 40px);
    color: var(--color-background);
  }
  
  .subtitle {
    color: inherit;
    font-size: 14px;
    font-family: var(--font-title);
    font-weight: normal;
    letter-spacing: 1.5rem;
  }
</style>
