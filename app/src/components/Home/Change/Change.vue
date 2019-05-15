<template>
  <div @click="changeBG" class="change">
    <a href="#"><img src="../../../assets/change.png" alt="" class="icon"></a>
  </div>
</template>

<script>
  export default {
    name: "Change",
    data() {
      return {
        index: 0
      }
    },
    methods: {
      changeBG: function () {
        this.index = (this.index + 1) % 8;
        this.$store.commit("setBGUrl", "https://www.bing.com" + this.$store.getters.getImages[this.index].url);
        this.$store.commit("setBGWords", this.$store.getters.getImages[this.index].copyright);
      }
    }
  };
</script>

<style scoped>
  .change {
    position: absolute;
    bottom: 35px;
    right: 130px;
  }

  @media screen and (max-width: 768px) {
    .change {
      position: absolute;
      bottom: 20px;
    }
  }

  @media screen and (max-width: 360px) {
    .change {
      position: absolute;
      right: 20px;
    }
  }

  .icon {
    width: 25px;
    height: 25px;
  }
</style>
