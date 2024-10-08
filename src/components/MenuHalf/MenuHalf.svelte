<script lang="ts">
  import { onMount } from "svelte";
  import { componentState } from "../../store";
  // import gsap from "gsap";
  import Button from "../Schedule/Schedule.svelte";
  import { services } from "../data/services";
  import { externals } from "../data/externals";
  import { playTick } from "../audioInteractions";
  import X from "../X/X.svelte";

  let isChecked: boolean;
  let isSwitched: boolean;
  const items: HTMLElement[] = [];

  function triggerItemsAnimation() {
    // const tl = gsap.timeline();
    // tl[isChecked ? 'to' : 'from'](items, { left: 100 * +isChecked, duration: 0.5, stagger: 0.125 });
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
      item.addEventListener("click", () => {
        playTick();
        item.blur();
      });
    });
  });

  let isModalOpen = true;
</script>

<div class="menu {isChecked ? 'open' : 'closed'}">
  <nav>
    <ul class="menu--list">
      <li class="menu--list-item">
        <a
          bind:this={items[items.length]}
          class="menu--anchor menu--title"
          href="/nosotros">Quiénes somos</a
        >
      </li>

      <li class="menu--list-item">
        <a
          bind:this={items[items.length]}
          class="menu--anchor menu--title"
          href="/servicios">Nuestros Servicios</a
        >

        <ul class="menu--list">
          {#each Object.keys(services) as service}
            <li class="menu--sub-list-item">
              <a
                bind:this={items[items.length]}
                class="menu--sub-anchor menu--anchor menu--title"
                href="/servicios?#{service.replace(' ', '-')}">{service}</a
              >
            </li>
          {/each}
        </ul>
      </li>

      <li class="menu--list-item">
        <b
          bind:this={items[items.length]}
          tabindex="0"
          class="menu--display {isSwitched && 'switch'}"
          on:click={() => {
            isSwitched = !isSwitched;
          }}>Recursos</b
        >

        <ul class="menu--list-externals">
          {#each Object.entries(externals) as [key, external]}
            <li class="menu--sub-list-item">
              <a
                bind:this={items[items.length]}
                class="menu--sub-anchor menu--anchor menu--title"
                href={external}
                target="_blank">{key}</a
              >
            </li>
          {/each}
        </ul>
      </li>

      <li class="menu--list-item">
        <b class="menu--title">Contáctenos</b>
        <ul class="menu--list">
          <li class="menu--sub-list-item">
            <a
              bind:this={items[items.length]}
              class="menu--sub-anchor menu--anchor"
              href="tel:+50688888888">(+506) 8888-8888</a
            >
          </li>
          <li class="menu--sub-list-item">
            <a
              bind:this={items[items.length]}
              class="menu--sub-anchor menu--anchor"
              href="mailto:correo@correo.com">correo@correo.com</a
            >
          </li>
        </ul>
      </li>

      <li bind:this={items[items.length]} class="menu--list-item">
        <Button
          text="AGENDAR CITA"
          theme="dark"
          onClick={() => {
            componentState.update((state) => ({
              id: 1,
              isOpen: true,
            }));
          }}
        />
      </li>

      <li class="menu--list-item">
        <a
          bind:this={items[items.length]}
          class="menu--sub-anchor menu--anchor"
          href="./TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB Y CONTRATACIONDESERVICIOSPROTECTIALEGAL.pdf"
          target="_blank">Términos y condiciones</a
        >
      </li>
    </ul>
  </nav>
</div>

<div class="menu-x">
  <X trigger={(ic) => (isChecked = !ic)} />
</div>

<style lang="scss">
  .menu-x {
    position: fixed;
    top: var(--ham-size);
    right: var(--ham-size);
    z-index: 2;
  }

  .menu {
    clip-path: inset(0 0 0 0);
    width: min(540rem, 100vw);
    height: 100vh;
    overflow: auto;
    top: 0;
    right: 0;
    position: fixed;
    backdrop-filter: blur(0rem);
    filter: blur(0rem);
    background: var(--color-background);
    transition: 1s;
    opacity: 1;
    display: flex;
    justify-content: right;
    font-family: var(--font-subtitle);
    padding-top: calc(var(--ham-size) * 2.5);
    padding-bottom: calc(var(--ham-size) * 2.5);
    padding-right: calc(var(--ham-size) * 1.5);
    // transform: scale(1);

    &--list,
    &--list-externals {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: right;
    }

    &--list-externals {
      height: 0;
      overflow: auto;
      padding: 0 25rem 0 50rem;
      margin: 0 0;
      box-shadow: inset 0 0 25rem var(--color-background);
      transition: var(--transition-shortest-duration);
      opacity: 0;
    }

    .switch + &--list-externals {
      height: clamp(100rem, 20vh, 300rem);
      margin: 25rem 0;
      opacity: 1;
    }

    &--list-item {
      position: relative;
      left: 0;
      padding-bottom: 40rem;
    }

    &--title {
      color: var(--color-foreground);
      font-family: var(--font-title);
      font-size: clamp(20rem, 5vw, 30rem);
      font-weight: bold;
      position: relative;
    }

    &--anchor {
      color: var(--color-foreground);
      text-decoration: none;
      letter-spacing: 0rem;
      transition: var(--transition-shortest-duration);

      &:hover,
      &:focus,
      :not(.not-anchor) {
        letter-spacing: 0.5rem;

        &::before {
          content: ">";
          position: absolute;
          left: calc(clamp(20rem, 5vw, 30rem) * -1.5);
        }
      }
    }

    &--display {
      text-decoration: none;
      color: var(--color-foreground);
      font-family: var(--font-title);
      font-size: clamp(20rem, 5vw, 30rem);
      font-weight: bold;
      position: relative;
      user-select: none;
      cursor: pointer;

      &::before {
        content: "+";
        position: absolute;
        left: calc(clamp(20rem, 5vw, 30rem) * -1.5);
      }

      &:hover,
      &:focus {
        &::before {
          content: "-";
        }
      }

      &::before {
        content: "+";
      }

      &.switch {
        content: "-";
        &:hover,
        &:focus {
          &::before {
            content: "+";
          }
        }

        &::before {
          content: "-";
        }
      }
    }

    &--sub-list-item {
      padding-top: 18rem;
    }

    &--sub-anchor {
      font-family: var(--font-subtitle);
      font-size: 24rem;
    }

    &.closed {
      clip-path: inset(0 0 0 100%);
      opacity: 0;
      backdrop-filter: blur(10rem);
      mix-blend-mode: color-burn;
      //   transform: scale(0.75);
      filter: blur(100rem);
      pointer-events: none;
    }
  }
</style>
