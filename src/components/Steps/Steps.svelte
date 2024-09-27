<script lang="ts">
  export let steps: Array<ConstructorOfATypedSvelteComponent>;
  let currentStep: number = 0;
  // Hypothetical form requirement tracker (filled or not)
  let formValid: boolean = true;

  function nextStep() {
    if (formValid && currentStep < steps.length - 1) {
      currentStep++;
    }
  }

  function previousStep() {
    if (currentStep > 0) {
      currentStep--;
    }
  }

  $: console.log("Form valid:", formValid);
</script>

<div class="multi-step-container">
  <div class="step-content">
    <p class="step-content--name">Paso {currentStep + 1}</p>
    <div class="counter">
      {#each Object.keys(steps) as index}
        <div class="counter--step {Number(index) == currentStep}"></div>
      {/each}
    </div>
    <div class="steps">
      {#each Object.entries(steps) as [index, Step]}
        <div class="step {Number(index) == currentStep}">
          <Step />
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="navigation">
  <button
    class="navigation--skip {currentStep === 0}"
    on:click={previousStep}
    disabled={currentStep === 0}>Anterior</button
  >
  <button
    class="navigation--skip {currentStep === steps.length - 1}"
    on:click={nextStep}
    disabled={!formValid || currentStep === steps.length - 1}>Siguiente</button
  >
</div>

<style lang="scss">
  .multi-step-container {
    width: 100%;
    display: block;
  }

  .steps {
    display: flex;
    justify-content: center;
    padding: 25rem;
  }

  .step {
    width: 0%;
    opacity: 0;
    clip-path: inset(0 50% 0 50%);
    transition: var(--transition-shortest-duration);
    display: grid;
    place-items: center;
    user-select: none;
    pointer-events: none;

    &.true {
      width: 100%;
      opacity: 1;
      clip-path: inset(0 0 0 0);
      pointer-events: all;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;

    &--skip {
      background: var(--color-background); /* Semi-transparent background */
      color: var(--color-outline);
      backdrop-filter: blur(10rem); /* Frosted glass effect */
      -webkit-backdrop-filter: blur(
        10rem
      ); /* Frosted glass effect for Safari */
      border: none; /* Light border */
      border-radius: 10rem; /* Rounded corners */
      padding: 10rem 30rem; /* Padding */
      font-size: 16rem; /* Font size */
      cursor: pointer;
      box-shadow: 0 3.5rem 10.5rem -7rem var(--color-outline); /* Subtle shadow */
      transition: all 0.3s ease; /* Smooth transition */

      &:hover {
        color: var(--color-foreground);
      }

      &:active {
        transition: var(--transition-shortest-duration);
        background: var(--color-outline);
        color: var(--color-background);
        box-shadow: 0 6rem 12rem; /* Deeper shadow on hover */
      }

      transition: var(--transition-short-duration);
      opacity: 1;
      user-select: none;

      &.true {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  .counter {
    display: flex;
    justify-content: space-around;
    padding: 25rem;
  }

  .counter--step {
    margin: 0 25rem;
    padding: 0;
    height: 5rem;
    width: 100%;
    border-radius: 5rem;
    transition: var(--transition-shortest-duration);
    background: var(--color-background-highlight);

    &.true {
      background: var(--color-outline);
      padding: 0 25rem;
    }
  }

  .step-content {
    display: grid;
    grid-template-rows: 1fr 2.5fr;

    &--name {
        text-align: center;
    }
  }
</style>
