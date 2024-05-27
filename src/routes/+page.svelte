<script>
  import Canvas from "../components/Canvas/Canvas.svelte";
  import HeroBanner from "../components/HeroBanner/HeroBanner.svelte";
  import HomeAnchor from "../components/HomeAnchor/HomeAnchor.svelte";
  import Loading from "../components/Loading/Loading.svelte";
  import Menu from "../components/Menu/Menu.svelte";
</script>

<style lang="scss">
  @import "./styles/reset.scss";
  @import "./styles/global.scss";
</style>

<Loading />
<Canvas />
<Menu />
<HeroBanner />
<HomeAnchor />
