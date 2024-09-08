<script lang="ts">
  import { onMount } from "svelte";

  let isVideoPaused: boolean;
  let videoElement: HTMLVideoElement;

  function setIsVideoPaused() {
    const { currentTime, paused, ended } = videoElement;

    isVideoPaused = currentTime > 0 && !paused && !ended;
  }

  function changeVideo() {
    setIsVideoPaused();
    if (!isVideoPaused) videoElement.play();
    if (isVideoPaused) videoElement.pause();
  }

  onMount(() => {
    videoElement.addEventListener("ended", () => {
      console.log(videoElement)
      isVideoPaused = true;
    });
  });
</script>

<div class="video">
  <video
    on:click={changeVideo}
    bind:this={videoElement}
    class="hero-banner-video"
    src="./videos/3195441-uhd_3840_2160_25fps.mp4"
  ></video>
  <button on:click={changeVideo} class="video--play-button {isVideoPaused}">
    <div class="play-container">
      <img class="ghost" src="./icons/play.svg" alt="video play button" />
      <img src="./icons/play.svg" alt="video play button" />
    </div>
  </button>
</div>

<style lang="scss">
  .video {
    position: relative;
    display: flex;
    place-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    .play-container {
      position: relative;
    }

    .ghost {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.875;
    }

    &--play-button {
      cursor: pointer;
      border: 0;
      margin: 0;
      padding: 0;
      background: transparent;
      position: absolute;
      transition: var(--transition-shortest-duration);

      &.false {
        opacity: 0;
      }

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(1.2);
        opacity: 0.5;

        .ghost {
          animation: fade-grow var(--transition-shortest-duration) ease-out;
        }
      }
    }
  }

  @keyframes fade-grow {
    100% {
      opacity: 0;
      transform: scale(calc(1.25 * 1.25), calc(1.35 * 1.25));
    }
  }

  .hero-banner-video {
    object-fit: cover;
    width: 100%;
    height: clamp(50vw, 100vh, min(50vh, 80vh));
  }
</style>
