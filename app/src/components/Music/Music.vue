<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>


<script>
  /* eslint-disable vue/no-unused-components */
  import FuncPanel from "./FuncPanel/FuncPanel";

  export default {
    name: "Music",
    components: {
      FuncPanel
    }
  };
</script>

<style scoped>
  .content {
    position: fixed;
    top: 50px;
    bottom: 10px;
    right: 40px;
    left: 40px;
    padding: 10px;
  }

  @media screen and (max-width: 1440px) {
    .content {
      top: 40px;
      bottom: 20px;
      right: 20px;
      left: 20px;
    }
  }

  @media screen and (max-width: 525px) {
    .content {
      top: 40px;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 0
    }
  }
</style>
