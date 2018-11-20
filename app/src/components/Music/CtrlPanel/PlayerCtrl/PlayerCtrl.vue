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
    status: function() {
      return this.$store.getters.getIsPlaying;
    }
  },
  methods: {
    playPre: function() {
      console.log("play pre");
    },
    playNext: function() {
      console.log("play next");
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
  border: none;
}
</style>
