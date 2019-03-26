<template>
  <div class="maincontent">
    <div class="fixed-bg"
         v-bind:style="{backgroundImage:'url('+bgUrl+')'} "
         v-loading="loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
      <div class="mask-fixedbg">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Background",
    data() {
      return {};
    },
    computed: {
      bgUrl() {
        return this.$store.getters.getBGUrl;
      },
      loading: function () {
        return this.$store.getters.getBGLoading
      }
    },
    methods: {
      getBackground: function () {
        this.$store.dispatch("getBGInfo");
      }
    },
    mounted() {
      this.getBackground();
    }
  };
</script>

<style scoped>
  .fixed-bg {
    position: fixed;
    z-index: -2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    background-size: cover;
    background-position: center center;
  }

  .mask-fixedbg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: -webkit-radial-gradient(
        50% 50%,
        ellipse closest-corner,
        rgba(0, 0, 0, 0) 10%,
        rgb(0, 0, 0) 70%
    );
    opacity: 0.9;
  }
</style>
