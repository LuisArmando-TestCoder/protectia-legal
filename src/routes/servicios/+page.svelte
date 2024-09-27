<script>
  import Header from "../../components/Header/Header.svelte";
  import Services from "../../components/Services/Services.svelte";
  import GlobalMenu from "../../components/GlobalMenu/GlobalMenu.svelte";
  import ModalSchedule from "../../components/ModalSchedule/ModalSchedule.svelte";
  import Modal from "../../components/Modal/Modal.svelte";
</script>

<GlobalMenu />
<Header />
<Services />
<Modal id={1}>
  <ModalSchedule/>
</Modal>

<style lang="scss">
  @import "../styles/reset.scss";
  @import "../styles/global.scss";
</style>
