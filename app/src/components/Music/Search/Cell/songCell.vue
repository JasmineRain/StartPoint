<template>
  <div class="song_cell">
    <div class="song_text">
      <div class="song_name" :title="song.name">
        {{song.name}}
      </div>
      <div class="song_singer" :title="song.name">
        {{singer[0].name + ' - ' + album.name}}
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
      song: Object,
      singer: Array,
      album: Object
    }
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
    width: calc(100% - 70px);
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
    width: calc(100% - 10px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .song_singer {
    font-size: 12px;
    width: calc(100% - 10px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  i {
    padding: 5px;
  }
</style>