<script>
  import Loading from "../components/Loading/Loading.svelte";
  import Home from "../components/Home/Home.svelte";
  import Header from "../components/Header/Header.svelte";
  import GlobalMenu from "../components/GlobalMenu/GlobalMenu.svelte";
</script>

<style lang="scss">
  @import "./styles/reset.scss";
  @import "./styles/global.scss";
</style>

<GlobalMenu />
<Header />
<Loading />
<Home/>