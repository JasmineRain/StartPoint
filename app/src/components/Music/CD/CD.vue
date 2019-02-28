<template>
  <div class="cd">
    <div class="cover">
      <img :src="this.cover" alt="" width="100%" height="100%" style="border-radius: 50%">
    </div>
    <div class="lyric-content">
      <div class="lyric-wrapper">
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
        <p>lyriccccccccccccc</p>
      </div>
    </div>
  </div>
</template>

<script>
  import defaultImg from "../../../assets/test.jpg";

  export default {
    name: "CD",
    computed: {
      cover: function () {
        return this.$store.getters.getCurrentMusic.coverUrl
          ? this.$store.getters.getCurrentMusic.coverUrl
          : defaultImg;
      },
      lyric: function () {
        return this.$store.getters.getLrc;
      }
    }
  };
</script>

<style scoped>
  .cd {
    position: relative;
    height: 100%;
  }

  .cover {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }

  .lyric-content {
    padding: 20px 0;
    overflow: hidden;
    height: calc(100% - 220px);
    color: #fff;
    text-align: center;
  }

  p {
    margin: 2px 0;
  }
</style>
