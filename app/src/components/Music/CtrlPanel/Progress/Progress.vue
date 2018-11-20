<template>
    <div class="progress">
        <div class="name">
            <span>{{this.song}}</span>
            <span>{{this.duration}}</span>
        </div>
        <el-slider v-model="value1" label="4"></el-slider>
    </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {
      value1: 80
    };
  },
  computed: {
    song: function() {
      return (
        this.$store.getters.getCurMusic.name +
        " - " +
        this.$store.getters.getCurMusic.singer
      );
    },
    duration: function() {
      return this.$store.getters.getCurMusic.duration;
    }
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
