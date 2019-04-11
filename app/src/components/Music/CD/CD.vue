<template>
  <div class="cd">
    <div class="cover">
      <img :src="this.cover" alt="" width="100%" height="100%" style="border-radius: 50%">
    </div>
    <div class="lyric-content" ref="lyricContent">
      <div class="lyric-wrapper" ref="lyricWrapper">
        <p class="lrc-item" ref="lyric" v-if="!lyric" >歌词获取中</p>
        <p class="lrc-item" ref="lyric" v-if="lyric" v-for="(item, key, index) in lyric" :class="lyricIndex === index + 1 ? `active` : ``">{{item}}</p>
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
        return this.$store.getters.getLyric;
      },
      lyricIndex: function () {
        return this.$store.getters.getLyricIndex
      }
    },
    methods: {
      setLyricRef: function () {
        this.$store.commit("setLyricContent", this.$refs.lyricContent);
      }
    },
    mounted() {
      this.setLyricRef();
    }
  };
</script>

<style lang="stylus" scoped>
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
  .lrc-item
    width:100%
    height:auto
    min-height:26px
    line-height:26px
    text-align:center
    margin:0
    color:$text_before_color
    font-size:12px
    &.active
      color:#A7EEBE
</style>
