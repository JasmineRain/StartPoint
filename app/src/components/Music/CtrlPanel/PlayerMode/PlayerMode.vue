<template>
  <div class="model">
    <ul class="modelBtn">
      <li @click="changeMode">
        <img v-if="playMode === 0" src="../../../../assets/sequence.png" alt="">
        <img v-if="playMode === 1" src="../../../../assets/random.png" alt="">
        <img v-if="playMode === 2" src="../../../../assets/single.png" alt="">
      </li>
      <li>
        <img src="../../../../assets/voice.png" alt="">
      </li>
      <li>
        <img @click="showMV" src="../../../../assets/mv.png" alt="">
      </li>
      <li @click="showComment">
        <img src="../../../../assets/comment.png" alt="">
      </li>
    </ul>
    <Comment></Comment>
    <MV></MV>
  </div>
</template>

<script>
  import Comment from "../../Comment/Comment";
  import MV from "../../MV/MV";
  export default {
    name: "PlayerMode",
    data() {
      return {
      }
    },
    components:{ Comment, MV },
    computed: {
      playMode: function () {
        return this.$store.getters.getPlayMode;
      }
    },
    methods: {
      changeMode: function () {
        this.$store.commit("setPlayMode", (this.playMode + 1) % 3 );
      },
      showComment: function () {
        if(this.$store.getters.getCurrentMusic.index !== -1) {
          this.$store.commit("setShowComment", true);
          let index = this.$store.getters.getCurrentMusic.index;
          let vendor = this.$store.getters.getCurrentMusic.vendor;
          this.$store.dispatch("getMusicComment", {
            vendor: vendor,
            id: this.$store.getters.getMusicList[index].song.id
          })
        }
        else {
          this.$message({
            message: '请选择歌曲后查看',
            type: 'warning'
          })
        }
      },
      showMV: function () {
        if(this.$store.getters.getCurrentMusic.index !== -1) {
          this.$store.commit("setShowMV", true);
          let index = this.$store.getters.getCurrentMusic.index;
          let vendor = this.$store.getters.getCurrentMusic.vendor;
          this.$store.getters.getPlayer.pause();
          this.$store.commit("setIsPlaying", false);
          if(this.$store.getters.getMVUrl === ''){
            this.$store.dispatch("getMVUrlById", {
              vendor: vendor,
              id: this.$store.getters.getMusicList[index].song.mid || this.$store.getters.getMusicList[index].song.id
            });
          }
        }
        else {
          this.$message({
            message: '请选择歌曲后查看',
            type: 'warning'
          })
        }
      }
    }
  };
</script>

<style scoped>
  .model {
    overflow: hidden;
  }

  .modelBtn {
    display: flex;
    justify-content: space-around;
  }

  ul {
    margin: 10px 0;
    padding: 0;
  }

  li {
    float: left;
    list-style: none;
  }

  img:hover {
    opacity: 0.6;
  }
</style>
