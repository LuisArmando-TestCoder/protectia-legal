<script>
  // Supongamos que tienes un array de objetos con información de las tarjetas
  const cards = [
    {
      title: "Increíble paisaje",
      link: "increible-paisaje",
      url: "https://i.giphy.com/3ohhwFhUCOXOJfuttC.webp", // URL del gif
    },
    {
      title: "Animación divertida",
      link: "animacion-divertida",
      url: "https://i.giphy.com/XaLnoepP2IwFnUXdvb.webp", // URL del gif
    },
  ];
</script>

<div class="title">
  <h1>Landings</h1>
</div>
<h2>Build websites like Legos</h2>

<hr />

<p>You can download templates, components and functions</p>

<div class="card-container">
  {#each cards as card (cards.indexOf(card))}
    <a class="card" href={`page?p=${card.link}`}>
      <img
        alt={card.title}
        src={card.url}
        class="thumbnail"
      />
    </a>
  {/each}
</div>

<style lang="scss">
  @import "./styles/reset.scss";
  @import "./styles/global.scss";

  .card-container {
    display: grid;
    grid-gap: 100rem;
    padding: 100rem;
    grid-template-columns: repeat(auto-fit, minmax(400rem, 1fr));  }
  /* Estilos para las tarjetas */
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .thumbnail {
    width: 100%; /* Ajusta el tamaño según tus necesidades */
    max-height: 300px; /* Limita la altura del gif */
    object-fit: cover;
    border-radius: 4px;
  }
</style>
