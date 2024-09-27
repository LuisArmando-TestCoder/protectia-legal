<script lang="ts">
  import Steps from "../Steps/Steps.svelte";
  import ScheduleStep_1 from "./ScheduleSteps/ScheduleStep_1.svelte";
  import ScheduleStep_2 from "./ScheduleSteps/ScheduleStep_2.svelte";
  import ScheduleStep_3 from "./ScheduleSteps/ScheduleStep_3.svelte";
  import ScheduleStep_4 from "./ScheduleSteps/ScheduleStep_4.svelte";
  import ScheduleStep_5 from "./ScheduleSteps/ScheduleStep_5.svelte";
</script>

<Steps
  steps={[
    ScheduleStep_1,
    ScheduleStep_2,
    ScheduleStep_3,
    ScheduleStep_4,
    ScheduleStep_5,
  ]}
/>

<style lang="scss">
  /* Same SCSS as the previous version */
</style>
