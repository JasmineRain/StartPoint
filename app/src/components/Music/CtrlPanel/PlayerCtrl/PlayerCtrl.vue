<template>
    <ul>
        <button v-on:click="playPre">
            <li>
                <img src="../../../../assets/previous.png" alt="">
            </li>
        </button>
        <button v-on:click="playOrStop">
            <li>
                <img src="../../../../assets/play.png" alt="" v-show="!status">
                <img src="../../../../assets/stop.png" alt="" v-show="status">
            </li>
        </button>
        <button v-on:click="playNext">
            <li>
                <img src="../../../../assets/next.png" alt="">
            </li>
        </button>
    </ul>
</template>

<script>
export default {
  name: "PlayerCtrl",
  computed: {
    //播放暂停状态
    status: function() {
      return this.$store.getters.getIsPlaying;
    },
    //当前歌单曲目数量
    num: function() {
      return this.$store.getters.getMusicList.length;
    }
  },
  methods: {
    playPre: function() {
      this.$store.dispatch(
        "playPrevious",
        (parseInt(this.$store.getters.getCurrentMusic.index) + this.num - 1) %
          this.num
      );
    },
    playNext: function() {
      this.$store.dispatch(
        "playNext",
        (parseInt(this.$store.getters.getCurrentMusic.index) + 1) % this.num
      );
    },
    playOrStop: function() {
      let player = this.$store.getters.getPlayer;
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
      this.$store.commit("setIsPlaying", !player.paused);
    }
  }
};
</script>

<style scoped>
li {
  float: left;
  list-style: none;
  margin: 0 10px 0 10px;
}
ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
}
button {
  border: none;
  padding: 0;
  background: transparent;
}
button:hover {
  opacity: 0.7;
}
button:focus {
  outline: none;
}
</style>
