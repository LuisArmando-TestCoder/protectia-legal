<script lang="ts">
  import Button from "../Schedule/Schedule.svelte";
  import HomeAnchor from "../HomeAnchor/HomeAnchor.svelte";
  import Menu from "../MenuHalf/Menu.svelte";
</script>

<header class="header">
  <div class="schedule">
    <Button text="AGENDAR CITA"/>
  </div>
  <HomeAnchor />
  <Menu />
</header>

<style lang="scss">
  .schedule {
    position: absolute;
    top: calc(var(--ham-size) * 1.125);
    right: calc(var(--ham-size) * 4);

    @media screen and (max-width: 1024px) {
      left: var(--ham-size);
    }

    @media screen and (max-width: 720px) {
      visibility: hidden;
    }
  }

  .header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
