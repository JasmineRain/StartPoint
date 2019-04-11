<template>
  <div class="mv_cell">
    <div class="mv_cover">
      <img style="width: 100%; height: 100%;" src="../../../../assets/test.jpg" alt="">
    </div>
    <div class="mv_info">
      <div class="mv_name">
        风缘
      </div>
      <div class="mv_desc">
        双笙
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mvCell",
    props: {
      mv: Object
    }
  }
</script>

<style scoped>
  .mv_cell {
    width: 100%;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.8);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .mv_cover {
    width: 50px;
    height: 50px;
  }
  .mv_info {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px 0 5px 10px;
  }
  .mv_name {
    font-size: 15px;
  }
  .mv_desc {
    font-size: 12px;
  }
</style>