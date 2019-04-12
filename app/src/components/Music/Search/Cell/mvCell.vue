<template>
  <div class="mv_cell">
    <div class="mv_cover">
      <img style="width: 100%; height: 100%;" :src="mv.cover" alt="../../../../assets/test.jpg">
    </div>
    <div class="mv_info">
      <div class="mv_name" :title="mv.name">
        {{mv.name}}
      </div>
      <div class="mv_desc" :title="singer[0].name + ' - ' + parseInt(play/10000) + ' 万次播放'">
        {{singer[0].name + " - " + parseInt(play/1000) + " K播放"}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mvCell",
    props: {
      mv: Object,
      singer: Array,
      play: Number
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
    cursor: pointer;
  }
  .mv_cover {
    width: 50px;
    height: 50px;
  }
  .mv_info {
    width: calc(100% - 70px);
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
    width: calc(100% - 10px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mv_desc {
    font-size: 12px;
    width: calc(100% - 10px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>