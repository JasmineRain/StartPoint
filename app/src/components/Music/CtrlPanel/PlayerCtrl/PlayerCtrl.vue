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
      status: function () {
        return this.$store.getters.getIsPlaying;
      },
      //当前歌单曲目数量
      num: function () {
        return this.$store.getters.getMusicList.length;
      }
    },
    methods: {

      playPre: function () {
        let index = (this.$store.getters.getCurrentMusic.index - 1 + this.num) % this.num;
        let pmusic = this.$store.getters.getMusicList[index];
        let songId = 0;
        let albumId = 0;
        let lyricId = 0;
        switch (pmusic.vendor) {
          case "netease":
            songId = pmusic.song.id;
            albumId = pmusic.album.id;
            lyricId = pmusic.song.id;
            break;
          case "qq":
            songId = pmusic.song.mid;
            albumId = pmusic.album.id;
            lyricId = pmusic.song.mid;
            break;
        }
        let urlParams = {
          vendor: pmusic.vendor,
          id: songId
        };
        let coverParams = {
          vendor: pmusic.vendor,
          id: albumId
        };
        let lyricParams = {
          vendor: pmusic.vendor,
          id: lyricId
        };
        let params = {urlParams, coverParams, lyricParams};
        this.$store.dispatch("playPrevious",params);
        this.$store.commit("setCurrentMusic", {
          album: pmusic.album.name,
          duration: pmusic.song.duration,
          index: pmusic.index,
          vendor: pmusic.vendor,
          name: pmusic.song.name,
          singer: pmusic.singer
        });
      },

      playNext: function () {
        let index = (this.$store.getters.getCurrentMusic.index + 1) % this.num;
        let nmusic = this.$store.getters.getMusicList[index];
        let songId = 0;
        let albumId = 0;
        let lyricId = 0;
        switch (nmusic.vendor) {
          case "netease":
            songId = nmusic.song.id;
            albumId = nmusic.album.id;
            lyricId = nmusic.song.id;
            break;
          case "qq":
            songId = nmusic.song.mid;
            albumId = nmusic.album.id;
            lyricId = nmusic.song.mid;
            break;
        }
        let urlParams = {
          vendor: nmusic.vendor,
          id: songId
        };
        let coverParams = {
          vendor: nmusic.vendor,
          id: albumId
        };
        let lyricParams = {
          vendor: nmusic.vendor,
          id: lyricId
        };
        let params = {urlParams, coverParams, lyricParams};
        this.$store.dispatch("playNext", params);
        this.$store.commit("setCurrentMusic", {
          album: nmusic.album.name,
          duration: nmusic.song.duration,
          index: nmusic.index,
          vendor: nmusic.vendor,
          name: nmusic.song.name,
          singer: nmusic.singer
        });
      },

      playOrStop: function () {
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
