<template>
  <div class="playlist_cell">
    <div class="playlist_cover">
      <img style="width: 100%; height: 100%" :src="playlist.cover" alt="../../../../assets/test.jpg">
    </div>
    <div class="playlist_info">
      <div class="playlist_name">
        {{playlist.name}}
      </div>
      <div class="playlist_author">
        {{creator.name + " - " + parseInt(playlist.play/1000) + " K播放"}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "playlistCell",
    props: {
      playlist: Object,
      creator: Object
    }
  }
</script>

<style scoped>
  .playlist_cell {
    width: 100%;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
  .playlist_cover {
    width: 50px;
    height: 50px;
  }
  .playlist_info {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: rgba(255, 255, 255, 0.8);
    padding: 5px 0 5px 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .playlist_name {
    font-size: 15px;
  }
  .playlist_author {
    font-size: 12px;
  }
</style>