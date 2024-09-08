<script lang="ts">
  import Map from "../Map/Map.svelte";
  import { services } from "../../components/data/services";

  const items: HTMLElement[] = [];
</script>

<section class="footer">
  <div class="footer--lists">
    <ul class="footer--list">
      <b class="footer--title">Nuestros Servicios</b>
      {#each Object.keys(services) as service}
        <li class="footer--sub-list-item">
          <a
            bind:this={items[items.length]}
            class="footer--sub-anchor footer--anchor footer--name"
            href="/servicios?#{service.replace(' ', '-')}">{service}</a
          >
        </li>
      {/each}
    </ul>

    <ul class="footer--list">
      <li class="footer--sub-list-item">
        <a
          bind:this={items[items.length]}
          class="footer--sub-anchor footer--anchor"
          href="./TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB Y CONTRATACIONDESERVICIOSPROTECTIALEGAL.pdf"
          target="_blank">Términos y condiciones</a
        >
      </li>
      <li class="footer--sub-list-item">
        <a
          bind:this={items[items.length]}
          class="footer--sub-anchor footer--anchor"
          href="./TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB Y CONTRATACIONDESERVICIOSPROTECTIALEGAL.pdf"
          target="_blank">Políticas de uso</a
        >
      </li>
    </ul>
  </div>
  <div class="footer--content">
    <div class="footer--map">
      <Map />
    </div>
  </div>

  <b bind:this={items[items.length]} class="footer--anchor footer--name"
    >Copyright ©2024 – All Rights Reserved</b
  >
</section>

<style lang="scss">
  .footer {
    display: grid;
    padding: 250rem 0;
    font-family: var(--font-subtitle);
    position: relative;
    box-shadow: 0 0 100rem 200rem var(--color-foreground);

    &--lists {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &--anchor {
      text-align: center;
      padding-top: var(--ham-size);
    }

    &--sub-anchor {
      font-family: var(--font-subtitle);
      font-size: 24rem;
    }

    &--title {
      color: var(--color-background);
      font-family: var(--font-title);
      font-size: clamp(20rem, 5vw, 30rem);
      font-weight: bold;
      margin-bottom: 20rem;
      position: relative;
      display: block;
    }

    &--name {
      color: var(--color-background);
      font-family: var(--font-subtitle);
      font-size: clamp(10rem, 2.5vw, 15rem);
      font-weight: bold;
      position: relative;
    }

    &--list {
      margin: 0;
      padding: 0 var(--ham-size);
      list-style: none;
      margin-bottom: 40rem;
    }

    &--sub-list-item:not(:last-child) {
      position: relative;
      left: 0;
      padding-bottom: 20rem;
    }

    &--sub-anchor {
      color: var(--color-background);
      text-decoration: none;
      letter-spacing: 0rem;
      transition: var(--transition-shortest-duration);

      &:hover,
      &:focus,
      :not(.not-anchor) {
        letter-spacing: 0.5rem;

        &::before {
          content: "<";
          position: absolute;
          right: calc(clamp(20rem, 5vw, 30rem) * -1.5);
        }
      }
    }

    @media screen and (min-width: 1024px) {
      padding: 250rem 50rem;
      grid-template-columns: 1fr 1fr;

      &--map {
        width: min(100%, 674rem);
      }

      &--list {
        text-align: right;
      }

      &--sub-anchor {
        &:hover,
        &:focus,
        :not(.not-anchor) {
          &::before {
            content: ">";
            right: unset;
            left: calc(clamp(20rem, 5vw, 30rem) * -1.5);
          }
        }
      }
    }

    &--map {
      height: 335rem;
    }
  }
</style>
