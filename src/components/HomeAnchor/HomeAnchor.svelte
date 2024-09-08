<a class="hero-home-anchor" href="/#">
  <img
    class="hero-logo"
    src="./Logos/SVG/main logo.svg"
    alt="brand mark"
  />
</a>

<style lang="scss">
  .hero-home-anchor {
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .hero-logo {
    top: calc(clamp(200rem, 50vw, 300rem)* -.25);
    width: clamp(200rem, 50vw, 300rem);
    position: absolute;
    object-fit: contain;
    object-position: center;
  }
</style>
