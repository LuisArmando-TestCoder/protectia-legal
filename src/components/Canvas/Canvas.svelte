<script lang="ts">
  import { onMount } from "svelte";
  import callScenes3D from "./scenes-preset/utils/callScenes3D";

  onMount(() => {
    callScenes3D(["Default", "Main"], "canvas");
  });
</script>

<div class="canvas">
  <canvas id="canvas"></canvas>
</div>

<style>
  .canvas {
    /* pointer-events: none; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
