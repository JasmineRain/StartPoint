<template>
  <div class="album_cell">
    <div class="album_cover">
      <img style="width: 100%; height: 100%; border-radius: 5px" src="../../../../assets/test.jpg" alt="">
    </div>
    <div class="album_info">
      <div class="album_name">
        故梦
      </div>
      <div class="album_author">
        双笙
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "albumCell",
    props: {
      album: Object
    }
  }
</script>

<style scoped>
  .album_cell {
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
  }
  .album_cover {
    width: 50px;
    height: 50px;
  }
  .album_info {
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
  .album_name {
    font-size: 15px;
  }
  .album_author {
    font-size: 12px;
  }
</style>