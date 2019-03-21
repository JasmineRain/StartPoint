<template>

</template>

<script>
  /* eslint-disable vue/no-unused-components */

  import Sheet from "../Sheet/Sheet";
  import PlayerCtrl from "../CtrlPanel/PlayerCtrl/PlayerCtrl";
  import Progress from "../CtrlPanel/Progress/Progress";
  import PlayerModel from "../CtrlPanel/PlayerMode/PlayerMode";
  import CD from "../CD/CD";
  import "element-ui/lib/theme-chalk/display.css";
  import FuncPanel from "../FuncPanel/FuncPanel";

  export default {
    name: "Player",
    components: {
      FuncPanel,
      Sheet,
      PlayerCtrl,
      Progress,
      PlayerModel,
      CD
    }
  };
</script>

<style scoped>

</style>
