<template>
    <div class="progress">
        <div class="name">
            <span>{{this.song}}</span>
            <span>{{this.duration}}</span>
        </div>
        <el-slider v-model="currentTime" :show-tooltip="false" @change="change" :max="length"></el-slider>
    </div>
</template>

<script>
import { formatDuration } from "../../../../common/util";
export default {
  name: "Progress",
  data() {
    return {
      currentTime: 0,
      updater: {}
    };
  },
  computed: {
    song: function() {
      return (
        this.$store.getters.getCurrentMusic.name +
        " - " +
        this.$store.getters.getCurrentMusic.singer
      );
    },
    duration: function() {
      if (this.currentTime) {
        return (
          formatDuration(this.currentTime) +
          " / " +
          formatDuration(this.$store.getters.getCurrentMusic.duration)
        );
      } else {
        return (
          "00:00 / " +
          formatDuration(this.$store.getters.getCurrentMusic.duration)
        );
      }
    },
    length: function() {
      return this.$store.getters.getCurrentMusic.duration;
    }
  },
  methods: {
    change: function(newValue) {
      this.$store.getters.getPlayer.currentTime = newValue;
    },
    update: function() {
      this.currentTime = this.$store.getters.getPlayer.currentTime;
    }
  },
  mounted() {
    this.updater = setInterval(this.update, 1000);
  },
  beforeDestroy() {
    clearInterval(this.updater);
  }
};
</script>

<style scoped>
.name {
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.progress {
  margin-top: 10px;
}
</style>
