<template>
  <div class="singer_cell">
    <div class="singer_avatar">
      <img style="width: 100%; height: 100%; border-radius: 50%" :src="avatar" alt="../../../../assets/test.jpg">
    </div>
    <div class="singer_name">
      <span>
        {{name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "singerCell",
    props: {
      name: String,
      album: Number,
      avatar: String
    }
  }
</script>

<style scoped>
  .singer_cell {
    width: 100%;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    align-items: center;
  }
  .singer_avatar {
    width: 50px;
    height: 50px;
  }
  .singer_name {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
</style>