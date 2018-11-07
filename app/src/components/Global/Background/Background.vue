<template>
    <div class="maincontent">
        <div class="fixed-bg"
             v-bind:style="{backgroundImage:'url('+bgUrl+')'} "
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
    return {
      url: "/BingAPI/HPImageArchive.aspx?format=js&idx=0&n=1"
      // loading: true
    };
  },
  computed: {
    bgUrl() {
      return this.$store.state.background.url;
    }
  },
  methods: {
    getBackground: function(url) {
      this.$store.dispatch("getBGInfo", url);
    }
  },
  mounted() {
    this.getBackground(this.url);
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
    rgb(0, 0, 0) 90%
  );
  opacity: 0.9;
}
</style>
