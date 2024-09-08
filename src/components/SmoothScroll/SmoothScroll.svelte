<script>
  import { onMount } from "svelte";

  let viewport; // Div que contendrá nuestro contenido
  let content; // Contenido que queremos hacer scroll

  let scrollY = 0; // Valor de desplazamiento actual
  let targetScrollY = 0; // Valor objetivo del desplazamiento
  let easeFactor = 0.1; // Factor de suavizado

  // Función de animación
  function smoothScroll() {
    // Interpolar entre el desplazamiento actual y el objetivo
    scrollY += (targetScrollY - scrollY) * easeFactor;

    // Aplicar el desplazamiento al contenido
    content.style.transform = `translateY(-${scrollY}px)`;

    // Continuar la animación en el siguiente frame
    requestAnimationFrame(smoothScroll);
  }

  onMount(() => {
    // Iniciar el smooth scroll
    smoothScroll();

    // Escuchar el scroll del navegador
    viewport.addEventListener("scroll", () => {
      // El objetivo es el desplazamiento vertical de la ventana de scroll
      targetScrollY = viewport.scrollTop;
    });
  });
</script>

<!-- Vista del componente -->
<div bind:this={viewport} class="viewport">
  <div bind:this={content} class="content">
    <slot></slot>
    <!-- Insertar contenido -->
  </div>
</div>

<style>
  /* Estilos básicos */
  .viewport {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-y: scroll; /* Habilitar scroll vertical */
    will-change: transform;
  }

  .content {
    position: relative;
    width: 100%;
    height: 200vh; /* Duplicamos la altura para poder hacer scroll */
  }
</style>
