<template>
  <div class="song_cell">
    <div class="song_text">
      <div class="song_name">
        霜雪千年
      </div>
      <div class="song_singer">
        双笙 - 霜雪千年
      </div>
    </div>
    <div class="song_icon">
      <i class="icon-add"></i>
      <i class="icon-like"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "songCell",
    props: {
      song: Object
    },
  }
</script>

<style scoped>
  .song_cell {
    width: 100%;
    height: 60px;
    padding: 5px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .song_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px 0 5px 10px;
  }
  .song_icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .song_name {
    font-size: 15px;
  }
  .song_singer {
    font-size: 12px;
  }
  i {
    padding: 5px;
  }
</style>