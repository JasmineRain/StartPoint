<template>
  <div class="model">
    <ul class="modelBtn">
      <li @click="changeMode">
        <img v-if="playMode === 0" src="../../../../assets/sequence.png" alt="">
        <img v-if="playMode === 1" src="../../../../assets/random.png" alt="">
        <img v-if="playMode === 2" src="../../../../assets/single.png" alt="">
      </li>
      <li>
        <el-popover
            placement="top-start"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <el-slider
              v-model="volume"
              vertical
              popper-class="popper"
              width="100"
              height="100px"
              @change="changeVolume">
          </el-slider>
          <img slot="reference" src="../../../../assets/voice.png" alt="">
        </el-popover>
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
        volume: 50
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
        let mode = (this.playMode + 1) % 3;
        this.$store.commit("setPlayMode", mode);
        switch (mode) {
          case 0:
            this.$message({
              message: '顺序播放',
              type: 'success'
            });
            break;
          case 1:
            this.$message({
              message: '随机播放',
              type: 'success'
            });
            break;
          case 2:
            this.$message({
              message: '单曲循环',
              type: 'success'
            });
            break;
        }

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
      },
      changeVolume: function (value) {
        this.$store.getters.getPlayer.volume = value / 100;
      }
    }
  };
</script>

<style>
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
  .el-popover {
    min-width: 0 !important;
    border: none !important;
  }
</style>
