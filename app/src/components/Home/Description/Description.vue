<template>
  <div class="home">
    <div class="home-center">
      <div class="home-content">
        <h1 class="title">{{bgDes}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Description",
    computed: {
      bgDes() {
        return this.$store.getters.getBGWords.substring(
          0,
          this.$store.getters.getBGWords.indexOf("(")
        );
      }
    }
  };
</script>

<style scoped>
  .home {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .home-center {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 2vw;
    color: #fff;
    text-align: center;
    line-height: 2.5vw;
  }

  @media screen and (max-width: 400px) {
    .title {
      font-size: 12px;
    }
  }
</style>
