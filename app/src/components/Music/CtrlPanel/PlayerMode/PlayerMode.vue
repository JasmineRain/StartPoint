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
        <img src="../../../../assets/mv.png" alt="">
      </li>
      <li>
        <img src="../../../../assets/comment.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PlayerMode",
    computed: {
      playMode: function () {
        return this.$store.getters.getPlayMode;
      }
    },
    methods: {
      changeMode: function () {
        this.$store.commit("setPlayMode", (this.playMode + 1) % 3 );
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
